import { useState, useEffect } from "react";
import axios from "axios";

export default function LandingPage() {
  return (
    <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="mask">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">Heading</h1>
            <h4 className="mb-3">Subheading</h4>
            <a
              className="btn btn-outline-light btn-lg"
              href="/products"
              role="button"
            >
              Book With Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
