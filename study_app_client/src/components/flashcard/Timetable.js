import React, { useState } from 'react';
import './Timetable.css';
import Sejarah from './Sejarah.png';
import Biology from './Biology.png';
import Addmath from './Addmath.png';
import {Link} from 'react-router-dom';


const Timetable = () => {
    const cardData = [
        {
            id: 1,
            title: 'Sejarah',
            imageUrl: Sejarah,
        },
        {
            id: 2,
            title: 'Biology',
            imageUrl: Biology,
        },
        {
            id: 3,
            title: 'Addmath',
            imageUrl: Addmath,
        },
        // Add more cards as needed
    ];

    const tableData = [
        { day: '25-Sep', content: 'Sejarah Bab 1', '1 day': '', '2 days': '', '3 days': '', '7 days': '' },
        { day: '26-Sep', content: 'Addmath Chap 2', '1 day': '1', '2 days': '', '3 days': '', '7 days': '' },
        { day: '27-Sep', content: 'Biology Chap 3', '1 day': '2', '2 days': '1', '3 days': '', '7 days': '' },
        { day: '28-Sep', content: 'Physics Chap 2', '1 day': '3', '2 days': '2', '3 days': '1', '7 days': '' },
        // Add more rows as needed
    ];


    const handleBack = () => {
        // Add your logic here
        alert('Back'); // You can replace this with your actual save logic
    };

    const handleAddNewContent = () => {
        // Add your logic here
        alert('Adding new content'); // You can replace this with your actual save logic
    };

    return (
        <div className="timetable-container">
            <div className="header">
                <div className="title-container">
                    <p className="timetable-title">Revision Timetable</p>
                </div>
                {/* <div className="button-container">
                    <Link to="/flashcards" className="back-button">
                    Back
                    </Link>
                </div> */}
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
                )
                )
                }
            </div>
            <div className='plan'>
                <p className='plan-text'>Plan overview</p>
            </div>
            <table className="timetable-table">
                <thead>
                    <tr>
                        <th>DAY</th>
                        <th>Learning Content</th>
                        <th>1 day</th>
                        <th>2 days</th>
                        <th>3 days</th>
                        <th>7 days</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.day}</td>
                            <td><a href='/biologyflashcard'>{row.content}</a></td>
                            <td>{row['1 day']}</td>
                            <td>{row['2 days']}</td>
                            <td>{row['3 days']}</td>
                            <td>{row['7 days']}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="add-button" onClick={handleAddNewContent}>
                Add Content
            </button>
            <div className='section'></div>
        </div>
    );
}

export default Timetable;
