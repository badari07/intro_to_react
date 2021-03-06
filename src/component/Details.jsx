// @flow

import React from "react";
import { connect } from "react-redux";
import getApiDetails from "../action/asyncAction";
import Header from "./Header";
import Spinner from "./Spinner";

class Details extends React.Component {
  componentDidMount() {
    if (!this.props.rating) {
      this.props.getApiData();
    }
  }

  props: {
    show: Show,
    rating: string,
    getApiData: Function
  };
  render() {
    const { title, year, description, poster, trailer } = this.props.show;
    let ratingComponent;
    if (this.props.rating) {
      ratingComponent = <h3>{this.props.rating}</h3>;
    } else {
      ratingComponent = <Spinner />;
    }
    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {ratingComponent}
          <img
            src={`/public/img/posters/${poster}`}
            alt={`poster for ${title}`}
          />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${trailer}`}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.show.imdbID]
    ? state.apiData[ownProps.show.imdbID]
    : {};
  return {
    rating: apiData.rating
  };
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  getApiData() {
    dispatch(getApiDetails(ownProps.show.imdbID));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Details);
