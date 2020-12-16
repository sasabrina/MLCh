import React, { useContext } from "react";
import ItemsContext from "context/itemsContext";
import "./Aside.scss";

/*
 * Renders a list with the available filters.
 * It's imported in App.js and rendered in "Deals" and "SearchResults" views.
 */

const Aside = () => {
  const { state, totalItems } = useContext(ItemsContext);
  const { available_filters } = state;

  return (
    <>
      {state.items && (
        <aside>
          <div className="totalItems">
            <h2>Todas</h2>
            <p>{totalItems} productos</p>
          </div>

          <div className="categories-container">
            <h2>Categorías</h2>
            <ul>
              {available_filters.map((af) => (
                <li key={af.id}>
                  <a href="#">{af.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}
    </>
  );
};

export default Aside;
