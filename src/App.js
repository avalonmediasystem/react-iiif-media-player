import React, { useEffect } from 'react';
import MediaElementContainer from './containers/MediaElementContainer';
import StructuredNav from './components/StructuredNav';
import ErrorMessage from './components/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
import './App.scss';

const App = (props) => {
  const { manifest, error } = useSelector((state) => state.getManifest);
  const dispatch = useDispatch();

  useEffect(() => {
    const { canvasIndex, config, iiifManifest, iiifManifestUrl } = props;
    if (iiifManifest) {
      dispatch(actions.fetchManifestSuccess(iiifManifest));
    } else if (iiifManifestUrl) {
      dispatch(actions.getRemoteManifest(iiifManifestUrl));
    }

    dispatch(actions.setCanvasIndex(canvasIndex));
    dispatch(actions.updateExternalConfig(config));
  }, [props]); // Re-run when props change

  if (manifest) {
    return (
      <section className="iiif-player">
        <div className="container">
          <MediaElementContainer key={Math.random()} manifest={manifest} />
          <StructuredNav manifest={manifest} />
        </div>
      </section>
    );
  }
  if (error) {
    return <ErrorMessage message={error} />;
  }
  return <p>...Loading</p>;
};

export default App;
