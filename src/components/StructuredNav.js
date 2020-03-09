import React, { Component } from 'react';
import List from './List';
import { getMediaFragment, getCanvas } from '../services/iiif-parser';
import { reloadMediaElement } from '../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Accordion } from 'react-bootstrap';

class StructuredNav extends Component {
  constructor(props) {
    super(props);
    this.manifest = this.props.manifest;
    this.state = {
      sections: []
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.clickedUrl) {
      this.handleItemClick(this.props.clickedUrl);
    }
  }

  handleItemClick(id) {
    const { player } = this.props;
    const timeFragment = getMediaFragment(id);

    const canvasId = getCanvas(id);
    const canvasInManifest = this.props.canvases.filter(
      c => canvasId == c.canvasId
    );
    let canvasSources = null;
    if (canvasInManifest.length > 0) {
      canvasSources = canvasInManifest[0].canvasSources;
    }

    // Invalid time fragment
    if (!timeFragment) {
      console.error(
        'Error retrieving time fragment object from Canvas url in StructuredNav.js'
      );
      return;
    }
    // Go to next section
    if (!canvasSources.includes(player.getSrc())) {
      this.props.reloadMediaElement(canvasId);
    }

    // Set the start time
    player.setCurrentTime(timeFragment.start);
  }

  render() {
    if (this.manifest.structures) {
      return (
        <Accordion>
          <List items={this.manifest.structures} />;
        </Accordion>
      );
    }
    return <p>There are no structures in the manifest.</p>;
  }
}

StructuredNav.propTypes = {
  manifest: PropTypes.object.isRequired
};

const mapDispatchToProps = {
  reloadMediaElement: reloadMediaElement
};

const mapStateToProps = state => ({
  clickedUrl: state.nav.clickedUrl,
  player: state.player,
  canvases: state.getManifest.canvases
});

export default connect(mapStateToProps, mapDispatchToProps)(StructuredNav);
