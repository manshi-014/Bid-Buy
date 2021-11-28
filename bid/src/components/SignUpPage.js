import React, { useState } from "react";
import SignUp from "./SignUp";
import Slider from "./slider";
import Header from "./Header";

const SignUpPage = () => {
 

  return (
    <div className="Signup">
      <Slider />
      <Header />
       <div>
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
                   <SignUp/>
                  </div>
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

export default SignUpPage;
