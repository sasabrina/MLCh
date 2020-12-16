import React, { useContext, useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemsContext from "context/itemsContext";
import "./HeaderCategories.scss";

const HeaderCategories = () => {
  const { state } = useContext(ItemsContext);
  const [linksState, setLinksState] = useState([]);

  // sets the url prop for the link object
  const setLinkUrl = (link) => {
    let url = "";
    switch (link) {
      case "Ofertas":
        url = "/deals";
        break;
      case "Historial":
        url = "/history";
        break;
      case "Ayuda":
        url = "https://www.mercadolibre.com.ar/ayuda#nav-header";
        break;
      default:
        url = "#";
    }
    return url;
  };

  // iterates the list of links from itemContext and creates objects for linksState
  const createLinksObject = useCallback(() => {
    const {
      header: { links },
    } = state;

    return links.map((link) => {
      return {
        name: link,
        url: setLinkUrl(link),
      };
    });
  }, [state]);

  // sets the list of links to render
  useEffect(() => {
    const linksObjects = createLinksObject();
    setLinksState(linksObjects);
  }, [createLinksObject]);

  return (
    <ul className="header-categories">
      {linksState &&
        linksState.map((l, i) => (
          <li key={i}>
            <Link to={l.url}>{l.name}</Link>
          </li>
        ))}
    </ul>
  );
};

export default HeaderCategories;
