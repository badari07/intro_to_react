// @flow

import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import type { Match } from "react-router-dom";
import AsyncRoute from "./AsyncRoute";
import Pagenf from "./PageNotFound";
import preload from "../../data.json";
import store from "../store/configstore";

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  // state = {
  //   searchTerm: ""
  // };
  // props: {
  //   shows: Array<Show>
  // };
  // handleSearchTermChange = (
  //   e: SyntheticKeyboardEvent & { target: HTMLInputElement }
  // ) => {
  //   this.setState({ searchTerm: e.target.value });
  // };
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Switch>
            <Route
              exact
              path="/"
              component={props => (
                <AsyncRoute
                  props={props}
                  loadingPromise={import("./Landing")}
                />
              )}
            />
            {/* <Route
              // exact
              // path="/"
              // // component={props => (
              // //   <Landing
              // //     {...props}
              // //     searchTerm={this.state.searchTerm}
              // //     handleSearchTermChange={this.handleSearchTermChange}
              // //   />
              // // )}
              // component={Landing}
            /> */}
            {/* <Route
              path="/search"
              component={props => (
                <Search
                  {...props}
                  shows={preload.shows}
                  // searchTerm={this.state.searchTerm}
                />
              )}
            /> */}
            <Route
              path="/search"
              component={props => (
                <AsyncRoute
                  loadingPromise={import("./Search")}
                  props={Object.assign({ shows: preload.shows }, props)}
                />
              )}
            />
            <Route
              path="/details/:id"
              // eslint-disable-next-line react/no-unused-prop-types
              component={(props: { match: Match }) => {
                const selectedShow = preload.shows.find(
                  (show: Show) => props.match.params.id === show.imdbID
                );
                return (
                  <AsyncRoute
                    loadingPromise={import("./Details")}
                    props={Object.assign(
                      { show: selectedShow, match: {} },
                      props
                    )}
                  />
                );
              }}
            />
            {/* <Route
              path="/details/:id"
              // eslint-disable-next-line react/no-unused-prop-types
              component={(props: { match: Match }) => (
                <Details
                  {...props}
                  show={preload.shows.find(
                    (show: Show) => props.match.params.id === show.imdbID
                  )}
                />
              )}
            /> */}
            <Route component={Pagenf} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
