import React from 'react';
import cell2 from '../../assets/cell2.jpg';
import cell3 from '../../assets/cell3.jpeg';

function About() {
  return (
    <section id="als" className="about-section">
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
        <div className="about-boxes">
          <div className="about2-left">
            <img src={cell3} alt="Another ALS cell" />
          </div>
          <div className="about2-right">
            <div className="about2-box">
              <div className="about2-box-spacer"></div>
              <div className="about2-box-text1">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </div>
            </div>
            <div className="about2-box">
              <div className="about2-box-text2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </div>
              <div className="about2-box-spacer"></div>
            </div>
            <div className="about2-box">
              <div className="about2-box-spacer"></div>
              <div className="about2-box-text3">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
