import React, { Component } from 'react';
import List from './List';
import { getMediaFragment, getCanvasId } from '../services/iiif-parser';
import { swapMediaElement, setUnclick } from '../actions';
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

      // Go to next section
      if (!canvasSources.includes(player.getSrc())) {
        nextProps.swapMediaElement(canvasIndex, timeFragment.start);
      } else {
        // Set the playhead at the start of the time fragment
        player.setCurrentTime(timeFragment.start, nextProps.setUnclick());
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
  swapMediaElement: swapMediaElement,
  setUnclick: setUnclick
};

const mapStateToProps = state => ({
  clickedUrl: state.nav.clickedUrl,
  player: state.player.instance,
  canvases: state.getManifest.canvases,
  clicked: state.nav.clicked,
  isPlaying: state.player.isPlaying,
  canvasIndex: state.player.canvasIndex
});

export default connect(mapStateToProps, mapDispatchToProps)(StructuredNav);
