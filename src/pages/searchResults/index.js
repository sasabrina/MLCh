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

      {searchItems.length === 0 && (
        <div className="no-results-container">
          <h2>No hay publicaciones que coincidan con tu búsqueda.</h2>
          <ul>
            <li>
              <span>Revisá la ortografía</span> de la palabra.
            </li>
            <li>
              Utilizá <span>palabras más genéricas</span> o menos palabras.
            </li>
            <li>
              <a href="https://www.mercadolibre.com.ar/categorias">
                Navegá por las categorias
              </a>{" "}
              para encontrar un producto similar.
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default SearchResults;
