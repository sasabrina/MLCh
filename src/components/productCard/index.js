import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ item }) => {
  const { link, image_src, price, free_shipping, title } = item;
  return (
    <a href={link.url} className="product">
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
