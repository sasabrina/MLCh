import React, { useState, useEffect, createContext } from "react";
import useFetch from "hooks/useFetch";

/**
 * fetches and provides data from the json file.
 *
 * note: search items could be another context
 */

const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
  const [data, isLoading, isError] = useFetch("./data.json");
  const [state, setState] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [totalItems, setTotalItems] = useState(0);

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
      value={{
        state,
        searchItems,
        isLoading,
        isError,
        setSearchValue,
        totalItems,
        setTotalItems,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export { ItemsProvider };
export default ItemsContext;
