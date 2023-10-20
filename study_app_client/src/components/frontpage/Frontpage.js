import React, {useState} from "react";

import './Frontpage.css';
import Line0 from "./Line 0.svg";
import Line1 from "./Line 1.svg";
import Logo from "./Logo.png";
import Mascot from "./Mascot.png";
import Vector from "./Vector.svg";
import Writing from "./Writing.svg";


const FrontPage = () => {
  return (
      <div className="front-page">
        <div className="div">
          <img className="vector" alt="Vector" src="vector-1.svg" />
          <img className="img" alt="Vector" src="vector-3.svg" />
          <img className="eduvibes-logo" alt="Eduvibes logo" src="eduvibes-logo-removebg-preview-1.png" />
          <img className="untitled-design" alt="Untitled design" src="untitled-design-15-2.png" />
          <div className="big-quote">
            <div className="flexcontainer">
              <p className="text">
                <span className="text-wrapper">
                  Learning and
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper">
                  studying online,
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper">made easy.</span>
              </p>
            </div>
          </div>
          <div className="small-quote">
            <p className="gain-new-knwoledge">
              Gain new knwoledge or earn money
              <br />
              while sharing your study materials.
            </p>
          </div>
          <div className="learn-more">
            <div className="frame">
              <div className="div-wrapper">
                <div className="text-wrapper-2">Learn more →</div>
              </div>
            </div>
          </div>
          <div className="title">
            <div className="text-wrapper-3">E-LEARNING PLATFORM</div>
          </div>
          <div className="bar">
            <div className="frame-2">
              <div className="text-wrapper-4">EduVibes</div>
            </div>
            <div className="frame">
              <div className="text-wrapper-5">Login →</div>
              <div className="frame-3">
                <div className="text-wrapper-6">Sign Up</div>
              </div>
            </div>
          </div>
          <div className="learning-material">
            <div className="group">
              <div className="text-wrapper-7">E- Learning Materials</div>
              <img className="vector-2" alt="Vector" src="image.svg" />
              <div className="text-wrapper-8">700 +</div>
            </div>
          </div>
          <div className="active-users">
            <img className="vector-3" alt="Vector" src="vector.svg" />
            <div className="text-wrapper-9">Active Users</div>
            <div className="text-wrapper-10">575 K +</div>
          </div>
          <div className="quiz">
            <div className="group-2">
              <img className="icon-edit" alt="Icon edit" src="icon-edit.png" />
              <p className="AI-powered-quiz">AI-Powered Quiz &amp; Flashcard Generator &amp; HealGPT</p>
              <div className="text-wrapper-11">NO. 1</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FrontPage;
