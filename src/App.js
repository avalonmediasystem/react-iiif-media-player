import React, { Component } from 'react';
import MediaElementContainer from './containers/MediaElementContainer';
import StructuredNav from './components/StructuredNav';
import ErrorMessage from './components/ErrorMessage';
import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {
  componentDidMount() {
    const manifestUrl = this.getManifestUrl();
    if (manifestUrl === '') {
      return;
    }
    this.props.updateExternalConfig(this.props.config);
    this.props.getRemoteManifest(manifestUrl);
  }

  getManifestUrl() {
    const el = document.getElementById('iiif-manifest-url');
    if (!el) {
      return '';
    }
    return el.getAttribute('data-manifest-url');
  }

  render() {
    const { manifest, error } = this.props.getManifest;

    if (manifest) {
      return (
        <section>
          <MediaElementContainer manifest={manifest} />
          <StructuredNav manifest={manifest} />
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
  getRemoteManifest: url => dispatch(actions.getRemoteManifest(url)),
  updateExternalConfig: config => dispatch(actions.updateExternalConfig(config))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
