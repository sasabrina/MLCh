import React, { useContext, useEffect } from "react";
import ItemsContext from "context/itemsContext";
import ProductsList from "components/productsList";
import "./Deals.scss";

const Main = () => {
  const { state, isLoading, setTotalItems } = useContext(ItemsContext);

  useEffect(() => {
    if (!isLoading && state.items) {
      setTotalItems(state.items.length);
    }
  }, [isLoading, state, setTotalItems]);

  return (
    <section className="main-section">
      {isLoading && <p>Loading</p>}
      {state.items && (
        <ProductsList
          items={state.items}
          canClick={true}
          listType="regular-list"
          cardType="regular-card"
        />
      )}
    </section>
  );
};

export default Main;
