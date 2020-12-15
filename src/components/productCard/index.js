import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ item, cardType }) => {
  const { link, image_src, price, free_shipping, title } = item;

  return (
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
          {cardType === "regular-card" && (
            <span className="original-price">
              {price.currency} {price.original_price}
            </span>
          )}

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
  );
};

export default ProductCard;
