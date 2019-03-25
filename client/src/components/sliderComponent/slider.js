import React, { Component } from 'react';

import dean from '../../Assets/img/dean.jpg';

class Slider extends Component {


render() {

    
  return (
    <div>
      <section id="slider" className="probootstrap-slider flexslider">
        <ul className="slides">
          <li style={{backgroundImage: `url(${dean})`}} className="overlay2">
            
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="slides-text probootstrap-animate" data-animate-effect="fadeIn">
                    <h2>Create beautiful things one at a time</h2>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section> 


      <section className="probootstrap-section">
        <div className="container">
          <div className="row overlap">
            <div className="col-md-4">
              <div className="service left-icon probootstrap-animate">
                <div className="icon">
                  <i className="icon-laptop3"></i>
                </div>
                <div className="text">
                  <h3 className="heading">Technology</h3>
                  <p> From Creativity to reality. Pursue state-of-the-art < br /> innovation. </p>
                  
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service left-icon probootstrap-animate">
                <div className="icon">
                  <i className="icon-presentation"></i>
                </div>
                <div className="text">
                  <h3 className="heading">Service Design</h3>
                  <p> Make sense. <br /> Make It human. < br /> Solutions to real needs. </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service left-icon probootstrap-animate">
                <div className="icon">
                  <i className="icon-wallet2"></i>
                </div>
                <div className="text">
                  <h3 className="heading">Business Strategy</h3>
                  <p>The big picture. <br /> Analysis and insights to drive better decisions.  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
            
		);
	}
}

export default Slider;
