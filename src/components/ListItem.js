import React from 'react';
import List from './List';
import { getChildCanvases, getLabelValue } from '../services/iiif-parser';
import { useDispatch } from 'react-redux';
import * as actions from '../actions';
import PropTypes from 'prop-types';
import { useManifestState } from '../context/manifest-context';

const ListItem = (props) => {
  const manifestState = useManifestState();
  const { item } = props;
  const childCanvases = getChildCanvases({
    rangeId: item.id,
    manifest: manifestState.manifest,
  });
  const subMenu =
    item.items && item.items.length > 0 && childCanvases.length === 0 ? (
      <List items={item.items} isChild={true} />
    ) : null;

  // Reference for dispatching actions
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(actions.navItemClick(e.target.href));
  };

  const renderListItem = () => {
    const label = getLabelValue(item.label);
    if (childCanvases.length > 0) {
      return childCanvases.map((canvasId) => (
        <a key={canvasId} href={canvasId} onClick={handleClick}>
          {label}
        </a>
      ));
    }
    if (props.isChild) {
      return label;
    }
    return null;
  };

  return (
    <li data-testid="list-item">
      {renderListItem()}
      {subMenu}
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  isChild: PropTypes.bool,
};

export default ListItem;
