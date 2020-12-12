import React, { useContext } from "react";
import ItemsContext from "../../context/itemsContext";
import "./HeaderCategories.scss";

const HeaderCategories = () => {
  const {
    state: { header },
  } = useContext(ItemsContext);

  const { links } = header;

  return (
    <ul className="header-categories">
      {links &&
        links.map((l, i) => (
          <li key={i}>
            <a href="#">{l}</a>
          </li>
        ))}
    </ul>
  );
};

export default HeaderCategories;
