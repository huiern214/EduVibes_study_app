import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './Flashcard.css';

const flashcards = [
  { front: 'Question 1', back: 'Answer 1' },
  { front: 'Question 2', back: 'Answer 2' },
  { front: 'Question 3', back: 'Answer 3' },
  // Add more flashcards as needed
];

const topic = "Biology Chapter 1"; // Define the topic

const FlashcardContainer = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

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

  const handleSave = () => {
    // Add your save logic here
    alert('Saved!'); // You can replace this with your actual save logic
  };

  return (
    <div className="flashcard-container">
      <button className="save-button" onClick={handleSave}>
        Save
      </button>
      <h2 className="topic">{topic}</h2>
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
