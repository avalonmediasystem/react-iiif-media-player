import React, { Component } from 'react';
import MediaElementContainer from './containers/MediaElementContainer';
import StructuredNav from './components/StructuredNav';
import ErrorMessage from './components/ErrorMessage';
import { connect } from 'react-redux';
import * as actions from './actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { iiifManifest, iiifManifestUrl } = this.props;

    if (iiifManifest) {
      return this.props.fetchManifestSuccess(iiifManifest);
    }

    this.props.updateExternalConfig(this.props.config);
    this.props.getRemoteManifest(iiifManifestUrl);
  }

  render() {
    const { manifest, error } = this.props.getManifest;

    if (manifest) {
      return (
        <section className="iiif-player">
          <div className="container">
            <MediaElementContainer manifest={manifest} />
            <StructuredNav manifest={manifest} />
          </div>
        </section>
      );
    }
    if (error) {
      return <ErrorMessage message={error} />;
    }
    return <p>...Loading</p>;
  }
}

const mapStateToProps = state => ({
  getManifest: state.getManifest
});

const mapDispatchToProps = dispatch => ({
  fetchManifestSuccess: manifest =>
    dispatch(actions.fetchManifestSuccess(manifest)),
  getRemoteManifest: url => dispatch(actions.getRemoteManifest(url)),
  updateExternalConfig: config => dispatch(actions.updateExternalConfig(config))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
