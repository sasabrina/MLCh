import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ItemsContext from "context/itemsContext";
import { SearchBar, HeaderCategories } from "components";
import "./Header.scss";

/*
 * Renders the searchbar and the headers categories.
 * Logo image links to root route.
 */

const Header = () => {
  const {
    state: { header },
    isLoading,
  } = useContext(ItemsContext);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {header && (
        <header className="nav-header">
          <div className="nav-header-container">
            <Grid container justify="space-between">
              <Grid item xs={2} className="logo">
                <Link to="/">
                  <img src={header.logo} alt="logo" />
                </Link>
              </Grid>

              <Grid item xs={6} className="search-container">
                <SearchBar />
                <HeaderCategories />
              </Grid>

              <Grid item xs={4} className="account-container">
                <figure>
                  <img src={header.ad_image} alt="ad_image" />
                </figure>
                <p>{header.profile}</p>
              </Grid>
            </Grid>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
