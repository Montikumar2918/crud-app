import React from "react";
import { AboutMe } from "../component/about-me/AboutMe";
export default function About() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 nonImgDiv">
          <AboutMe />
        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
        {/* <AboutMeImg style={{ width: "100%" }} /> */}
      </div>
    </div>
  );
}