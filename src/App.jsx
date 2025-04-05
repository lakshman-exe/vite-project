import React from "react";
import "./App.css";
export default function App() {
  return (
    <div>
      <div className="navbar">
        <img src="/chrome.png" alt="" />
        <h2>chrome for developers</h2>
        <ul type="none">
          <li>Get Inspired</li>
          <li>Blog</li>
          <li>Docs</li>
          <li>New in Chrome</li>
        </ul>
      </div>
      <div className="notice">
        <p>
          Chrome is back at Google I/O on May 20-21! <a href="">Register!!</a>
        </p>
      </div>
      <div className="hero">
        <h1>
          <span style={{ color: "#1a73e8", fontWeight: "bold" }}>
            A Powerful Web.
          </span>
          <span style={{ color: "#333", display: "block" }}>Made Easier.</span>
        </h1>
        <p>Simplifying the web to help you build, grow and innovate.</p>
        <button>Get Started</button>
      </div>
    </div>
  );
}
