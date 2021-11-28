import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import { useHistory, Route } from "react-router-dom";
import Slider from "./slider";
import Header from "./Header";


const Homepage = () => {
  let history = useHistory();
  return (
    <div>
      <Slider />
      <Header />
      <div className="main">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 left-div ">
                <div className="description">
                  <h1 className="text"> Just a click away to start</h1>
                </div>
              </div>
              <div className="bg-light col-md-6 right-div">
                <div className="row">
                  <div className="col-md-6 right-div-login">
                    <Login />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
