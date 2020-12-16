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
import { Header, Aside, Shortcuts, Footer } from "./components";
import { Deals, SearchResults, History } from "./pages";
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
          <Footer />
        </Router>
      </HistoryProvider>
    </ItemsProvider>
  );
}
