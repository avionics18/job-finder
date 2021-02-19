import React from "react";

const About = () => {
  return (
    <>
      {/* #about-cover */}
      <div id="about-cover" className="page-header">
        <h1 className="m-0 text-white">
          <b>ABOUT</b>
        </h1>
      </div>
      <section className="py-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-5">
              <img
                src="https://themesdesign.in/jobya/images/about.jpg"
                alt="people"
                className="w-100 h-100 border rounded-lg shadow"
              />
            </div>
            <div className="col-md-7 d-flex justify-content-center align-items-center">
              <div className="px-3">
                <h3>About Us</h3>
                <p className="text-secondary">
                  Aenean eros et nisl sagittis as vestibulum at Nullam nulla
                  eros ultricies site amet nonummy id imperdiet feugiat pede as
                  Sed lectuse Donec mollis hendrerit Phasellus at nec sem in at
                  pellentesque facilisis at Praesent congue erat at massa Sed
                  sit cursus turpis vitae tortor that a Donec posuere as
                  vulputate arcu Phasellus accumsan velit.
                </p>
                <p className="text-secondary">
                  Maecenas tempus tellus eget as that condimentum rhoncus sem
                  quam semper libero amete adipiscing sem neque sed ipsum Nam
                  quam nunce blandit at luctus pulvinar hendrerit id lorem
                  Maecenas nec et ante tincidunt tempus.
                </p>
                <p className="text-secondary">
                  Sed consequat leo eget bibendum sodales augue at velit cursus
                  nunc.
                </p>
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* #showcase-stats */}
      <section
        id="showcase-stats"
        className="bg-light border-top border-bottom py-5"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center py-4 border-right">
              <h1 className="font-weight-light">2030</h1>
              <p className="text-secondary">JOBS</p>
              <p className="m-0 text-secondary">
                <i className="fa fa-users fa-2x" />
              </p>
            </div>
            <div className="col-md-3 text-center py-4 border-right">
              <h1 className="font-weight-light">3500</h1>
              <p className="text-secondary">APPLICATIONS</p>
              <p className="m-0 text-secondary">
                <i className="fa fa-file fa-2x" />
              </p>
            </div>
            <div className="col-md-3 text-center py-4 border-right">
              <h1 className="font-weight-light">1250</h1>
              <p className="text-secondary">COMPANIES</p>
              <p className="m-0 text-secondary">
                <i className="fa fa-university fa-2x" />
              </p>
            </div>
            <div className="col-md-3 text-center py-4">
              <h1 className="font-weight-light">4000</h1>
              <p className="text-secondary">EMPLOYERS</p>
              <p className="m-0 text-secondary">
                <i className="fa fa-users fa-2x" />
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* #showcase-stats */}
      {/* #testimonial */}
      <section id="testimonial" className="py-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-5">
              <h2 className="font-weight-normal">Company Testimonial</h2>
              <h5 className="text-secondary font-weight-bold">
                Job Finder Pvt. Ltd.
              </h5>
              <p className="text-secondary small">
                <i className="fa fa-globe" />{" "}
                <a href="javascript:void(0)" className="text-secondary">
                  jobfinder.co.in
                </a>
              </p>
              <p className="text-secondary">
                Maecenas tempus tellus et condimentum that as rhoncus sem quam
                semper adipiscing sem neque sed ipsum Nam quam nunc blandit at
                luctus at id lorem maecenas nec odio et ante tincidunt tempus
                Donec vitae venenatis faucibus quis ante.
              </p>
              <ul className="text-secondary">
                <li>Aenean leo ligula porttitor eu consequat eleifend enim.</li>
                <li>Quisque rutrum Aenean imperdiet nisi vel augue.</li>
                <li>Maecenas tempus tellus sem semper libero.</li>
              </ul>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <p className="m-0">
                  <button className="btn btn-outline-primary">
                    Learn More
                  </button>
                </p>
                <p className="m-0 text-secondary">
                  <span className="mr-2">
                    <a href="#" className="text-secondary text-decoration-none">
                      <i className="fa fa-facebook" />
                    </a>
                  </span>
                  <span className="mr-2">
                    <a href="#" className="text-secondary text-decoration-none">
                      <i className="fa fa-twitter" />
                    </a>
                  </span>
                  <span className="mr-2">
                    <a href="#" className="text-secondary text-decoration-none">
                      <i className="fa fa-whatsapp" />
                    </a>
                  </span>
                  <span>
                    <a href="#" className="text-secondary text-decoration-none">
                      <i className="fa fa-instagram" />
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="nav flex-column nav-pills" role="tablist">
                <a
                  className="nav-link active"
                  data-toggle="pill"
                  href="#image-2"
                  role="tab"
                >
                  <img
                    src="https://themesdesign.in/jobya/images/blog/img-8.jpg"
                    alt="sample"
                    className="w-100"
                  />
                </a>
                <a
                  className="nav-link"
                  data-toggle="pill"
                  href="#image-3"
                  role="tab"
                >
                  <img
                    src="https://themesdesign.in/jobya/images/blog/img-9.jpg"
                    alt="sample"
                    className="w-100"
                  />
                </a>
                <a
                  className="nav-link"
                  data-toggle="pill"
                  href="#image-4"
                  role="tab"
                >
                  <img
                    src="https://themesdesign.in/jobya/images/blog/img-10.jpg"
                    alt="sample"
                    className="w-100"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-5 col-8">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="image-2"
                  role="tabpanel"
                >
                  <img
                    src="https://themesdesign.in/jobya/images/blog/img-8.jpg"
                    alt="sample"
                    className="w-100"
                  />
                </div>
                <div className="tab-pane fade" id="image-3" role="tabpanel">
                  <img
                    src="https://themesdesign.in/jobya/images/blog/img-9.jpg"
                    alt="sample"
                    className="w-100"
                  />
                </div>
                <div className="tab-pane fade" id="image-4" role="tabpanel">
                  <img
                    src="https://themesdesign.in/jobya/images/blog/img-10.jpg"
                    alt="sample"
                    className="w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* #testimonial */}
    </>
  );
};

export default About;
