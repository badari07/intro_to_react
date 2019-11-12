import React from "react";
import PropTypes from "prop-types";

const ShowCard = ({ title, poster, year, description }) => (
  <div className="show-card">
    <img alt={`${title} propss Poster`} src={`/public/img/posters/${poster}`} />
    <div>
      <h3>{title}</h3>
      <h4>({year})</h4>
      <p>{description}</p>
    </div>
  </div>
);

ShowCard.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default ShowCard;
