import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="row ">
        <div className="col-sm-6 mb-3 mb-sm-0 p-5">
          <div className="card">
            <h1>*Contact me!*</h1>
            <h3>
              Have any questions? Fill out the form and I'll get you a response
              soon!
            </h3>
            Feel free to ask / inquire about anything (school, basketball,
            internships, music, etc). Hoping to be a resource and be of help in
            your journey in any way possible. Similarly, please use this form or
            email directly me if your message regards a NIL opportunity.
            <a className="nav-link active" aria-current="page" href="#">
              <h4>poojith29gowd@gmail.com</h4>
            </a>
            <a></a>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card p-5">
            <form p-5>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
              />
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
              />
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message:
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary m-5">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default Contact;
