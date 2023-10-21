import React, { useState } from 'react';
import './Timetable.css';
import { Button } from 'react-bootstrap';
import Sejarah from './Sejarah.png';
import Biology from './Biology.png';
import Addmath from './Addmath.png';


const Timetable = () => {
    const cardData = [
        {
            id: 1,
            title: 'Card 1',
            imageUrl: Sejarah,
        },
        {
            id: 2,
            title: 'Card 2',
            imageUrl: Biology,
        },
        {
            id: 3,
            title: 'Card 3',
            imageUrl: Addmath,
        },
        // Add more cards as needed
    ];

    const handleBack = () => {
        // Add your logic here
        alert('Back'); // You can replace this with your actual save logic
    };

    return (
        <div className="timetable-container">
            <div className="header">
                <div className="title-container">
                    <p className="timetable-title">Revision Timetable</p>
                </div>
                <div className="button-container">
                    <button className="back-button" onClick={handleBack}>Back</button>
                </div>
            </div>
            <div className="today">
                <p className="today-text">Today's learning</p>
            </div>
            <div className="card-container">
                {cardData.map((card) => (
                     <div key={card.id} className="card">
                     <img
                         src={card.imageUrl}
                         alt={card.title}
                         className="card-image"
                     />
                     <h2 className="card-title">{card.title}</h2>
                     {/* Add more card content here */}
                 </div>
             ))}
            </div>
        </div>
    );
}

export default Timetable;
