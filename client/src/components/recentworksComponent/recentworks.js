import React, { Component } from 'react';
import house from '../../Assets/img/house.jpg';
import maps from '../../Assets/img/maps.jpg';
import Titanic from '../../Assets/img/Titanic.jpg';
import path from '../../Assets/img/path.jpg';
import books from '../../Assets/img/books.jpg';



class RecentWorks extends Component {
render() {
return (

   <section className="probootstrap-section">
    <div className="container" id="recentworks">
      <div className="row">
        <div className="col-md-12 text-center section-heading probootstrap-animate">
          <h2>Recent Work</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 probootstrap-animate">
          <div className="probootstrap-card with-hover">
            <div className="probootstrap-card-media">
              <img src={books} className="img-responsive img-border" alt="books" />
            </div>
            <div className="probootstrap-card-text">
              <h2 className="probootstrap-card-heading mb0">My Reads</h2>
              <p className="category">A simple book tracker application built with ReactJs, a server API and a client library, that allows the user to search and classify books in categories. A static example of the CSS and HTML markup was provided and was used to write React code that was needed to complete the project. Progressively, added interactivity to the app by refactoring the static code. 
                <strong>Skills:</strong> git, HTML, CSS, Object-Oriented JavaScript, ReactJs</p>
              <p><a href="https://github.com/Rafaela314/My-Reads">View details</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-4 probootstrap-animate">
          <div className="probootstrap-card with-hover">
            <div className="probootstrap-card-media">
              <img src={maps} className="img-responsive img-border" alt="google maps" />
            </div>
            <div className="probootstrap-card-text">
              <h2 className="probootstrap-card-heading mb0">Neighborhood Map</h2>
              <p className="category">A single page application featuring a Google map of a neighborhood with functionality added to include highlighted locations, third-party data about those locations (Foursquare), and various ways to browse the content. <strong>Skills:</strong> Google Maps API, ReactJS, Bootstrap, APIs, AJAX</p>
              <p><a href="https://github.com/Rafaela314/Neighbourhood-Map">View details</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-4 probootstrap-animate">
          <div className="probootstrap-card with-hover">
            <div className="probootstrap-card-media">
              <img src={house} className="img-responsive img-border" alt="living room" />
            </div>
            <div className="probootstrap-card-text">
              <h2 className="probootstrap-card-heading mb0">Item Catalog</h2>
              <p className="category">An interactive catalogue web application with items in various categories that supports full CRUD (Create, Read, Update, Delete) functionality and OAuth login authentication (G+ or Facebook). It was built with Flask and SQLAlchemy to interface with an SQL database using object-relational mapping (ORM). It was then migrated to Postgresql and deployed with Amazon Lightsail.<strong>Skills:</strong> Flask, Python, Bootstrap, AWS Lightsail, Apache2, 3rd Party Authentication, User Authorization, OAuth, Linux Web Server Configuration, PostgreSQL</p>
              <p><a href="https://github.com/Rafaela314/Catalog-Project">View details</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 probootstrap-animate">
          <div className="probootstrap-card with-hover">
            <div className="probootstrap-card-media">
              <img src={Titanic} className="img-responsive img-border" alt="boat on sea" />
            </div>
            <div className="probootstrap-card-text">
              <h2 className="probootstrap-card-heading mb0">Log Analysis</h2>
              <p className="category"> This project involved writing SQL queries and a Python reporting tool to answer three specific questions. The logs are written to a PostgreSQL database that the reporting tool needs to run queries. <strong>Skills:</strong> Python, DB-API, PostgreSQL, SQL, Vagrant, Virtual Machines </p>
              <p><a href="https://github.com/Rafaela314/Titanic-log-analysis">View details</a></p>
            </div>
          </div>
        </div>
       
        <div className="col-md-4 probootstrap-animate">
          <div className="probootstrap-card with-hover">
            <div className="probootstrap-card-media">
              <img src={path} className="img-responsive img-border" alt="path" />
            </div>
            <div className="probootstrap-card-text">
              <h2 className="probootstrap-card-heading mb0">To be continued...</h2>
              <p className="category">It's a lifelong learning path = ) </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
		);
	}
}

export default RecentWorks;