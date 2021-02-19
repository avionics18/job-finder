import React from "react";

const Contact = () => {
  const onsubmit = e => {
    e.preventDefault();
    alert("Sorry! This form is just for display purpose...");
  };

  return (
    <>
      <div id="contact-cover" className="page-header">
        <h1 className="m-0 text-white">
          <b>CONTACT</b>
        </h1>
      </div>
      {/* Contact Details */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 d-flex">
              <p className="h2">
                <span class="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x" />
                  <i className="fa fa-globe fa-stack-1x fa-inverse" />
                </span>
              </p>
              <div className="ml-4">
                <h2 className="font-weight-light text-primary">Website</h2>
                <p className="mb-0 small text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  et explicabo illo soluta enim suscipit possimus libero facere.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <p className="h2">
                <span class="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x" />
                  <i className="fa fa-phone-square fa-stack-1x fa-inverse" />
                </span>
              </p>
              <div className="ml-4">
                <h2 className="font-weight-light text-primary">Call Us</h2>
                <p className="mb-1 text-secondary">+91 3456 7890</p>
                <p className="m-0 text-secondary">+91 3456 7890</p>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <p className="h2">
                <span class="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x" />
                  <i className="fa fa-envelope fa-stack-1x fa-inverse" />
                </span>
              </p>
              <div className="ml-4">
                <h2 className="font-weight-light text-primary">Email</h2>
                <p className="mb-0 small text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  et explicabo illo soluta enim suscipit possimus libero facere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <section className="bg-light border-top border-bottom py-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-8">
              <form onSubmit={onsubmit}>
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="small text-secondary font-weight-bold">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name ..."
                      />
                    </div>
                  </div>
                  {/* col-md-6 */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="small text-secondary font-weight-bold">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email ..."
                      />
                    </div>
                  </div>
                  {/* col-md-12 */}
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="small text-secondary font-weight-bold">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Subject ..."
                      />
                    </div>
                  </div>
                  {/* col-md-12 */}
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="small text-secondary font-weight-bold">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        rows={5}
                        placeholder="Enter Message ..."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  {/* col-md-12 */}
                </div>
                {/* form-row */}
                <button type="submit" className="btn btn-primary px-4">
                  Send Message <i className="fa fa-paper-plane" />
                </button>
              </form>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <h4>Contact Info</h4>
                  <div id="address-box">
                    <div id="address-box-icon">
                      <i className="fa fa-map-marker fa-3x text-primary" />
                    </div>
                    <p className="mb-1 text-secondary font-weight-bold">
                      Job Finder Pvt. Ltd.
                    </p>
                    <p className="mb-1 text-secondary small">
                      No: 266, 3rd Cross Rd, 1st Block, Koramangla
                    </p>
                    <p className="mb-1 text-secondary small">
                      Bengaluru, Karnataka 560034
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
