// @flow

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import type { Match } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";
import Pagenf from "./PageNotFound";
import Details from "./Details";
import preload from "../../data.json";

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          path="/search"
          component={props => <Search {...props} shows={preload.shows} />}
        />
        <Route
          path="/details/:id"
          component={(props: { match: Match }) => (
            <Details
              {...props}
              show={preload.shows.find(
                (show: Show) => props.match.params.id === show.imdbID
              )}
            />
          )}
        />
        <Route component={Pagenf} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
