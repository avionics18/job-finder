import React from "react";
import Job from "./Job";

const JobList = ({ jobs, displayJob }) => {
  return (
    <div className="col-lg-4 py-4" id="job-list">
      {jobs.map((item) => (
        <Job key={item.id} job={item} displayJob={displayJob} />
      ))}
    </div>
  );
};

export default JobList;
