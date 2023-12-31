import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import ProductListingPage from "./pages/ProductListingPage.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import { initializeApp } from './Redux/appActions'; // Import your initialization action
import ProductCategory from "./pages/ProductCategory.jsx";
import Contact from "./pages/Contact.jsx";
import ThankYou from "./pages/ThankYou.jsx";
import AboutUs from "./pages/AboutUs.jsx";

// store.dispatch(initializeApp());
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <ProductListingPage />,
  },
  { path: "/product/:id", 
  element: <ProductDetail /> },
  { path: "/category/:category_name", 
  element: <ProductCategory /> },
  { path: "/contact", 
  element: <Contact /> },
  { path: "/thank-you", 
  element: <ThankYou /> },
  { path: "/about-us", 
  element: <AboutUs /> }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
