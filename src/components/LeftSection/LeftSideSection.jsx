import React, { useState } from "react";

import "./LeftSideSection.css";

import {
  RiHome4Line,
  RiUser6Line,
  RiStockLine,
  RiMap2Line,
  RiLogoutBoxRLine,
} from "@remixicon/react";

import logo from "../../assets/image/logo.png";

function LeftSideSection() {
  const [section, setSection] = useState("home");

  function sectionHandle(event) {
    // console.log(event.target.getAttribute("value"));
    setSection(event.target.getAttribute("value"));
  }

  return (
    <div className="left-section">
      <div className="logo">
        <img src={logo} alt="Yu logo" />
        <p>KuanYuProg</p>
      </div>

      <div className="sidebar">
        <div
          className={section === "home" ? "item active" : "item"}
          onClick={sectionHandle}
          value="home"
        >
          <RiHome4Line size={38} className="my-icon" value="home" />
          <h3 value="home">Home</h3>
        </div>
        <div
          className={section === "resume" ? "item active" : "item"}
          onClick={sectionHandle}
          value="resume"
        >
          <RiUser6Line size={38} className="my-icon" value="resume" />
          <h3 value="resume">Resume</h3>
        </div>
        <div
          className={section === "map" ? "item active" : "item"}
          onClick={sectionHandle}
          value="map"
        >
          <RiMap2Line size={38} className="my-icon" value="map" />
          <h3 value="map">Map Project</h3>
        </div>
        <div
          className={section === "stock" ? "item active" : "item"}
          onClick={sectionHandle}
          value="stock"
        >
          <RiStockLine size={38} className="my-icon" value="stock" />
          <h3 value="stock">Stock Project</h3>
        </div>
      </div>

      <div className="sign-out">
        <RiLogoutBoxRLine size={38} className="my-icon" />
        <h3>Sign Out</h3>
      </div>
    </div>
  );
}

export default LeftSideSection;
