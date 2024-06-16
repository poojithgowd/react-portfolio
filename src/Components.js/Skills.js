import React from "react";

const Skills = () => {
  return (
    <div id="skills">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body ">
                <h3 className="card-title">SKILLS:</h3>
                <br/>
                          <div className='container-fluid'>
       <div className='row m-5'>
        {/* HTML skill circle */}
        <div className='col-12 col-sm-12 col-md-6 col-lg-3 id1'>
            <h3 style={{color:'white',textAlign:'center'}}>HTML</h3>
          <div className='box-area'>
            <div className='box'>
                <div className='round outer'>
                    <div className='inner-box'></div>
                </div>
                <div className='round'>
                    <div className='inner-box'></div>
                </div>
                <div className='number'>
                    80%
                </div>
            </div>
          </div>
          </div>
          </div>
          </div>
                  
                      
                        
                        
                            
                  
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">KNOWLEDGE ON</h5>

                <h4>HTML5</h4><div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-warning text-dark" style={{width: "100%"}}>100%</div>
                            </div>
                        <h4>CSS</h4><div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-warning text-dark" style={{width: "100%"}}>100%</div>
                            </div>
                        <h4>BOOTSTRAP</h4><div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-warning text-dark" style={{width: "100%"}}>100%</div>
                            </div>
                        <h4>JAVA SCRIPT</h4><div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-warning text-dark" style={{width: "100%"}}>100%</div>
                            </div>
                        <h4>JAVA</h4><div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-warning text-dark" style={{width: "100%"}}>100%</div>
                            </div>
                        <h4>PYTHON</h4><div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-warning text-dark" style={{width: "100%"}}>100%</div>
                            </div>
                        <h4>REACTJS</h4><div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-warning text-dark" style={{width: "100%"}}>100%</div>
                            </div>
                        <h4>SQL</h4><div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-warning text-dark" style={{width: "100%"}}>100%</div>
                            </div>
                    
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
