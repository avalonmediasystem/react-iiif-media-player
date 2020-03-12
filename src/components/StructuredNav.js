import React, { Component } from 'react';
import List from './List';
import { getMediaFragment, getCanvasId } from '../services/iiif-parser';
import { swapMediaElement } from '../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class StructuredNav extends Component {
  constructor(props) {
    super(props);
    this.manifest = this.props.manifest;
    this.state = {
      startTime: null
    };
  }

  componentDidUpdate(prevProps) {
    const { clickedUrl, player } = this.props;
    if (clickedUrl != prevProps.clickedUrl) {
      this.handleItemClick(clickedUrl);
    }

    const { startTime } = this.state;
    if (startTime) {
      // Set the start time
      player.setCurrentTime(startTime);
    }
  }

  handleItemClick(id) {
    const { player, canvases } = this.props;

    const canvasInManifest = canvases.find(c => getCanvasId(id) === c.canvasId);

    const canvasIndex = canvases.indexOf(canvasInManifest);

    let canvasSources = null;
    if (canvasInManifest) {
      canvasSources = canvasInManifest.canvasSources;
    }

    // Go to next section
    if (!canvasSources.includes(player.getSrc())) {
      this.props.swapMediaElement(canvasIndex);
    }

    const timeFragment = getMediaFragment(id);

    // Invalid time fragment
    if (!timeFragment) {
      console.error(
        'Error retrieving time fragment object from Canvas url in StructuredNav.js'
      );
      return;
    }

    this.setState({
      startTime: timeFragment.start
    });
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
