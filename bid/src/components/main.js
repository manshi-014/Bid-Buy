import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpPage from "./SignUpPage";
import Login from "./Login";
import Homepage from "./Homepage";
import Footer from "./footer";
import welcome from "./welcome";

function Main() {
    return(
        <div className="main">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUpPage} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/welcome" component={welcome} />
          <Route exact path="Footer" component={Footer} />
        </Switch>
      </Router>
      
    </div>
    );
}

export default Main;