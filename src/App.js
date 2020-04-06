import React, { Component } from 'react';
import MediaElementContainer from './containers/MediaElementContainer';
import StructuredNav from './components/StructuredNav';
import ErrorMessage from './components/ErrorMessage';
import { connect } from 'react-redux';
import * as actions from './actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manifest: this.props.iiifManifest
    };
  }

  componentDidMount() {
    const { iiifManifest, iiifManifestUrl, canvasIndex } = this.props;

    if (iiifManifest) {
      return this.props.fetchManifestSuccess(iiifManifest);
    }

    this.props.updateExternalConfig(this.props.config);
    this.props.getRemoteManifest(iiifManifestUrl);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.iiifManifest !== prevState.manifest) {
      nextProps.fetchManifestSuccess(nextProps.iiifManifest);
      nextProps.setCanvasIndex(nextProps.canvasIndex);
      return {
        manifest: nextProps.iiifManifest
      };
    }
    return null;
  }

  render() {
    const { manifest, error } = this.props.getManifest;

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
  }
}

const mapStateToProps = state => ({
  getManifest: state.getManifest
});

const mapDispatchToProps = dispatch => ({
  fetchManifestSuccess: manifest =>
    dispatch(actions.fetchManifestSuccess(manifest)),
  getRemoteManifest: url => dispatch(actions.getRemoteManifest(url)),
  updateExternalConfig: config =>
    dispatch(actions.updateExternalConfig(config)),
  setCanvasIndex: canvasIndex => dispatch(actions.setCanvasIndex(canvasIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
