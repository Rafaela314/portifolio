import React, { Component } from 'react';

import './Assets/css/style.css';


//components
import Header from './components/headerComponent/header'
import Slider from './components/sliderComponent/slider'
import About from './components/aboutComponent/about'
import RecentWorks from './components/recentworksComponent/recentworks'
import Footer from './components/footerComponent/footer'





class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.connectToServer = this.connectToServer.bind(this);
  }

  connectToServer() {
    fetch('/');
  }

  componentDidMount(){
    this.connectToServer();
  }
  
  render() {
    
    return (
      <div className="App">
        <Header />
        
        
        <Slider />
        <About />
        <RecentWorks />
        <Footer />
      </div>    

      
      
    );
  }
}

export default App;
