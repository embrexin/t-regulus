import React from 'react';
import cell2 from '../../assets/cell2.jpg';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="section-title about-title">
          <h2>About ALS</h2>
        </div>
        <div className="about-boxes">
          <div className="about-left">
            <div className="about-box-upper">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div className="about-box-lower">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
            </div>
          </div>
          <div className="about-right">
            <img src={cell2} alt="ALS cell" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
