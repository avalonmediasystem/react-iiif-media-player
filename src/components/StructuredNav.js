import React, { Component } from 'react';
import List from './List';
import { getMediaFragment, getCanvasId } from '../services/iiif-parser';
import { switchCanvas, resetClick } from '../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class StructuredNav extends Component {
  constructor(props) {
    super(props);
    this.manifest = this.props.manifest;
    this.state = {};
  }

  static getDerivedStateFromProps(nextProps) {
    const { player, clickedUrl, canvases, clicked } = nextProps;
    if (clicked) {
      const canvasInManifest = canvases.find(
        c => getCanvasId(clickedUrl) === c.canvasId
      );
      const canvasIndex = canvases.indexOf(canvasInManifest);

      let canvasSources = null;
      if (canvasInManifest) {
        canvasSources = canvasInManifest.canvasSources;
      }

      const timeFragment = getMediaFragment(clickedUrl);

      // Invalid time fragment
      if (!timeFragment) {
        console.error(
          'Error retrieving time fragment object from Canvas url in StructuredNav.js'
        );
        return;
      }

      // Clicked fragment is not in the current canvas => load relevant canvas
      if (!canvasSources.includes(player.getSrc())) {
        nextProps.switchCanvas(canvasIndex, timeFragment.start);
      } else {
        // Set the playhead at the start of the time fragment
        player.setCurrentTime(timeFragment.start, nextProps.resetClick());
      }

      return null;
    }
    return null;
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
  switchCanvas: switchCanvas,
  resetClick: resetClick
};

const mapStateToProps = state => ({
  clickedUrl: state.nav.clickedUrl,
  player: state.player.instance,
  canvases: state.getManifest.canvases,
  clicked: state.nav.clicked,
  canvasIndex: state.player.canvasIndex
});

export default connect(mapStateToProps, mapDispatchToProps)(StructuredNav);
