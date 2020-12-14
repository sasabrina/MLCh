import React, { useContext } from "react";
// import HistoryContext from "../../context/historyContext";
import "./ProductCard.scss";

const ProductCard = ({ item }) => {
  // const { historyActions } = useContext(HistoryContext);
  const { link, image_src, price, free_shipping, title } = item;

  // const addItemToHistory = (event) => {
  //   event.stopPropagation();
  //   historyActions.add(item);
  // };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="product"
    >
      <figure className="product-img">
        <img src={image_src} alt="product preview" />
      </figure>

      <div className="product-info">
        {price.original_price && (
          <span className="original-price">
            {price.currency} {price.original_price}
          </span>
        )}

        <div className="price-discount">
          <span className="price">
            {price.currency} {price.price}
          </span>

          {price.discount && (
            <span className="discount">{price.discount}% OFF</span>
          )}
        </div>

        {free_shipping && <span className="free-shipping">Envío gratis</span>}

        <p className="title">{title}</p>
      </div>
    </a>
  );
};

export default ProductCard;
