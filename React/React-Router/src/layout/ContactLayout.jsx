import React from 'react'
import Contact from '../pages/Contact'
import { Outlet } from 'react-router'

const ContactLayout = () => {
  return (
    <div>
      <Contact/>
      <Outlet/>
    </div>
  )
}

export default ContactLayout

// Nested Routes in React Router allow you to create a hierarchy of routes, where a parent route can render child routes. This is useful for organizing your application and creating layouts that can be shared across multiple pages.

// Outlet is a component provided by React Router that acts as a placeholder for rendering child routes. When you define nested routes, the Outlet component will render the content of the child route at that location in the parent component's layout.