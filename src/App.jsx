import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./routes/landingpage";
import ProductPage from "./routes/productpage";
import NavBar from "./components/NavBar";
import BookingPage from "./routes/bookingpage";
import ContactUs from "./routes/contactuspage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/products",
      element: <ProductPage />,
    },
    {
      path: "/bookingpage/:id",
      element: <BookingPage />,
    },
    {
      path: "/contactus",
      element: <ContactUs />,
    },
  ]);
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
