import React from "react";
import { ItemsProvider } from "./context/itemsContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Header from "./components/header";
import Shortcuts from "./components/shortcuts";
import Aside from "./components/aside";
import Deals from "./pages/deals";
import SearchResults from "./pages/searchResults";
import "./App.scss";

export default function App() {
  return (
    <ItemsProvider>
      <Router>
        <Header />
        <Shortcuts />
        <main>
          <Grid container>
            <Grid item xs={3}>
              <Aside />
            </Grid>

            <Grid item xs={9}>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/deals" />
                </Route>
                <Route exact path="/deals" component={Deals} />
                <Route exact path="/search" component={SearchResults} />
              </Switch>
            </Grid>
          </Grid>
        </main>
      </Router>
    </ItemsProvider>
  );
}
