import React from 'react';
import List from './List';
import { getMediaFragment, getCanvasId } from '../services/iiif-parser';
import { switchCanvas } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const StructuredNav = (props) => {
  const playerProps = useSelector((state) => state.player);
  const { instance, canvasIndex } = playerProps;
  const navProps = useSelector((state) => state.nav);
  const { clicked, clickedUrl } = navProps;
  const canvases = useSelector((state) => state.getManifest.canvases);

  const dispatch = useDispatch();

  const { manifest } = props;

  if (clicked) {
    const canvasInManifest = canvases.find(
      (c) => getCanvasId(clickedUrl) === c.canvasId
    );
    const currentCanvasIndex = canvases.indexOf(canvasInManifest);
    const timeFragment = getMediaFragment(clickedUrl);

    // Invalid time fragment
    if (!timeFragment) {
      console.error(
        'Error retrieving time fragment object from Canvas URL in structured navigation'
      );
    }

    // When clicked structure item is not in the current canvas
    if (canvasIndex != currentCanvasIndex) {
      dispatch(switchCanvas(currentCanvasIndex, timeFragment.start));
    } else {
      console.log(instance);
      // Set the playhead at the start of the time fragment
      instance.setCurrentTime(timeFragment.start);
    }
  }

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
};

StructuredNav.propTypes = {
  manifest: PropTypes.object.isRequired,
};

export default StructuredNav;
