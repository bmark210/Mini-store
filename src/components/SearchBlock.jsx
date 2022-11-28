import React from "react";
const SearchBlock = ({ value, onChangeValue }) => {
  return (
    <div className="flex__search__block">
      <div style={{ paddingTop: "20px" }} className="search__block">
        <img src="/img/search.svg" alt="search" />
        <input
          value={value}
          onChange={onChangeValue}
          placeholder="Поиск..."
          type="text"
        />
      </div>
      <h1 style={{ paddingTop: "20px" }}>Все кроссовки</h1>
    </div>
  );
};
export default SearchBlock;
