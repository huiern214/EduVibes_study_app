import React from "react";
import "./Plans.css";
import Rectangle from "./Rectangle.svg";
import Circle from "./Circle.svg";

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
            <img className="check-circle" alt="Check circle" src="Circle.svg" />
            <p className="text-wrapper-4">Access up to 10 e-learning materials</p>
          </div>
          <div className="group-2">
            <img className="check-circle" alt="Check circle" src="Circle.svg" />
            <p className="text-wrapper-4">5 posts per week in Forum</p>
          </div>
          <div className="group-3">
            <img className="check-circle" alt="Check circle" src="Circle.svg" />
            <p className="text-wrapper-4">Access up to 3 times per day AI- mental health chatbot</p>
          </div>
          <div className="group-4">
            <img className="check-circle" alt="Check circle" src="Circle.svg" />
            <div className="text-wrapper-4">AI-generated revision table</div>
          </div>
          <div className="group-5">
            <img className="check-circle" alt="Check circle" src="Circle.svg" />
            <p className="text-wrapper-4">Access up to 5 times per week AI-generated flashcard &amp; quiz</p>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-2">
              <div className="rectangle-4" />
              <div className="div-wrapper">
                <div className="price-2">
                  <div className="element-3">RM 5.90</div>
                </div>
              </div>
              <div className="Rectangle">
                <img src={Rectangle} alt="Rectangle" />
              </div>
              <div className="text-wrapper-5">/month</div>
              <div className="text-wrapper-6">MOST POPULAR</div>
              <div className="group-6">
                <div className="check-circle-2">
                <img src={Circle} alt="Check circle" />
                </div>
                <p className="unlimited-access-to">
                  Unlimited access to <br />
                  e-learning materials
                </p>
              </div>
              <div className="group-7">
                <img className="check-circle" alt="Check circle" src="Circle.svg" />
                <div className="text-wrapper-7">Unlimited post in Forum</div>
              </div>
              <div className="group-8">
                <img className="check-circle" alt="Check circle" src="Circle.svg" />
                <p className="p">Unlimited access to AI- mental health chatbot</p>
              </div>
              <div className="group-9">
                <img className="check-circle" alt="Check circle" src="Circle.svg" />
                <p className="text-wrapper-8">Unlimited access to AI-generated flashcard &amp; quiz</p>
              </div>
              <div className="group-10">
                <img className="check-circle" alt="Check circle" src="Circle.svg" />
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
            <img className="check-circle" alt="Check circle" src="Circle.svg" />
            <div className="text-wrapper-4">Ad-Free Experience</div>
          </div>
          <div className="group-12">
            <img className="check-circle" alt="Check circle" src="Circle.svg" />
            <p className="text-wrapper-4">Unlimited post &amp; post prioritization in Forum</p>
          </div>
          <div className="group-13">
            <img className="check-circle" alt="Check circle" src="Circle.svg" />
            <p className="text-wrapper-4">Unlimited access to e-learning materials</p>
          </div>
          <div className="group-14">
            <img className="check-circle" alt="Check circle" src="Circle.svg" />
            <p className="text-wrapper-4">Unlimited access to AI- mental health chatbot</p>
          </div>
          <div className="group-15">
            <img className="check-circle-3" alt="Check circle" src="Circle.svg" />
            <p className="text-wrapper-4">Unlimited access to AI-generated flashcard &amp; quiz</p>
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
