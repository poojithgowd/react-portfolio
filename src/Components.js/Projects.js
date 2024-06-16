import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='p-5'>
      <div className="container">
      <h1 style={{color:'white'}}>My Projects:</h1>
      <br/>
      <div className="container">
      <div className="row">
    <div className="col-sm-6 mb-3 mb-sm-0 " data-aos="fade-right">
      <div className="card border-0">
        <div className="card-body projects">
          <h3>Color Generator using js...</h3>
            <a href='https://github.com/poojithgowd/Clor-Generator-using-JavaScript' ><h4 style={{color:'white'}}>Click here to visit...</h4></a>          
        </div>
      </div>
    </div>
    <div className="col-sm-6 " data-aos="fade-left">
      <div className="card border-0">
        <div className="card-body">
        <h5>The `generateColor()` function in the JavaScript file (`script.js`) generates random RGB colors by selecting values from predefined arrays of red, green, and blue components.</h5>
        </div>
      </div>
    </div>
  </div></div>
  <hr style={{color:"white"}}></hr>
  <div className="container">
  <div className="row">
    <div className="col-sm-6 mb-3 mb-sm-0" data-aos="fade-right">
      <div className="card border-0">
        <div className="card-body projects">
          <h3>Quotes Generator..</h3>
            <a href='https://github.com/poojithgowd/Quotes-Generator-by-using-js' ><h4 style={{color:'white'}}>Click here to visit...</h4></a>          
        </div>
      </div>
    </div>
    <div className="col-sm-6 " data-aos="fade-left">
      <div className="card border-0">
        <div className="card-body">
        <h5>This is a simple JavaScript program that generates random quotes from a predefined array of quotes. Each time the function quotes() is called, a random quote from the array is displayed.</h5>
        </div>
      </div>
    </div>
  </div></div>
  <hr style={{color:"white"}}></hr>
  <div className="container">
  <div className="row">
    <div className="col-sm-6 mb-3 mb-sm-0" data-aos="fade-right">
      <div className="card border-0">
        <div className="card-body projects">
          <h3>Weather Api using js..</h3>
            <a href='https://github.com/poojithgowd/Weather-Infomation' ><h4 style={{color:'white'}}>Click here to visit...</h4></a>          
        </div>
      </div>
    </div>
    <div className="col-sm-6 " data-aos="fade-left">
      <div className="card border-0">
        <div className="card-body">
        <h5>Weather Information App This web application allows users to retrieve weather information by entering a location. It utilizes the OpenWeatherMap API to fetch real-time weather data and displays it dynamically on the webpage.</h5>
        </div>
      </div>
    </div>
  </div></div>
  <hr style={{color:"white"}}></hr>
  <div className="container">
  <div className="row">
    <div className="col-sm-6 mb-3 mb-sm-0" data-aos="fade-right">
      <div className="card border-0">
        <div className="card-body projects">
          <h3>Weaather api using react...</h3>
            <a href='https://github.com/poojithgowd/weather-information--using-reactjs' ><h4 style={{color:'white'}}>Click here to visit...</h4></a>          
        </div>
      </div>
    </div>
    <div className="col-sm-6 " data-aos="fade-left">
      <div className="card border-0">
        <div className="card-body">
        <h5>This is a simple weather application built using React. The application fetches and displays the current weather information for a given city using the OpenWeatherMap API.</h5>
        </div>
      </div>
    </div>
  </div></div>
  <hr style={{color:"white"}}></hr>


    </div>
    </div>
    
  )
}

export default Projects
