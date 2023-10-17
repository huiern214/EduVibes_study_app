import React from 'react';
import Flashcard from './Flashcard';
import './Flashcard.css';

const flashcards = [
  { front: 'Question 1', back: 'Answer 1' },
  // Add more flashcards as needed
];

const FlashcardContainer = () => {
  return (
    <div className="flashcard-container">
      {flashcards.map((card, index) => (
        <Flashcard key={index} front={card.front} back={card.back} />
      ))}
    </div>
  );
};

export default FlashcardContainer;
