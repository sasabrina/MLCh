import React, { useContext } from "react";
import HistoryContext from "../../context/historyContext";
import ProductCard from "../productCard";
import "./ProductsList.scss";

function ProductsList({ items, canClick, listType, cardType }) {
  const { historyActions } = useContext(HistoryContext);

  const addItemToHistory = (event, item) => {
    event.stopPropagation();
    historyActions.add(item);
  };

  return (
    <ul className={`products-container ${listType}`}>
      {items.map((i) => (
        <li
          key={i.id}
          onClick={canClick ? (e) => addItemToHistory(e, i) : undefined}
        >
          <ProductCard item={i} cardType={cardType} />
        </li>
      ))}
    </ul>
  );
}

export default ProductsList;
