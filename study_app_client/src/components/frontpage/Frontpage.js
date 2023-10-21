import React, {useState} from "react";
import './Frontpage.css';
import Mascot from './Mascot.png';
import Logo from './Logo.png';
import Book from './book.png';
import Thunder from './image.png';
import Writing from './icon_edit.png';
import { Link } from 'react-router-dom';

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
        <div className="vector"><img src = {Thunder} alt="Vector"/></div>  
        <div className="text-wrapper-3">E- Learning Materials</div>
        <div className="text-wrapper-4">Active Users</div>
        <div className="text-wrapper-5">E-LEARNING PLATFORM</div>
        <div className="frame-3">
          <div className="frame-4">
            <div className="text-wrapper-6">EduVibes</div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-7">
              <Link to={`/login`} className="link">Login →</Link>
            </div>
            <div className="frame-5">
              <div className="text-wrapper-8">Sign Up</div>
            </div>
          </div>
        </div>
        <div className="vector-2" ><img src={Book}alt="Vector"/></div>
        <div className="icon-edit"><img src ={Writing} alt="Icon edit"/></div> 
        <div className="text-wrapper-9">1000 +</div>
        <div className="text-wrapper-10">100 K +</div>
        <p className="AI-powered-quiz">AI-Powered Quiz &amp; Flashcard Generator &amp; HealGPT</p>
        <div className="text-wrapper-11">NO. 1</div>
        <div className="eduvibes-logo"><img src ={Logo} alt="Eduvibes logo" /></div> 
        <div className="untitled-design"><img src={Mascot} alt="Untitled design" /></div>
      </div>
    </div>
  );
};

export default FrontPage;