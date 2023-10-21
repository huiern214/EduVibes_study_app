import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './Flashcard.css';
import {Link} from 'react-router-dom';

const flashcards = [
  { front: 'What is photosynthesis?', back: 'Photosynthesis is the process by which green plants, algae, and some bacteria convert carbon dioxide and sunlight into glucose (a form of sugar) and oxygen. ' },
  { front: 'What is DNA?', back: 'DNA, or deoxyribonucleic acid, is a molecule that carries genetic information in living organisms. It consists of a double helix structure made up of nucleotides. ' },
  { front: 'What is natural selection? ', back: 'It is the process by which organisms that are better adapted to their environment tend to survive and reproduce more successfully, passing on their advantageous traits to the next generation. ' },
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


  return (
    <div className="flashcard-container">
      <div>
        <Link to="/timetable" className="save-button">
          Save
        </Link>
      </div>
      
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
