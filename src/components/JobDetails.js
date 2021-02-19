import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";

const JobDetails = ({ job }) => {
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (!(typeof job === "undefined" || Object.keys(job).length === 0)) {
      setFirstRender(false);
    }
  }, [job]);

  const showDate = () => {
    let d = new Date(job.created_at);
    let n = d.toDateString();
    return n;
  };

  if (typeof job === "undefined" || Object.keys(job).length === 0) {
    return (
      <div className="col-lg-8 bg-light border" id="job-details">
        <div className="p-4">
          <p className="text-secondary text-center pt-5 font-weight-bold">
            {firstRender ? (
              <i class="fa fa-spinner fa-pulse fa-3x fa-fw text-primary" />
            ) : (
              "Sorry, There is no such job that you are looking for!"
            )}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="col-lg-8 bg-light border" id="job-details">
      <div className="p-4">
        <div className="row">
          <div className="col-lg-7">
            <p className="text-secondary small">
              <i className="fa fa-clock-o" /> Job Posted On: <b>{showDate()}</b>
            </p>
          </div>
          <div className="col-lg-5">
            <p className="text-right">
              <span
                className={`badge badge-${
                  job.type === "Full Time"
                    ? "success"
                    : job.type === "Contract"
                    ? "info"
                    : "warning"
                }`}
              >
                {job.type}
              </span>
            </p>
          </div>
        </div>
        <h1 className="font-weight-bold mb-3">{job.title}</h1>
        <p className="text-primary font-weight-bold">
          <span>
            <i className="fa fa-building-o" /> {job.company}
          </span>{" "}
          |{" "}
          <span>
            <i className="fa fa-map-marker" /> {job.location}
          </span>
        </p>
        <p>
          <a href={job.company_url} className="btn btn-outline-dark btn-sm">
            Visit Compoany Website <i className="fa fa-link" />
          </a>
        </p>
        <hr />
        <div
          className="job-content"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(job.description)
          }}
        />
        <div className="py-3">
          <div className="card">
            <div className="card-header font-weight-bold">How To Apply ?</div>
            <div
              className="card-body"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(job.how_to_apply)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
