import React from 'react';
import ListItem from './ListItem';
import PropTypes from 'prop-types';
import { filterVisibleRangeItem } from '../services/iiif-parser';

const List = props => {
  return (
    <ul data-testid="list">
      {props.items.map(item => {
        const filteredItem = filterVisibleRangeItem(item);
        if (!filteredItem) {
          return null;
        }
        return <ListItem key={filteredItem.id} item={filteredItem} />;
      })}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired
};

export default List;
