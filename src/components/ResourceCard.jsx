import React from 'react';
import './styles/ResourceCard.css';

const Card1 = ({ title, description, types, symptoms, treatment, imageUrl, wikipediaUrl, isEven }) => {
  const handleCardClick = () => {
    window.open(wikipediaUrl, '_blank');
  };

  return (
    <div className={`card1 ${isEven ? 'even' : ''}`} onClick={handleCardClick}>
      <img src={imageUrl} alt={title} className="card1-image" />
      <div className="card1-content">
        <h2>{title}</h2>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Types:</strong> {types}</p>
        <p><strong>Symptoms:</strong> {symptoms}</p>
        <p><strong>Treatment:</strong> {treatment}</p>
      </div>
    </div>
  );
};

export default Card1;
