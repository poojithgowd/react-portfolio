import React, { useEffect } from 'react';


const Achievements = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  // }, []);


  return (
    <div id='achievements' className='projects'>
      <h1 style={{ color: 'white' }}>Achievements:</h1>
      <br />
      <div className="container">
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0" data-aos="fade-up">
          <div className="card border-0">
            <div className="card-body projects">
              <h4>
                *JavaScript(Basic) certificate <br />powered by HACKER RANK
              </h4>
            </div>
          </div>
        </div>
        <div className="col-sm-6" data-aos="fade-up">
          <div className="card border-0">
            <div className="card-body certificates">
              <img src="./js hacker rank.jpg" className='rounded-4' alt="no image" style={{ width: '200px', height: '200px' }} />
            </div>
          </div>
        </div>
      </div></div>
      <div className="container">
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0" data-aos="fade-up">
          <div className="card border-0">
            <div className="card-body projects">
              <h4>
                *Successfully completed masters class-python <br />powered by -Skill AP (APSSDC)
              </h4>
            </div>
          </div>
        </div>
        <div className="col-sm-6" data-aos="fade-up">
          <div className="card border-0">
            <div className="card-body certificates">
              <img src="./apssdc.jpg" className='rounded-4' alt="no image" style={{ width: '200px', height: '200px' }} />
            </div>
          </div>
        </div>
      </div></div>
      <div className="container">
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0" data-aos="fade-up">
          <div className="card border-0">
            <div className="card-body projects">
              <h4>
                *Participation in International webinar <br />WEB DEVELOPMENT USING CODELESS TOOLS (APSSDC)
              </h4>
            </div>
          </div>
        </div>
        <div className="col-sm-6" data-aos="fade-up">
          <div className="card border-0">
            <div className="card-body certificates">
              <img src="./codeless.jpg" className='rounded-4' alt="no image" style={{ width: '200px', height: '200px' }} />
            </div>
          </div>
        </div>
      </div></div>
      <div className="container">
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0" data-aos="fade-up">
          <div className="card border-0">
            <div className="card-body projects">
              <h4>
                *Successfully completed Bootcamp <br /> on JavaScript & Reactjs <br /> powered by-DEVTown
              </h4>
            </div>
          </div>
        </div>
        <div className="col-sm-6" data-aos="fade-up">
          <div className="card border-0">
            <div className="card-body certificates">
              <img src="./developer club.jpg" className='rounded-4' alt="no image" style={{ width: '200px', height: '200px' }} />
            </div>
          </div>
        </div>
      </div></div>
      <div className="container">
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0" data-aos="fade-up">
          <div className="card border-0">
            <div className="card-body projects">
              <h4>
                *Successfully completed 6 months internship on web development <br />in MANAC INFOTECH (P)LIMITED
              </h4>
            </div>
          </div>
        </div>
        <div className="col-sm-6" data-aos="fade-up">
          <div className="card border-0">
            <div className="card-body certificates">
              <img src="./manac.jpg" className='rounded-4' alt="no image" style={{ width: '200px', height: '200px' }} />
            </div>
          </div>
        </div>
      </div></div>
      <hr style={{ color: "white" }} />
    </div>
  );
}

export default Achievements;
