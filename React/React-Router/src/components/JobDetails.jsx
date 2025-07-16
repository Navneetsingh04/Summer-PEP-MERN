import React from "react";
import { useLoaderData } from "react-router";

const JobDetails = () => {
  const jobDetails = useLoaderData();

  return (
    <div className="job-details">
      <p>
        Job Title: <b>{jobDetails.title}</b>
      </p>
      <p>
        Location: <b>{jobDetails.location}</b>
      </p>
      <p>
        Descrption: <b>{jobDetails.description}</b>
      </p>
      <br />
      <button>Apply now</button>
    </div>
  );
};

export default JobDetails;

export const JobDetailsLoader = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/jobs/${params.id}`);

  if (!res.ok) {
    throw Error("Could not find that job");
  }

  return res.json();
};
