// @flow
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import type { RouterHistory } from "react-router-dom";
import { setSearchTerm } from "../action/actionCreaters";

class Landing extends React.Component {
  props: {
    searchTerm: string,
    handleSearchTermChange: Function,
    history: RouterHistory
  };

  goToSearch = (e: SyntheticEvent) => {
    e.PreventDefault();
    this.props.history.push("/search");
  };
  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input
            value={this.props.searchTerm}
            type="text"
            placeholder="Search"
            onChange={this.props.handleSearchTermChange}
          />
        </form>
        <Link to="/search">or Browse All</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dipatch: Function) => ({
  handleSearchTermChange: e => dipatch(setSearchTerm(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
