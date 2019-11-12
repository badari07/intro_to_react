import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 32%;
    border: 2px solid #333;
    border-redius: 4px;
    margin-bottom: 25px;
    padding_right: 10px;
    overflow: hidden;
`;

const Image = styled.img`
    width: 46%;
    float: left;
    margin-right: 10px

`;

const ShowCard = ({ title, poster, year, description }) => (
  <Wrapper>
    <Image
      alt={`${title} propss Poster`}
      src={`/public/img/posters/${poster}`}
    />
    <div>
      <h3>{title}</h3>
      <h4>({year})</h4>
      <p>{description}</p>
    </div>
  </Wrapper>
);

ShowCard.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default ShowCard;
