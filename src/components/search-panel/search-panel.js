import React from 'react';

import './search-panel.css';

const SearchPanel = ({setValue}) => {

  return (
    <input  type="text"
              className="form-control search-input"
              placeholder="type to search" />
  );
};

export default SearchPanel;
