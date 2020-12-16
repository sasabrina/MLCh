import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ItemsContext from "context/itemsContext";
import { ShortcutItem } from "components";
import "./Shortcuts.scss";

/**
 * Renders a list of shortcuts.
 * Shortcuts dont filter *yet*
 */

const Shortcuts = () => {
  const { state } = useContext(ItemsContext);
  const { shortcuts, title, subtitle } = state;

  return (
    <section className="shortcuts-section">
      {state && (
        <Grid container className="shortcuts-container">
          <Grid item xs={3} className="shortcuts-title">
            <Link to="/deals">
              <h1>{title}</h1>
              <span>{subtitle}</span>
            </Link>
          </Grid>

          <Grid item xs={9} className="shortcuts-links">
            <ul>
              {shortcuts &&
                shortcuts.map((sc, i) => (
                  <li key={i}>
                    <ShortcutItem item={sc} />
                  </li>
                ))}
            </ul>
          </Grid>
        </Grid>
      )}
    </section>
  );
};

export default Shortcuts;
