import React from "react";
import "./HomePage.css";

import LeftSideSection from "../LeftSection/LeftSideSection";
import Mapbox from "../MapContainer/Mapbox";

function HomePage() {
  return (
    <div className="container">
      <div className="section">
        <LeftSideSection />
      </div>
      <div className="main">
        <Mapbox />
      </div>
    </div>
  );
}

export default HomePage;
