import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";



class Header extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <header role="banner" className="probootstrap-header" id="header">
        <div className="container">
          <h1 className="probootstrap-logo">RC</h1>

          <div className="mobile-menu-overlay"></div>

          <nav role="navigation" className="probootstrap-nav hidden-xs">
            <ul className="probootstrap-main-nav" id="options">
              <li className="active"><Link to="header">Home</Link></li>
       		    <li className="dumba"><Link to="about">About Me</Link></li>
              <li className="dumba"><Link to="recentworks">Recent Work</Link></li>
       		    <li className="dumba"><Link to="contact">Contact</Link></li>
     		    </ul>
     		    <ul className="probootstrap-right-nav hidden-xs">
       		    <li><a href="https://github.com/Rafaela314"><i className="fa fa-github"></i></a></li>
       		    <li><a href="https://www.linkedin.com/in/rafacavalcante/"><i className="fa fa-linkedin"></i></a></li>
       		    <li><a href="https://www.instagram.com/rafa_sunshine/"><i className="fa fa-instagram"></i></a></li>
     		    </ul>
     		    <div className="extra-text visible-xs"> 
       
       			  <h5>Connect</h5>
       		    <ul className="social-buttons">
                <li><a href="https://github.com/Rafaela314"><i className="fa fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/rafacavalcante/"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="https://www.instagram.com/rafa_sunshine/"><i className="fa fa-instagram"></i></a></li>
              </ul>
            </div>
          </nav>
        </div> 
      </header>         
		);
	}
}

export default Header;