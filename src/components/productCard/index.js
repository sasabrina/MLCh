import React, { useContext } from "react";
import HistoryContext from "context/historyContext";
import "./ProductCard.scss";

/*
 * Reusable card component that receives two props
 * "item" is the element from the "database" that is being populated.
 * "cardType" defines if its a regular item or history item
 *
 * regular items are displayed on the "deals" and "searchResults" pages.
 * and the history items are displayed on the history page, and have the "deleteItem" function.
 */

const ProductCard = ({ item, cardType }) => {
  const { id, link, image_src, price, free_shipping, title } = item;
  const { historyActions } = useContext(HistoryContext);

  // deletes single item from history products
  const deleteItem = (event, id) => {
    event.stopPropagation();
    historyActions.removeById(id);
  };

  return (
    <div className="product-container">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="product"
      >
        <div className={`card-wrapper ${cardType}`}>
          <figure className="product-img">
            <img src={image_src} alt="product preview" />
          </figure>

          <div className="product-info">
            <span className="original-price">
              {price.currency} {price.original_price}
            </span>

            <div className="price-discount">
              <span className="price">
                {price.currency} {price.price}
              </span>

              {cardType === "regular-card" && (
                <span className="discount">{price.discount}% OFF</span>
              )}
            </div>

            {cardType === "regular-card" && free_shipping && (
              <span className="free-shipping">Envío gratis</span>
            )}

            <p className="title">{title}</p>
          </div>
        </div>
      </a>

      {cardType === "history-card" && (
        <button className="delete-card" onClick={(e) => deleteItem(e, id)}>
          Eliminar
        </button>
      )}
    </div>
  );
};

export default ProductCard;
