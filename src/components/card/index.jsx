import React from 'react';

import './styles.css';

const Card = ({ title, description, link, cover }) => {
  return (
    <a href={link}>
      <div className="card">
        <img src={cover} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Card;
