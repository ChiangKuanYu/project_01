import React, { useState, useCallback } from "react";
import ReactMapGl, { Source, Layer, Popup, Marker } from "react-map-gl";
import WebMercatorViewport from "viewport-mercator-project";

import { BsTriangleFill } from "react-icons/bs";
import { PiMountainsDuotone } from "react-icons/pi";
import "mapbox-gl/dist/mapbox-gl.css";

import "./Mapbox.css";

import TMountain from "../../assets/Json/taiwanMountain.json";

// const TOKEN = process.env.REACT_APP_TOKEN;
const TOKEN = "your mapbox API";
function Mapbox() {
  const [viewPort, setViewPort] = useState({
    longitude: 120.751864,
    latitude: 23.575998,
    zoom: 7,
  });

  console.log(TOKEN);

  return (
    <div className="reactMap" id="reactMap">
      <ReactMapGl
        mapLib={import("mapbox-gl")}
        {...viewPort}
        mapboxAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/light-v9"
      />
    </div>
  );
}

export default Mapbox;
