import React from "react";
import { Link, useLoaderData } from "react-router";

const Job = () => {
  const jobsData = useLoaderData();

  return (
    <div className="jobs">
      {jobsData.map((job) => {
        return (
          <Link to={job.id.toString()} key={job.id}>
            <h3>{job.title}</h3>
            <h5>{job.company}</h5>
            <p>{job.description}</p>
            <p>{job.location}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Job;

export const jobLoader = async () => {
  const res = await fetch("http://localhost:5000/jobs");
  return res.json();
};


// loader functions in React Router are used to fetch data before rendering a route. They allow you to load data asynchronously and pass it to the component that will be rendered for that route. This is useful for ensuring that your components have the necessary data available when they are rendered, improving performance and user experience.
// In this case, the `jobLoader` function fetches job data from a local server and returns it as JSON. This data can then be accessed in the `Job` component using the `useLoaderData` hook, allowing you to display a list of job openings dynamically.
// The `useLoaderData` hook is used to access the data returned by the loader function. It provides a way to retrieve the data that was loaded before the component was rendered, making it available for use within the component. This is particularly useful for displaying lists or details based on the fetched data, as seen in the `Job` component where it maps over the job data to create links for each job opening.
// The `Link` component is used to create navigable links to different routes in the application. In this case, it creates links to individual job details pages based on the job ID. When a user clicks on a job title, they are navigated to the corresponding job details page, which can be defined in the routing configuration.
// The `to` prop in the `Link` component specifies the target route. In this case, it uses the job ID to create a dynamic route for each job. This allows the application to navigate to a specific job's details page when the link is clicked, enabling a more interactive user experience.