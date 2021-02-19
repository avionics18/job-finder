import React from "react";

const Job = ({ job, displayJob }) => {

  const showDate = () => {
    let d = new Date(job.created_at);
    let n = d.toDateString();
    return n;
  }
  
  return (
    <div
      className="card border-0 shadow-sm"
      onClick={() => displayJob(job.id)}
    >
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <p className="small text-secondary"><i className="fa fa-clock-o"></i> Posted On: <b>{showDate()}</b></p>
          <p className={`badge badge-${job.type === "Full Time" ? "success" : job.type === "Contract" ? "info" : "warning"}`}>{job.type}</p>
        </div>
        <h5 className="font-weight-bold">{job.title}</h5>
        <p className="text-dark font-weight-bold small">
          <span><i className="fa fa-building-o"></i> {job.company}</span>{" "}
          | <span><i className="fa fa-map-marker"></i> {job.location}</span>
        </p>
        
        <a href={`${job.url}`} className="btn btn-outline-primary btn-sm" target="_blank">
          Apply Now <i className="fa fa-long-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Job;
