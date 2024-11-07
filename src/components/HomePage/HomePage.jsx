import React, { useState, useEffect } from "react";
import "./HomePage.css";

import LeftSideSection from "../LeftSection/LeftSideSection";
import Mapbox from "../MapContainer/Mapbox";
import WikiData from "../WikiContainer/WikiData";
import WeatherData from "../WeatherContainer/WeatherData";

function HomePage() {
  const [viewPort, setViewPort] = useState({
    longitude: 120.751864,
    latitude: 23.575998,
    zoom: 7,
  });
  const [isKeyWord, setKeyWord] = useState("臺灣");
  const [location, setLocation] = useState(viewPort);
  useEffect(() => {
    setLocation(viewPort);
  }, [viewPort]);
  return (
    <div className="container">
      <div className="section">
        <LeftSideSection />
      </div>
      <div className="main">
        <div className="mapbox">
          <Mapbox
            keyWord={setKeyWord}
            viewPort={viewPort}
            setViewPort={setViewPort}
            setLocation={setLocation}
          />
        </div>
        <div className="wikiAndweather">
          <WikiData keyWord={isKeyWord} />
          <WeatherData position={location} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
