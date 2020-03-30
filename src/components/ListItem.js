import React from 'react';
import List from './List';
import {
  getChildCanvases,
  getLabelValue,
  isAtTop,
  getSectionURI
} from '../services/iiif-parser';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PropTypes from 'prop-types';

const ListItem = props => {
  const { item } = props;
  const childCanvases = getChildCanvases(item.id);
  const subMenu =
    item.items && item.items.length > 0 && childCanvases.length === 0 ? (
      <List items={item.items} />
    ) : null;

  const handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
    props.navItemClick(e.target.href);
  };

  const renderListItem = () => {
    const label = getLabelValue(item.label);
    if (childCanvases.length > 0) {
      return childCanvases.map(canvasId => (
        <a key={canvasId} href={canvasId} onClick={handleClick}>
          {label}
        </a>
      ));
    }
    if (!isAtTop(item)) {
      const timeUri = getSectionURI(item);
      return (
        <a key={timeUri} href={timeUri} onClick={handleClick}>
          {label}
        </a>
      );
    }
    return label;
  };

  return (
    <li data-testid="list-item">
      {renderListItem()}
      {subMenu}
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  navItemClick: url => dispatch(actions.navItemClick(url))
});

export default connect(null, mapDispatchToProps)(ListItem);
