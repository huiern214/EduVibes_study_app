import React from 'react';
import './Forum.css';
import biologyImage from './biology.png';
import chemistryImage from './chemistry.png';
import physicsImage from './physics.png';
import historyImage from './history.png';
import compImage from './comp.png';
import mathsImage from './maths.png';
import search from './search.png';
import camera from './camera.png';
import profile from './profile.png';
import profile2 from './profile2.png';
import postImage from './postImage.png';
import { FaHeart, FaComment, FaShare, FaUser, FaCheckCircle } from 'react-icons/fa';

const YourComponent = () => {
  // Define functions to handle clicks
  const handleAskClick = () => {
    // Add your Ask click logic here
    alert("Ask clicked");
  }

  const handlePostClick = () => {
    // Add your Post click logic here
    alert("Post clicked");
  }

  return (
    <div>
      <div className="container">
        <div className="search-bar">
          <img src={search} alt="search icon" />
          <input type="text" placeholder="Search..." />
          <img src={camera} alt="camera icon" />
        </div>
        <div className="topics-container">
          <h2>Topics</h2>
          <div className="topic">
            <img src={biologyImage} alt="Biology" />
            <a href="/biology">Biology</a>
          </div>
          <div className="topic">
            <img src={chemistryImage} alt="Chemistry" />
            <a href="/chemistry">Chemistry</a>
          </div>
          <div className="topic">
          <img src={physicsImage} alt="Physics" />
          <a href="/physics">Physics</a>
        </div>
        <div className="topic">
          <img src={historyImage} alt="History" />
          <a href="/history">History</a>
        </div>
        <div className="topic">
          <img src={compImage} alt="Computer Science" />
          <a href="/computer-science">Computer Science</a>
        </div>
        <div className="topic">
          <img src={mathsImage} alt="Mathematics" />
          <a href="/mathematics">Mathematics</a>
        </div>
        </div>
      </div>

      <div className="middle">
        <h2>Forum</h2>
        <div className="forum-post">
          <div className="profile-picture"><img src={profile} alt="profile" /></div>
          <div className="post-content">
            <input type="text" className="text-box" placeholder="Wanna ask or share something?" />
          </div>
          <div className="action-buttons">
            <span className="clickable" onClick={handleAskClick}>Ask</span>
            <div className="vertical-line"></div>
            <span className="clickable" onClick={handlePostClick}>Post</span>
          </div>
        </div>
      </div>

      <div class="post">
        <div class="post-header">
          <div class="profile-photo">
            <img src={profile2} alt="profile" />
          </div>
          <div class="post-details">
            <p class="user-name">Coco</p>
            <p class="time">3 hours ago</p>
          </div>
          <p class="badge">50</p>
        </div>
        <div className="question">
          <p>How to solve this question?</p>
          <p>#mathematics #spm</p>
        </div>

        <div class="post-content">
          <img src={postImage} alt="post" />
        </div>
        <hr />
        <div className="interaction-icons">
          <div className="like">
            <FaHeart color="red" />
            <span>50</span>
          </div>
          <div className="comment">
            <FaComment />
            <span>5</span>
          </div>
          <div className="share">
            <FaShare />
            <span>2</span>
          </div>
        </div>
        <hr></hr>
        <div className="comment-bar">

  <div className="profile-icon">
    <FaUser />
  </div>
  <div className="comment-input">
    <div className="user-info">
    <span>Alex</span>
    </div>
    <input
      type="text"
      placeholder="The answer is..."
    />
    <div className="accepted">
      <span>Accepted</span>
      <FaCheckCircle /> {/* Assuming you're using Font Awesome for the tick icon */}
    </div>
  </div>
</div>
      </div>
      {/* Add more posts here */}
    </div>
  );
};

export default YourComponent;
