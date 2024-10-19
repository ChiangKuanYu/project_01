import React from "react";
import "./HomePage.css";

import LeftSideSection from "../LeftSection/LeftSideSection";

function HomePage() {
  return (
    <div className="container">
      <div className="section">
        <LeftSideSection />
      </div>
      <div className="main">
        <label>Hello World</label>
      </div>
    </div>
  );
}

export default HomePage;
