import "./App.css";
import { BrowserRouter, useParams } from "react-router";
import { Routes, Route } from "react-router";
import Products from "./pages/Products/Products";
import ProductPage from "./pages/productPage/ProductPage";
import CartPage from "./pages/Cart/CartPage";
import Dashboard from "./Layouts/Dashboard";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Profile from "./pages/Profile/Profile";
import ProfileSetting from "./pages/ProfileSetting/ProfileSetting";
import UserProfile from "./pages/UserProfile/UserProfile";
import SignUp from "./components/Login/SignUp";
import SignIn from "./components/Login/SignIn";
import AdminRoute from "./routes/AdminRoute";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import Counter from "./features/Counter";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          {/* <Navbar/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile">
              <Route index element={<Profile />} />
              <Route path=":/username">
              <Route index element={<UserProfile />} />
            </Route>
              <Route path=":username" element={<UserProfile />} />
              <Route path="setting" element={<ProfileSetting />} />
            </Route>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductPage />} />

            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Products />} />
              <Route path=":id" element={<ProductPage />} />
            </Route>

            <Route
              path="/profile"
              element={
                <AdminRoute>
                  <Profile />
                </AdminRoute>
              }
            ></Route>
            <Route path="counter" element={<Counter/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
