import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../reducers';
import MediaElementContainer from '../MediaElementContainer/MediaElementContainer';

const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };

export default function IIIFPlayerWrapper({ iiifManifestUrl }) {
  const [manifest, setManifest] = useState();

  useEffect(() => {
    fetch(iiifManifestUrl)
      .then((result) => result.json())
      .then((data) => {
        console.log('data', data);
        setManifest(data);
      });
  }, []);

  if (!manifest) return <p>...Loading</p>;

  return (
    <Provider store={store}>
      <section className="iiif-player">
        <div className="container">
          <MediaElementContainer manifest={manifest} />
          {/* <StructuredNav manifest={manifest} /> */}
        </div>
      </section>
    </Provider>
  );
}
