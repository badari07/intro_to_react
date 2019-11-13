import React from "react";
import preLoad from "../../data.json";
import ShowCard from "./ShowCard";

class Search extends React.Component {
  state = {
    searchTerm: ""
  };
  handleSearchTermChange = e => {
    this.setState({ searchTerm: e.target.value });
  };
  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
            onChange={this.handleSearchTermChange}
          />
        </header>
        <div>
          {preLoad.shows.map(show => (
            <ShowCard key={show.imdbID} {...show} />
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
