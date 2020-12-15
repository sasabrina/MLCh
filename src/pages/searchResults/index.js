import React, { useContext, useEffect } from "react";
import ItemsContext from "../../context/itemsContext";
import ProductsList from "../../components/productsList";
import "./SearchResults.scss";

const SearchResults = () => {
  const { searchItems, setTotalItems } = useContext(ItemsContext);

  useEffect(() => {
    setTotalItems(searchItems.length);
  }, [searchItems, setTotalItems]);

  return (
    <section className="search-section">
      {searchItems && (
        <ProductsList
          items={searchItems}
          canClick={true}
          listType="regular list"
          cardType="regular-card"
        />
      )}
    </section>
  );
};

export default SearchResults;
