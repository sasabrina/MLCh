import { useState } from "react";

const useArray = (initialState) => {
  const [items, setItems] = useState(initialState);

  const add = (item) => setItems([...items, item]);

  const clear = () => setItems([]);

  return [items, { add, clear }];
};

export default useArray;
