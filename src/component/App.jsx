import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";
import Pagenf from "./PageNotFound";
import Details from "./Details";

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route path="/details/:id" component={Details} />
        <Route component={Pagenf} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
