import { useState } from "react";

const useArray = (initialState) => {
  const [items, setItems] = useState(initialState);

  const add = (item) => setItems([...items, item]);

  const removeById = (id) => {
    const updatedItems = initialState.filter((item) => item.id !== id);
    setItems(updatedItems);
  };
  const clear = () => setItems([]);

  return [items, { add, removeById, clear }];
};

export default useArray;
