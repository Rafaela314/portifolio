import React, { Component } from 'react';

import profile from '../../Assets/img/profile.jpg';

class About extends Component {
render() {
return (
  <div id="about" className="probootstrap-section">
    <div className="container" id="about">
      <div className="row">
        <div className="col-md-12 text-center section-heading probootstrap-animate">
          <h2>About me</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 probootstrap-animate" data-animate-effect="fadeInLeft">

          <div className="panel-group probootstrap-panel" id="accordion" role="tablist" aria-multiselectable="true">
            <div className="panel panel-default">
              <div classame="panel-heading" role="tab" id="headingOne">
                <h3 className="panel-title">
                  <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Drive and Purpose
                  </a>
                </h3>
              </div>
              <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                <div className="panel-body">
                  <p> Beauty and simplicity. I am a developer and service designer with business background. A curious mind passionate about the powerful combination of human centered design and state-of-the-art technology. I am willing to drive "make sense" innovation that challenges the current way of thinking and focus on solving real world problems. I LOVE what I DO and I DO what I DO with empathy, respect, simplicity and kindness when It comes to human relationships.</p>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingTwo">
                <h3 className="panel-title">
                  <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Previous Experiences
                  </a>
                </h3>
              </div>
              <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div className="panel-body">
                  <p> Business Management and Service Design were my main fields of study before I started to learn how to seriously code. I worked in marketing and sales department of big corporations such as The Coca-Cola Company and Johnson&Johnson. That was right before I fall in love with innovation and became part of project teams working with partner organizations and investors. In the meanwhile, motherhood has turned me into an even more fierce advocate for women's empowerment throught technology and the future of work.  </p>
                  
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingThree">
                <h3 className="panel-title">
                  <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    From Now On
                  </a>
                </h3>
              </div>
              <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                <div className="panel-body">
                  <p> For over a year, I have decided to apply myself in the not-so-easy-to-start "developer learning path". I have learned the basics of Javascript, MySQL, Pyhton, HTML, CSS, React, Node.js, Flask. On the one hand, I fell proud of getting this far and I am willing to keep learning in a lifelong basis. On the other hand, I am eager to put my skills at the service of people and purposes by facing challenges in the real world. </p>
                </div>
              </div>
            </div>
          </div>
       
        </div>

        <div className="col-md-6 probootstrap-animate" data-animate-effect="fadeInRight">
          <p><img src={profile} alt="profile" className="img-responsive" /></p>
        </div>
      </div>
    </div>
  </div>
		    
		);
	}
}

export default About;