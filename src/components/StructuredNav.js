import React, { Component } from 'react';
import List from './List';
import { getMediaFragment, getCanvas } from '../services/iiif-parser';
import { swapMediaElement } from '../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class StructuredNav extends Component {
  constructor(props) {
    super(props);
    this.manifest = this.props.manifest;
  }

  componentDidUpdate(prevProps) {
    if (this.props.clickedUrl != prevProps.clickedUrl) {
      this.handleItemClick(this.props.clickedUrl);
    }
  }

  handleItemClick(id) {
    const { player, canvases } = this.props;
    const timeFragment = getMediaFragment(id);

    const canvasInManifest = canvases.filter(c => getCanvas(id) == c.canvasId);

    const canvasIndex = this.props.canvases
      .map(c => c.canvasId)
      .indexOf(getCanvas(id));

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
      this.props.swapMediaElement(canvasIndex);
    }

    // Set the start time
    player.setCurrentTime(timeFragment.start);
  }

  render() {
    if (this.manifest.structures) {
      return (
        <div data-testid="structured-nav">
          <List items={this.manifest.structures} />
        </div>
      );
    }
    return <p>There are no structures in the manifest.</p>;
  }
}

StructuredNav.propTypes = {
  manifest: PropTypes.object.isRequired
};

const mapDispatchToProps = {
  swapMediaElement: swapMediaElement
};

const mapStateToProps = state => ({
  clickedUrl: state.nav.clickedUrl,
  player: state.player,
  canvases: state.getManifest.canvases
});

export default connect(mapStateToProps, mapDispatchToProps)(StructuredNav);
