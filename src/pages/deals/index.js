import React, { useContext, useEffect } from "react";
import ItemsContext from "../../context/itemsContext";
import ProductCard from "../../components/productCard";
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
        <ul className="products-container">
          {state.items.map((i) => (
            <li key={i.id}>
              <ProductCard item={i} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Main;
