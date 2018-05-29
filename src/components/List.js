import React from 'react';
import ListItem from './ListItem';
import PropTypes from 'prop-types';
import IIIFParser from '../services/iiif-parser';

const iiifParser = new IIIFParser();

const List = props => {
  return (
    <ul>
      {props.items.map(item => {
        const filteredItem = iiifParser.filterVisibleRangeItem(item);
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
