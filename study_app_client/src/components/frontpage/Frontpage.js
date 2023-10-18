import React, {useState} from "react";

import './Frontpage.css';

const FrontPage = () => {
  return (
    <div className="front-page">
      <div className="div">
        <div className="flexcontainer">
          <p className="text">
            <span className="text-wrapper">
              Learning and
              <br />
            </span>
          </p>
          <p className="text">
            <span className="text-wrapper">
              studying online,
              <br />
            </span>
          </p>
          <p className="text">
            <span className="text-wrapper">made easy.</span>
          </p>
        </div>
        <p className="gain-new-knwoledge">
          Gain new knwoledge or earn money
          <br />
          while sharing your study materials.
        </p>
        <div className="frame">
          <div className="frame-2">
            <div className="div-wrapper">
              <div className="text-wrapper-2">Learn more →</div>
            </div>
          </div>
        </div>
        <img className="vector" alt="Vector" src="Vector.svg" />
        <div className="text-wrapper-3">E- Learning Materials</div>
        <img className="img" alt="Vector" src="Vector 1.svg" />
        <div className="text-wrapper-4">Active Users</div>
        <div className="text-wrapper-5">E-LEARNING PLATFORM</div>
        <div className="frame-3">
          <div className="frame-4">
            <div className="text-wrapper-6">EduVibes</div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-7">Login →</div>
            <div className="frame-5">
              <div className="text-wrapper-8">Sign Up</div>
            </div>
          </div>
        </div>
        <img className="vector-2" alt="Vector" src="image.svg" />
        <img className="icon-edit" alt="Icon edit" src="🦆 icon _edit_.svg" />
        <div className="text-wrapper-9">700 +</div>
        <div className="text-wrapper-10">575 K +</div>
        <img className="vector-3" alt="Vector" src="vector-3.svg" />
        <p className="AI-powered-quiz">AI-Powered Quiz &amp; Flashcard Generator &amp; HealGPT</p>
        <div className="text-wrapper-11">NO. 1</div>
        <img className="eduvibes-logo" alt="Eduvibes logo" src="Logo.png" />
        <img className="untitled-design" alt="Untitled design" src="Mascot.png" />
      </div>
    </div>
  );
};

export default FrontPage;
