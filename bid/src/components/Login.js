import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/welcome");
    }
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    if (Username === "" || Password === "") {
      alert("Fill all the required fields");
    } else {
      let val = { Username, Password };
      console.log(val);
      // setemail('')
      // setPassword('')
      // alert("Login Successful")

      const response = await fetch("https://bid-n-buy.herokuapp.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "appliacation/JSON",
          "Accept": "application/JSON",
          'charset': 'utf-8'
        },
        body: JSON.stringify(val),
      });
      const data = await response.json();
      if (response.status === 400 || !data) {
        window.alert("invalid credentials");
        console.log("invalid credentials");
      } else {
        window.alert(" login successfull");
        console.log(" login successfull");
        localStorage.setItem("user-info",JSON.stringify(data))
        history.push("/welcome")
      }
    }
  };

  return (
    <div className="Login">
      <h3>Login</h3>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={Username}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p>
        Create new account ?<Link to="/SignUp">SignUp</Link>{" "}
      </p>
    </div>
  );
};

export default Login;
