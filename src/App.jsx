import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./routes/landingpage";
import ProductPage from "./routes/productpage";

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
  ]);
  return (
    <>
      <div>navbar</div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
