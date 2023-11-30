import { useState, useEffect } from "react";
import axios from "axios";
import bhpic from "../assets/bhpic.jpeg";

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: "#374f2f" }}>
      <div
        className="p-5 text-center bg-image d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: "url(src/assets/bhpic.jpeg)",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          maxWidth: "75vw",
          margin: "auto",
        }}
      >
        <div className="mask">
          <div style={{ color: "#f29195" }}>
            <h1 className="mb-3">Hype House Utah</h1>
            {/* <h4 className="mb-3">We Are So Happy You Are Here</h4> */}
            <a
              className="btn btn-outline-dark btn-lg"
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
