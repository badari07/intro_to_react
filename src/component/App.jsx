// @flow

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import type { Match } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";
import Pagenf from "./PageNotFound";
import Details from "./Details";
import preload from "../../data.json";

class App extends React.Component {
  // state = {
  //   searchTerm: ""
  // };
  // props: {
  //   shows: Array<Show>
  // };
  // handleSearchTermChange =(
  //     e: SyntheticKeyboardEvent & { target: HTMLInputElement }
  //   ) => {
  //   this.setState({ searchTerm: e.target.value });
  // };
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route
              exact
              path="/"
              // component={props => (
              //   <Landing {...props} searchTerm={this.state.searchTerm} />
              // )}
              component={Landing}
            />
            <Route
              path="/search"
              component={props => (
                <Search
                  {...props}
                  shows={preload.shows}
                  // searchTerm={this.state.searchTerm}
                />
              )}
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
  }
}

export default App;
