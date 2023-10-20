import React, { useState } from 'react';
import './Forum.css';
import biologyImage from './biology.png';
import chemistryImage from './chemistry.png';
import physicsImage from './physics.png';
import historyImage from './history.png';
import compImage from './comp.png';
import mathsImage from './maths.png';
import profile from './profile.png';
import profile2 from './profile2.png';
import postImage from './postImage.png';
import coin from './coin.png';
import { FaHeart, FaComment, FaShare, FaUser, FaCheckCircle, FaThumbsUp, FaQuestionCircle, FaPen, FaCamera} from 'react-icons/fa';

const YourComponent = () => {

  const handleAskClick = () => {

    alert("Ask clicked");
  }

  const handlePostClick = () => {
    // Add your Post click logic here
    alert("Post clicked");
  }

  const [count, setCount] = useState(0);

  const handleThumbClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
    <div className="container">
      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <div className="right">
          <FaCamera className="camera-icon" />
        </div>
      </div>

      {/* Topics Container */}
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

    {/* Forum Content */}
    <div className="middle">
      <h2>Forum</h2>
      <div className="forum-post">
        <div className="row">
          <div className="profile-picture"><img src={profile} alt="profile" /></div>
          <div className="post-content">
            <input type="text" className="text-box" placeholder="Wanna ask or share something?" />
          </div>
        </div>

        <div className="action-buttons">
          <div className="button">
            <div className="icon">
              <FaQuestionCircle />
            </div>
            <span className="clickable" onClick={handleAskClick}>Ask</span>
          </div>
          <div className="vertical-line"></div>
          <div className="button">
            <div className="icon">
              <FaPen />
            </div>
            <span className="clickable" onClick={handlePostClick}>Post</span>
          </div>
        </div>
      </div>
    </div>

    {/* Individual Forum Post */}
    <div class="post">
      <div class="post-header">
        <div class="profile-photo">
          <img src={profile2} alt="profile" />
        </div>
        <div class="post-details">
          <p class="user-name">Coco</p>
          <p class="time">3 hours ago</p>
        </div>
        <span class="coin-icon">
          <img src={coin} alt="coin icon" />
        </span>
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
          <input
            type="text"
            className="input-field"
            placeholder="The answer is..."
          />
          <div className="user-info">
            <span>Alex</span>
          </div>
          <div className="accepted">
            <span>Accepted</span>
            <FaCheckCircle />
          </div>
          {/* type here */}
          <div className="thumb-box" onClick={handleThumbClick}>
            <div className="thumb-icon">
              <FaThumbsUp />
              {count}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default YourComponent;
