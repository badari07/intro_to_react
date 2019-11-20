// @flow

import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled((Link: any))`
  width: 32%;
  border: 2px solid #333;
  border-redius: 4px;
  margin-bottom: 25px;
  padding_right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

class ShowCard extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  props: Show;
  render() {
    return (
      <Wrapper to={`/details/${this.props.imdbID}`}>
        <Image
          alt={`${this.props.title} propss Poster`}
          src={`/public/img/posters/${this.props.poster}`}
        />
        <div>
          <h3>{this.props.title}</h3>
          <h4>({this.props.year})</h4>
          <p>{this.props.description}</p>
        </div>
      </Wrapper>
    );
  }
}

export default ShowCard;
