import React from "react";
import preLoad from "../../data.json";
import ShowCard from "./ShowCard";

const Search = () => (
  <div className="search">
    <div>
      {preLoad.shows.map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>
);

export default Search;
