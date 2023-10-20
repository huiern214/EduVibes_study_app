import React from "react";
import "./Plans.css";
import tick from './tick.png'; 
import rect from './rect.png';

const PlansAndPricing = () => {
  return (
    <div className="PLANS-AND-PRICING">
      <div className="div">
        <div className="overlap">
          <div className="table">
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="intro">
                <button className="button">
                  <div className="overlap-group-2">
                    <div className="rectangle-2" />
                    <div className="text-wrapper">Choose plan</div>
                  </div>
                </button>
                <div className="frame">
                  <div className="price">
                    <div className="element">FREE</div>
                  </div>
                  <div className="title-and-desc">
                    <div className="intro-2">Starter</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="overlap-wrapper">
            <div className="overlap-group-2">
              <div className="rectangle-3" />
              <div className="text-wrapper-2">Choose plan</div>
            </div>
          </button>
          <div className="price-wrapper">
            <div className="element-wrapper">
              <div className="element-2">RM 9.90</div>
            </div>
          </div>
          <div className="text-wrapper-3">/month</div>
          <div className="group">
            <img src={tick} alt="tick" className="check-circle" />
            <p className="text-wrapper-4">Access up to 10 e-learning materials</p>
          </div>
          <div className="group-2">
            <img src={tick} alt="tick" className="check-circle" />
            <p className="text-wrapper-4">5 posts per week in Forum</p>
          </div>
          <div className="group-3">
            <img src={tick} alt="tick" className="check-circle" />
            <p className="text-wrapper-4">Access up to 3 times per day AI-mental health chatbot</p>
          </div>
          <div className="group-4">
            <img src={tick} alt="tick" className="check-circle" />
            <div className="text-wrapper-4">AI-generated revision table</div>
          </div>
          <div className="group-5">
            <img src={tick} alt="tick" className="check-circle" />
            <p className="text-wrapper-4">Access up to 5 times per week AI-generated flashcard & quiz</p>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-2">
              <div className="rectangle-4" />
              <div className="div-wrapper">
                <div className="price-2">
                  <div className="element-3">RM 5.90</div>
                </div>
              </div>
              <img src={rect} alt="rectangle" className="img" />
              <div className="text-wrapper-5">/month</div>
              <div className="text-wrapper-6">MOST POPULAR</div>
              <div className="group-6">
                <img src={tick} alt="tick" className="check-circle-2" />
                <p className="unlimited-access-to">
                  Unlimited access to <br />
                  e-learning materials
                </p>
              </div>
              <div className="group-7">
                <img src={tick} alt="tick" className="check-circle" />
                <div className="text-wrapper-7">Unlimited post in Forum</div>
              </div>
              <div className="group-8">
                <img src={tick} alt="tick" className="check-circle" />
                <p className="p">Unlimited access to AI-mental health chatbot</p>
              </div>
              <div className="group-9">
                <img src={tick} alt="tick" className="check-circle" />
                <p className="text-wrapper-8">Unlimited access to AI-generated flashcard & quiz</p>
              </div>
              <div className="group-10">
                <img src={tick} alt="tick" className="check-circle" />
                <div className="text-wrapper-8">AI-generated revision table</div>
              </div>
            </div>
          </div>
          <button className="button-2">
            <div className="overlap-3">
              <div className="text-wrapper-9">Choose plan</div>
            </div>
          </button>
          <div className="group-11">
            <img src={tick} alt="tick" className="check-circle" />
            <div className="text-wrapper-4">Ad-Free Experience</div>
          </div>
          <div className="group-12">
            <img src={tick} alt="tick" className="check-circle" />
            <p className="text-wrapper-4">Unlimited post & post prioritization in Forum</p>
          </div>
          <div className="group-13">
            <img src={tick} alt="tick" className="check-circle" />
            <p className="text-wrapper-4">Unlimited access to e-learning materials</p>
          </div>
          <div className="group-14">
            <img src={tick} alt="tick" className="check-circle" />
            <p className="text-wrapper-4">Unlimited access to AI-mental health chatbot</p>
          </div>
          <div className="group-15">
            <img src={tick} alt="tick" className="check-circle-3" />
            <p className="text-wrapper-4">Unlimited access to AI-generated flashcard & quiz</p>
          </div>
          <div className="text-wrapper-10">Individual</div>
        </div>
        <div className="overlap-4">
          <div className="PLANS-PRICING">PLANS &amp; PRICING</div>
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-11">Back</div>
            </div>
          </div>
        </div>
        <div className="frame-3">
          <div className="text-wrapper-12">EduVibes</div>
        </div>
      </div>
      </div>
  );
};

export default PlansAndPricing;
