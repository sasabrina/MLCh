import React, { useState, useContext } from "react";
import ItemsContext from "../../context/itemsContext";
import { useHistory } from "react-router-dom";
import { Icon } from "@material-ui/core";
import "./SearchBar.scss";

const SearchBar = () => {
  const { state, setSearchValue } = useContext(ItemsContext);
  const [value, setValue] = useState("");
  const history = useHistory();

  const handleInput = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const onEnter = (e) => {
    e.preventDefault();
    setSearchValue(value);
    history.push(`/search?q=${value}`);
    setValue("");
  };

  return (
    <form onSubmit={onEnter}>
      <input
        type="text"
        placeholder={state.header.search}
        onChange={handleInput}
        value={value}
      />
      <button type="submit">
        <Icon>search</Icon>
      </button>
    </form>
  );
};

export default SearchBar;
