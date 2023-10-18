import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="front">{front}</div>
      <div className="back">{back}</div>
    </div>
  );
};

export default Flashcard;
