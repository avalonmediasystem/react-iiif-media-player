import React, { useEffect } from 'react';
import List from './List';
import { getMediaFragment, getCanvasId } from '../services/iiif-parser';
import PropTypes from 'prop-types';

const StructuredNav = ({ manifest }) => {
  console.log('StructuredNav() manifest', manifest);
  if (manifest.structures) {
    return (
      <div
        data-testid="structured-nav"
        className="structured-nav"
        key={Math.random()}
      >
        {manifest.structures[0] && manifest.structures[0].items
          ? manifest.structures[0].items.map((item, index) => (
              <List items={[item]} key={index} isChild={false} />
            ))
          : null}
      </div>
    );
  }
  return <p>There are no structures in the manifest.</p>;
};

StructuredNav.propTypes = {
  manifest: PropTypes.object.isRequired,
};

export default StructuredNav;
