import React, { useContext } from "react";
import HistoryContext from "../../context/historyContext";
import ProductCard from "../productCard";
import "./ProductsList.scss";

function ProductsList({ items, canClick }) {
  const { historyActions } = useContext(HistoryContext);

  const addItemToHistory = (event, item) => {
    event.stopPropagation();
    historyActions.add(item);
  };

  return (
    <ul className="products-container">
      {items.map((i) => (
        <li
          key={i.id}
          onClick={canClick ? (e) => addItemToHistory(e, i) : undefined}
        >
          <ProductCard item={i} />
        </li>
      ))}
    </ul>
  );
}

export default ProductsList;
