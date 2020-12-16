import React, { useState, useContext } from "react";
import ItemsContext from "context/itemsContext";
import { useHistory } from "react-router-dom";
import { Icon } from "@material-ui/core";
import "./SearchBar.scss";

/**
 * Renders and handles the search bar
 * sending the input value to the context to filter the products
 */

const SearchBar = () => {
  const { state, setSearchValue } = useContext(ItemsContext);
  const [value, setValue] = useState("");
  const history = useHistory();

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(value);
    history.push(`/search?q=${value}`);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={state.header.search}
        onChange={handleInputChange}
        value={value}
      />

      <button type="submit">
        <Icon>search</Icon>
      </button>
    </form>
  );
};

export default SearchBar;
