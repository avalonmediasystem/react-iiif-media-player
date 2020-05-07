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
    const { player, clickedUrl, canvases, clicked, canvasIndex } = nextProps;
    if (clicked) {
      const canvasInManifest = canvases.find(
        (c) => getCanvasId(clickedUrl) === c.canvasId
      );
      const currentCanvasIndex = canvases.indexOf(canvasInManifest);

      const timeFragment = getMediaFragment(clickedUrl);

      // Invalid time fragment
      if (!timeFragment) {
        console.error(
          'Error retrieving time fragment object from Canvas url in StructuredNav.js'
        );
        return;
      }

      // When clicked structure item is not in the current canvas
      if (canvasIndex !== currentCanvasIndex) {
        nextProps.switchCanvas(currentCanvasIndex, timeFragment.start);
      } else {
        // Set the playhead at the start of the time fragment
        player.setCurrentTime(timeFragment.start, nextProps.resetClick());
      }

      return null;
    }
    return null;
  }

  render() {
    const { manifest } = this.props;
    if (manifest.structures) {
      return (
        <div
          data-testid="structured-nav"
          className="structured-nav"
          key={Math.random()}
        >
          {manifest.structures[0] && manifest.structures[0].items
            ? manifest.structures[0].items.map((item, index) => (
                <List items={[item]} key={index} isChild={false} />
              ))
            : null}
        </div>
      );
    }
    return <p>There are no structures in the manifest.</p>;
  }
}

StructuredNav.propTypes = {
  manifest: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  switchCanvas: switchCanvas,
  resetClick: resetClick,
};

const mapStateToProps = (state) => ({
  clickedUrl: state.nav.clickedUrl,
  player: state.player.instance,
  canvases: state.getManifest.canvases,
  clicked: state.nav.clicked,
  canvasIndex: state.player.canvasIndex,
});

export default connect(mapStateToProps, mapDispatchToProps)(StructuredNav);
