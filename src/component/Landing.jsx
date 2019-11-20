// @flow
import React from "react";
import { Link } from "react-router-dom";

const Landing = props => (
  <div className="landing">
    <h1>svideo</h1>
    <input type="text" placeholder="Search" />
    {/* <input
      value={props.searchTerm}
      type="text"
      placeholder="Search"
      onChange={props.handleSearchTermChange}
    /> */}
    <Link to="/search">or Browse All</Link>
  </div>
);
export default Landing;
