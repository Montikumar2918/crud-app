import React from "react";
//import { ReactComponent as Intro } from "../../assets/undraw_programming_2svr.svg";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import "./HomeIntro.css"


export const HomeIntro = () => {
  return (
    <div className="container-fluid">
      <div className="images">
             <img className="image" src="/images1.jpg"  width="20%" height='20%' alt="Logo" /> 
             </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 nonImgDiv">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              </div>
              <div className="text-danger">
                <h3 className="text-start">App is built in React using :</h3>
              </div>
            
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-5 col-lg-4 m-2">
                    <div className="card bootstrap-card">
                      <div className="tech-intro ">
                        <BsFillBootstrapFill className="tech-logo" />
                        <div className="tech-info align-middle">Bootstrap</div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="col-12 col-sm-12 col-md-5 col-lg-4 m-2">
                    <div className="card react-card">
                      <div className="tech-intro ">
                        <FaReact className="tech-logo" />
                        <div className="tech-info align-middle"> React </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="col-12 col-sm-12 col-md-12 col-lg-4 m-2">
                    <div className="card router-card">
                      <div className="tech-intro ">
                        <SiReactrouter className="tech-logo" />{" "}
                        <div className="tech-info align-middle">
                          {" "}
                          react-router-dom{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <div className="col-12 col-sm-12 col-md-12 col-lg-4 m-2">
                    <div className="card icon-card">
                      <div className="tech-intro ">
                        <RiReactjsLine className="tech-logo react-icons-logo" />{" "}
                        <div className="tech-info align-middle">
                          {" "}
                          react-icons{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};