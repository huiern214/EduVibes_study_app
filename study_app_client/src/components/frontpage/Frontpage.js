import React, {useState} from "react";
import image from './image.png';
import iconEdit from './icon_edit.png';
import book from './book.png';
import logo from './Logo.png';
import mascot from './Mascot.png';
import './Frontpage.css';

const FrontPage = () => {

  useEffect(() => {
    // Set the viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Adjust the viewport settings
    // For example, set the minimum scale to 1 to prevent user scaling
    const minimumScale = Math.min(
      viewportWidth / window.screen.width,
      viewportHeight / window.screen.height
    );

    // Apply viewport settings
    document.querySelector('meta[name="viewport"]').setAttribute(
      'content',
      `width=device-width, initial-scale=${minimumScale}, maximum-scale=1, user-scalable=no`
    );
  }, []);
  
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
        <img className="vector" src={image} alt="Vector" />
        <div className="text-wrapper-3">E- Learning Materials</div>
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
        <img className="vector-2" src={book} alt="Book" />
      <img className="icon-edit" src={iconEdit} alt="Icon edit" />
      <div className="text-wrapper-9">700 +</div>
      <div className="text-wrapper-10">575 K +</div>
      <p className="AI-powered-quiz">AI-Powered Quiz & Flashcard Generator & HealGPT</p>
      <div className="text-wrapper-11">NO. 1</div>
      <img className="eduvibes-logo" src={logo} alt="Eduvibes logo" />
      <img className="untitled-design" src={mascot} alt="Untitled design" />
      </div>
    </div>
  );
};

export default FrontPage;
