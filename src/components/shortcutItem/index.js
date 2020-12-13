import React from "react";
import "./ShortcutItem.scss";

function ShortcutItem({ item }) {
  return (
    <div className="shortcut-item">
      <figure>
        <img src={item.image_src} alt="deals shortcut" />
      </figure>
      <p>{item.name}</p>
    </div>
  );
}

export default ShortcutItem;
