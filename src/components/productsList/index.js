import React, { useContext } from "react";
import HistoryContext from "context/historyContext";
import { ProductCard } from "components";
import "./ProductsList.scss";

/**
 * Renders the list of prducts from deals, searchResults and history.
 *
 * *items* is the list of elements to iterate
 *
 * "canClik" validates if a product can be added to the history record
 * this prevents for history products to be added the record *again*
 *
 * "listType" defines the list container class.
 *
 * "cardType" is being "prop drilled" to ProductCard.
 */

const ProductsList = ({ items, canClick, listType, cardType }) => {
  const { historyActions } = useContext(HistoryContext);

  // adds item to the history record
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
};

export default ProductsList;
