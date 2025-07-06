//  useContext is a React Hook that allows us to access the data from any component without passing props down through every level of the component tree.
//  It is used to share data that can be considered "global" for a tree of React components, such as the current authenticated user, theme, or preferred language.
//  It is particularly useful for avoiding "prop drilling," where you have to pass data through many layers of components just to get it to a deeply nested component that needs it.
//  useContext is often used in conjunction with the Context API, which provides a way to create a context object that can be shared across components. The useContext hook allows you to consume the context value directly in your functional components without needing to wrap them in a Context.Consumer component.


import Profile from './Profile'
import Footer from './Footer'

const UseContextDemo = () => {
  return (
    <div>
        <Profile />
        <Footer/>
    </div>
  )
}

export default UseContextDemo
