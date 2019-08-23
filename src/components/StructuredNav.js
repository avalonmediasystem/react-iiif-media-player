import React, { Component } from 'react';
import List from './List';
import { getMediaFragment } from '../services/iiif-parser';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class StructuredNav extends Component {
  constructor(props) {
    super(props);
    this.manifest = this.props.manifest;
  }

  componentDidUpdate(prevProps) {
    console.log('componentDiDUpdate');
    if (this.props.clickedUrl) {
      this.handleItemClick(this.props.clickedUrl);
    }
  }

  handleItemClick(id) {
    console.log('handleItemClick');
    const { player } = this.props;
    const timeFragment = getMediaFragment(id);

    if (!timeFragment) {
      console.error(
        'Error retrieving time fragment object from Canvas url in StructuredNav.js'
      );
      return;
    }
    // Pause player (if not)
    if (!player.paused) {
      player.pause();
    }
    // Set the start time
    player.setCurrentTime(timeFragment.start);
    // Start the player
    player.play();
  }

  render() {
    if (this.manifest.structures) {
      return <List items={this.manifest.structures} />;
    }
    return <p>There are no structures in the manifest.</p>;
  }
}

StructuredNav.propTypes = {
  manifest: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  clickedUrl: state.nav.clickedUrl,
  player: state.player
});

export default connect(mapStateToProps)(StructuredNav);
