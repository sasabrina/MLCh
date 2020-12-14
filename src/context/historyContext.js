import React, { useState, useEffect, createContext } from "react";
import useArray from "../hooks/useArray";
const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const [historyItems, historyActions] = useArray(history);

  useEffect(() => {
    setHistory(historyItems);
  }, [historyItems]);

  return (
    <HistoryContext.Provider value={{ history, setHistory, historyActions }}>
      {children}
    </HistoryContext.Provider>
  );
};

export { HistoryProvider };
export default HistoryContext;
