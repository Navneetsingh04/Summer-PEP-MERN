import { use } from "react";
import "./App.css";
import { BrowserRouter, useParams } from "react-router";
import { Routes, Route } from "react-router";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import Dashboard from "./Layouts/Dashboard";

function App() {
  const Home = () => {
    return (
      <div>
        <h1>Home Page</h1>
        <p>Welcome to the Home Page</p>
      </div>
    );
  };

  const About = () => {
    return (
      <div>
        <h1>About Page</h1>
        <p>This is the About Page</p>
      </div>
    );
  };

  const Contact = () => {
    return (
      <div>
        <h1>Contact Page</h1>
        <p>This is the Contact Page</p>
      </div>
    );
  };
  const Profile = () => {
    return (
      <div>
        <h1>Profile Page</h1>
        <p>This is the Profile Page</p>
      </div>
    );
  };
  const ProfileSetting = () => {
    return (
      <div>
        <h1>ProfileSetting Page</h1>
        <p>This is the ProfileSetting Page</p>
      </div>
    );
  };

  const UserProfile = () => {
    const params = useParams();

    return (
      <div>
        <h1>User Profile Page</h1>
        <p>This is the User Profile Page of {params.username}</p>
      </div>
    );
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile">
            <Route index element={<Profile />} />
            {/* <Route path=":/username">
              <Route index element={<UserProfile />} />
            </Route> */}
            <Route path=":username" element={<UserProfile />} />
            <Route path="setting" element={<ProfileSetting />} />
          </Route>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductPage />} />

          <Route path="/products" element={<Dashboard/>}>
              <Route index element={<Products/>}/>
              <Route path=":id" element={<ProductPage/>} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
