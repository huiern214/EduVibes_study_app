import React, { useState } from 'react';
import './Forum.css';

function ForumPost() {
  const [likes, setLikes] = useState(50);
  const [comments, setComments] = useState(5);

  return (
    <div className="forum-post">
      <div className="profile-section">
        <img src="profile.png" alt="User Profile" />
        <div className="profile-info">
          <p>Coco</p>
          <p>3 hours ago</p>
        </div>
      </div>
      <div className="post-content">
        <img src="postImage.png" alt="Post Image" />
        <hr />
        <div className="post-icons">
          <span>{likes} <i className="fa fa-heart"></i></span>
          <span>{comments} <i className="fa fa-comment"></i></span>
          <span><i className="fa fa-share"></i></span>
        </div>
        <hr />
        <div className="comment-section">
          <div className="comment">
            <img src="profile.png" alt="Commenter Profile" />
            <div className="comment-content">
              <p>Alex</p>
              <input type="text" placeholder="The answer is..." />
              <div className="comment-actions">
                <span>Accepted</span>
                <i className="fa fa-check"></i>
                <span><i className="fa fa-thumbs-up"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <i className="fa fa-search"></i>
        <i className="fa fa-camera"></i>
      </div>
      <div className="topics">
        <h2>Topics</h2>
        <div className="topic-list">
          {/* Topic items go here */}
        </div>
      </div>
      <div className="forum">
        <h2>Forum</h2>
        <ForumPost />
        {/* Add more ForumPost components for multiple posts */}
      </div>
    </div>
  );
}

export default App;
