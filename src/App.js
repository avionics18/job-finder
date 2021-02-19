import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./style.css";

export default function App() {
  const [singleJob, setSingleJob] = useState({});
  const [sidebarJobs, setSidebarJobs] = useState([]);
  const [jobs, setJobs] = useState([]);

  async function initialStep() {
    let res = await fetch("./db.json");
    let data = await res.json();
    setJobs(data);
    setSidebarJobs(data);
  }
  // set single jobs after every change in sidebarjobs
  useEffect(() => {
    setSingleJob(sidebarJobs[0]);
  }, [sidebarJobs]);

  useEffect(() => {
    // set the initial seps i.e. fetch the db.json & set the Jobs array
    // and one first item of job to displayJob object
    initialStep();
  }, []);

  const displayJob = id => {
    let obj = {};
    sidebarJobs.forEach(item => {
      if (item.id === id) {
        obj = { ...item };
      }
    });
    setSingleJob(obj);
  };

  const filterOutput = (a, b) => {
    let newArray;
    switch (a) {
      case "1":
        newArray = jobs.filter(item => item.type === "Full Time");
        break;
      case "2":
        newArray = jobs.filter(item => item.type === "Contract");
        break;
      case "3":
        newArray = jobs.filter(item => item.type === "Part Time");
        break;
      default:
        newArray = [...jobs];
    }
    // Make all the changes in a new array and setSidebarJobs equal to that array.
    switch (b) {
      case "1":
        newArray = newArray.filter(item => item.location === "Remote");
        break;
      default:
    }

    setSidebarJobs(newArray);
  };

  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route
        path="/career"
        render={props => (
          <div id="main-wrapper">
            <div id="career-cover" className="page-header">
              <h1 className="m-0 text-white">
                <b>CAREERS</b>
              </h1>
            </div>
            <div className="container py-5">
              <h2 className="text-primary mb-4">Currnet Open Positions:</h2>
              <div className="row">
                <FilterBar filterOutput={filterOutput} />
              </div>
              <div className="row">
                <JobList jobs={sidebarJobs} displayJob={displayJob} />
                <JobDetails job={singleJob} />
              </div>
            </div>
          </div>
        )}
      />
      <Route path="/contact-us" component={Contact} />
      <Footer />
    </Router>
  );
}
