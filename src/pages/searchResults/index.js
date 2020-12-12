import React, { useContext } from "react";
import ItemsContext from "../../context/itemsContext";
import ProductCard from "../../components/productCard";
import "./SearchResults.scss";

const SearchResults = () => {
  const { searchItems } = useContext(ItemsContext);

  return (
    <section className="search-section">
      {searchItems && (
        <ul className="products-container">
          {searchItems.map((item) => (
            <li key={item.id}>
              <ProductCard item={item} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default SearchResults;
