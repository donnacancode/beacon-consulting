/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      {/* Video Hero Section */}
      <div className="video-hero">
        <video autoPlay muted loop className="background-video">
          <source src="/opening5.mp4" type="video/mp4" />
          {/* Ensure this path is correct */}
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-overlay">
        <h1>Beacon Consulting and Advisory</h1>
        <h2 className="italicized-heading">
          Banking and Fintech Risk Management Specialists
        </h2>
      </div>

      <div className="home-content-wrapper">
        <div className="home-content">
          <h2>We Know Risk.</h2>
          <p>
            At Beacon Consulting and Advisory, our Team brings together decades
            of extensive experience across the banking, payments, and Fintech
            industries. We are deeply familiar with the unique challenges these
            sectors face, including the complexities of risk management and
            compliance in an ever-evolving regulatory landscape.
          </p>
          <p>
            Our Team of seasoned professionals has a proven track record of
            guiding financial institutions through these complexities, ensuring
            they remain compliant while achieving their strategic goals. With a
            thorough understanding of industry trends and regulatory shifts, we
            offer tailored solutions that empower our clients to navigate risks
            confidently and adapt to change effectively.
          </p>
          <p>
            We pride ourselves on our proactive approach, deep industry
            insights, and commitment to helping our clients thrive in today's
            dynamic financial ecosystem.
          </p>
          <Link to="/services" className="hero-button">
            Explore our Services
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
