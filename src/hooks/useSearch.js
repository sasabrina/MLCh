import { useState } from "react";

const useSearch = (initialState) => {
  const [searchItems, setSearchItems] = useState(initialState);

  const search = (value) => {
    const { items } = initialState;
    if (value) {
      const updatedItems = items.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchItems(updatedItems);
    } else {
      setSearchItems(...initialState);
    }
  };

  return [searchItems, search];
};

export default useSearch;
