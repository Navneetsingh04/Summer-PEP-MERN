import React from 'react'
import { Outlet } from 'react-router'

const JobsLayout = () => {
  return (
    <div>
      <h2>Job openings</h2>
      <p>List of current job opening in our Company</p>
      <Outlet/>
    </div>
  )
}

export default JobsLayout
