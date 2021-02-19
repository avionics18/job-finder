import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6" id="hero-bg" />
          <div className="col-md-6 bg-white" id="hero-content">
            <h1 className="text-uppercase font-weight-bold">
              Find Your Dream <span className="text-primary">Job</span> With
              Comfort
            </h1>
          </div>
        </div>
      </div>
      {/* Hero */}
      {/* category */}
      <div className="bg-light py-5 border-top">
        <div className="container py-4">
          <h3 className="font-weight-bold text-capitalize text-center">
            Find Job By Category
          </h3>
          <p className="text-secondary text-center">
            <i>Open lesser winged midst wherein may morning</i>
          </p>
          <div className="row pt-3">
            {/* col start */}
            <div className="col-lg-3 col-md-4">
              <div className="card mb-3 rounded-lg shadow-sm border-light">
                <div className="card-body text-center">
                  <p className="mt-3">
                    <i className="fa fa-pie-chart fa-3x text-primary" />
                  </p>
                  <p className="font-weight-bold mb-2">
                    Accounting &amp; Finanance
                  </p>
                  <p className="small text-secondary">250 Open Jobs</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="card mb-3 rounded-lg shadow-sm border-light">
                <div className="card-body text-center">
                  <p className="mt-3">
                    <i className="fa fa-tasks fa-3x text-primary" />
                  </p>
                  <p className="font-weight-bold mb-2">
                    Production &amp; Operation
                  </p>
                  <p className="small text-secondary">250 Open Jobs</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="card mb-3 rounded-lg shadow-sm border-light">
                <div className="card-body text-center">
                  <p className="mt-3">
                    <i className="fa fa-dashcube fa-3x text-primary" />
                  </p>
                  <p className="font-weight-bold mb-2">Telecommunication</p>
                  <p className="small text-secondary">250 Open Jobs</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="card mb-3 rounded-lg shadow-sm border-light">
                <div className="card-body text-center">
                  <p className="mt-3">
                    <i className="fa fa-shirtsinbulk fa-3x text-primary" />
                  </p>
                  <p className="font-weight-bold mb-2">
                    Garments &amp; Textile
                  </p>
                  <p className="small text-secondary">250 Open Jobs</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="card mb-3 rounded-lg shadow-sm border-light">
                <div className="card-body text-center">
                  <p className="mt-3">
                    <i className="fa fa-newspaper-o fa-3x text-primary" />
                  </p>
                  <p className="font-weight-bold mb-2">Marketing &amp; Sales</p>
                  <p className="small text-secondary">250 Open Jobs</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="card mb-3 rounded-lg shadow-sm border-light">
                <div className="card-body text-center">
                  <p className="mt-3">
                    <i className="fa fa-steam fa-3x text-primary" />
                  </p>
                  <p className="font-weight-bold mb-2">
                    Engineer &amp; Architech
                  </p>
                  <p className="small text-secondary">250 Open Jobs</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="card mb-3 rounded-lg shadow-sm border-light">
                <div className="card-body text-center">
                  <p className="mt-3">
                    <i className="fa fa-deviantart fa-3x text-primary" />
                  </p>
                  <p className="font-weight-bold mb-2">Design &amp; Creative</p>
                  <p className="small text-secondary">250 Open Jobs</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="card mb-3 rounded-lg shadow-sm border-light">
                <div className="card-body text-center">
                  <p className="mt-3">
                    <i className="fa fa-slideshare fa-3x text-primary" />
                  </p>
                  <p className="font-weight-bold mb-2">Customer Support</p>
                  <p className="small text-secondary">250 Open Jobs</p>
                </div>
              </div>
            </div>
            {/* col end */}
          </div>
        </div>
      </div>
      {/* category */}
      {/* Mobile App */}
      <div className="py-5 bg-white border-top">
        <div className="container">
          <h3 className="font-weight-bold text-capitalize text-center mb-4">
            Get Job Finder App For Your Mobile
          </h3>
          <p className="text-secondary text-center w-75 m-auto">
            Searching for jobs have never been that easy. Now you can find job
            matched your career expectation, apply for jobs &amp; recieve
            feedbacks right on your mobile. Start your job search now!
          </p>
          <br />
          <p className="text-center">
            <button className="btn btn-primary btn-lg rounded-0">
              <i className="fa fa-android" /> Google Play
            </button>
            <button className="btn btn-primary btn-lg rounded-0 mx-2">
              <i className="fa fa-apple" /> App Store
            </button>
            <button className="btn btn-primary btn-lg rounded-0">
              <i className="fa fa-windows" /> Microsoft Store
            </button>
          </p>
        </div>
      </div>
      {/* Mobile App */}
    </>
  );
};

export default Home;
