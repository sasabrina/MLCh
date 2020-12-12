import React, { useState, useEffect, createContext } from "react";
import useFetch from "../hooks/useFetch";
// import useSearch from "../hooks/useSearch";

const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
  const [data, isLoading, isError] = useFetch("./data.json");
  const [state, setState] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue !== "") {
      const updatedItems = data.items.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchItems(updatedItems);
    }

    setState(data);
  }, [searchValue, state, data]);

  return (
    <ItemsContext.Provider
      value={{ state, searchItems, isLoading, isError, setSearchValue }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export { ItemsProvider };
export default ItemsContext;
