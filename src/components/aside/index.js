import React, { useContext } from "react";
import ItemsContext from "../../context/itemsContext";
import "./Aside.scss";

const Aside = () => {
  const { state } = useContext(ItemsContext);
  const { items, available_filters } = state;

  return (
    <>
      {state.items && (
        <aside>
          <div className="totalItems">
            <h2>Todas</h2>
            <p>{items.length} productos</p>
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
