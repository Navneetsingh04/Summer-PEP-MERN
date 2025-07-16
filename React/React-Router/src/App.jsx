import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ConatctInfo from "./components/ConatctInfo";
import ContactForm from "./components/ContactForm";
import NotFound from "./components/NotFound";
import Job from "./pages/Job";
import JobsLayout from "./layout/JobsLayout";
import { jobLoader } from "./pages/Job";
import JobDetails, { JobDetailsLoader } from "./components/JobDetails";
import Error from "./components/Error";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ConatctInfo/>} />
          <Route path="form" element={<ContactForm/>}/>
        </Route>
        <Route path="jobs" element={<JobsLayout/>}>
          <Route index element={<Job/>} loader={jobLoader}/>
          <Route path=":id" element={<JobDetails/>} loader={JobDetailsLoader} errorElement={<Error/>}></Route>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    )
  );

  return (
    // <div>
    //   <Navbar/>
    //   <div className='container'>
    //   <Routes>
    //     <Route path='/' element={<Home/>}/>
    //     <Route path='/products' element={ <Products/>}/>
    //     <Route path='/about' element={ <About/>}/>
    //     <Route path='/contact' element={ <Contact/>}/>

    //   </Routes>
    //   </div>
    // </div>
    <RouterProvider router={router} />
  );
};

export default App;

// In react Router we can create Routes using two main methods:
// 1. Using the `createBrowserRouter` and `createRoutesFromElements` methods
// 2. Using the `Routes` and `Route` components directly in the JSX.
// The first method is more flexible and allows for better organization of routes, especially in larger applications. It also supports nested routes and layouts more easily.
// The second method is simpler and more straightforward for smaller applications or when you want to define routes inline within your component structure. It is often used for quick prototyping or when the routing logic is not complex.


// Nested Routes in React Router allow you to create a hierarchy of routes, where a parent route can render child routes. This is useful for organizing your application and creating layouts that can be shared across multiple pages. In this case, the ContactLayout could be used to define a specific layout for the Contact page, which might include additional components or styles that are unique to that page.

// Route parameters in React Router allow you to define dynamic segments in your routes. These parameters can be used to capture values from the URL and pass them to your components as props. For example, if you have a route like `/products/:productId`, the `:productId` segment is a route parameter that can be accessed in the component rendered by that route. This is useful for creating pages that display specific items based on their IDs or other unique identifiers.

// Dynamic Routing in React Router allows you to create routes that can change based on the data or state of your application. This means you can render different components or layouts based on the current URL or application state. For example, you might have a route that displays a list of items, and when a user clicks on an item, it navigates to a dynamic route that shows the details of that specific item. This is often achieved using route parameters or query strings to pass data between routes.