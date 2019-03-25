import React, { Component } from 'react';


class Footer extends Component {
render() {
return (
  <footer id="contact" className="probootstrap-footer probootstrap-bg">
    <div className="container">
      <div className="row mb60">
        <div className="col-md-6">
          <div className="probootstrap-footer-widget">
            <h4 className="heading">Rafaela Cavalcante</h4>
            <p>Full Stack | Javascript Developer.</p>
          </div> 
        </div>
        <div className="col-md-6">
          <div className="probootstrap-footer-widget">
            <h4>Contact Details</h4>
            <ul className="with-icon colored">  
              <li><i className="icon-mail"></i><span>rafa.pgcavalcante@gmail.com</span></li>
              <li><i className="icon-phone2"></i><span>+55 11 98738 5809 (mobile only)</span></li>
              <li><i className="icon-location2"></i> <span>Sao Paulo, Brazil </span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row copyright">
        <div className="col-md-6">
          <div className="probootstrap-footer-widget">
            <p>&copy; 2019 Design inspired by Virb template from uicookies <br /> Demo Photos from <a href="https://unsplash.com/">Unsplash</a></p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="probootstrap-footer-widget right">
            <ul className="probootstrap-social">
              <li><a href="https://github.com/Rafaela314"><i className="fa fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/rafacavalcante/"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="https://www.instagram.com/rafa_sunshine/"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>

  
            
		);
	}
}

export default Footer;