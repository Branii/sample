import React from 'react';
import './Card.css';

const Card = ({ header, body, footer , isVisible}) => {
  return (
    <div className={`card ${isVisible ? 'show' : 'hide'}`}>
      <div className="card-header">{header}</div>
      <div className="card-body">{body}</div>
      <div className="card-footer">{footer}</div>
    </div>
  );
};

export default Card;
