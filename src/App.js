import React from "react";
import { ItemsProvider } from "./context/itemsContext";
import { HistoryProvider } from "./context/historyContext";
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
import History from "./pages/history";
import "./App.scss";

export default function App() {
  localStorage.setItem("history", JSON.stringify([]));

  return (
    <ItemsProvider>
      <HistoryProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Redirect to="/deals" />
            </Route>
            <Route exact path="/history" component={History} />
            <main>
              <Shortcuts />
              <Grid container>
                <Grid item xs={3}>
                  <Aside />
                </Grid>

                <Grid item xs={9}>
                  <Route exact path="/deals" component={Deals} />
                  <Route exact path="/search" component={SearchResults} />
                </Grid>
              </Grid>
            </main>
          </Switch>
        </Router>
      </HistoryProvider>
    </ItemsProvider>
  );
}
