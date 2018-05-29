import React from 'react';
import List from './List';
import IIIFParser from '../services/iiif-parser';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PropTypes from 'prop-types';

const iiifParser = new IIIFParser();

const ListItem = props => {
  const { item } = props;
  const childCanvases = iiifParser.getChildCanvases(item);
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
    const label = item.label || 'Canvas item with no label';

    if (childCanvases.length > 0) {
      return childCanvases.map(canvasItem => (
        <a key={canvasItem.id} href={canvasItem.id} onClick={handleClick}>
          {label}
        </a>
      ));
    } else {
      return label;
    }
  };

  return (
    <li>
      {renderListItem()}
      {subMenu}
    </li>
  );
};

ListItem.propTypes = {
  key: PropTypes.string,
  item: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  navItemClick: url => dispatch(actions.navItemClick(url))
});

export default connect(null, mapDispatchToProps)(ListItem);
