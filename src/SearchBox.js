import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="py-3">
      <input
        className=""
        type="search"
        placeholder="Search robot"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
