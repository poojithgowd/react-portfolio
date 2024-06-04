import React from 'react'
const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand ps-5" href="#ede"><h2>Ede</h2></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              
              <li className="nav-item ms-2">
                <a className="nav-link active" aria-current="page" href="#skills"><h4>Skills</h4></a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link active" aria-current="page" href="#projects"><h4>Projects</h4></a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#achievements"><h4>Achievements</h4></a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link active" aria-current="page" href="#contact"><h4>Contact</h4></a>
              </li>
              <li className="nav-item ms-2">
               <a className="nav-link active" aria-current="page" href="https://github.com/poojithgowd">
               <h4> <i class="fab fa-github"></i></h4>
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link active" aria-current="page" href="https://www.linkedin.com/in/poojith-ede123">
                <h4> <i class="fab fa-linkedin"/></h4>
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link active" aria-current="page" href="https://www.instagram.com/poojith_darling?igsh=MWRheGwxbDAwNmpycg==">
                <h4> <i class="fab fa-instagram"/></h4>

                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>        
    </div>
  )
}

export default Nav;
