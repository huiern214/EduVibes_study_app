import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './Flashcard.css';

const flashcards = [
  { front: 'Question 1', back: 'Answer 1' },
  { front: 'Question 2', back: 'Answer 2' },
  { front: 'Question 3', back: 'Answer 3' },
  // Add more flashcards as needed
];

const FlashcardContainer = () => {
  const[currentCardIndex, setCurrentCardIndex] = useState(0);

  const goToNextCard = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const goToPreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  return (
    <div className="flashcard-container">
      <Flashcard front={flashcards[currentCardIndex].front} back={flashcards[currentCardIndex].back} />

      <div className="flashcard-navigation">
        <button onClick={goToPreviousCard} disabled={currentCardIndex === 0}>
          Previous
        </button>
        <button onClick={goToNextCard} disabled={currentCardIndex === flashcards.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default FlashcardContainer;
