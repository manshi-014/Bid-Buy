import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link ,useHistory } from "react-router-dom";

const SignUp = () => {
  const [Username,setUsername] = useState("");
  const [FName, setname] = useState("");
  const [LName, setLname] = useState("");
  const [dob,setdob] = useState("");
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");

  const history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (email === "" || Password === "" || FName === "" || LName==="" || Username === "" || dob==="") {
      alert("Fill all the required fields");
    } else {
      let val = { FName,LName,dob, email, Password,Username };
      console.log(val);
      // setemail('')
      // setPassword('')
      // alert("SignUp Successful")

      let result = await fetch("https://bid-n-buy.herokuapp.com/signup",{
        method:"POST",
        body:JSON.stringify(val),
        headers: {
          "Content-Type" : "application/json",
          "Accept" : "application/json"
        },
      })
      const data = await result.json();
      if (data.status === 422 || !data) {
        window.alert("invalid registration");
        console.log("invalid registration");
      }else {
        window.alert(" registration successfull");
        console.log(" registration successfull");
        localStorage.setItem("userinfo",JSON.stringify(data));
        history.push("/welcome");
      }


      console.log(result)
    }
  };

  return (
    <div className="Login">
      <h3>Create Account</h3>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            id="Fname"
            onChange={(e) => setname(e.target.value)}
            value={FName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            id="Lname"
            onChange={(e) => setLname(e.target.value)}
            value={LName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date of birth</Form.Label>
          <Form.Control
            type="date"
            id="date"
            onChange={(e) => setdob(e.target.value)}
            value={dob}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Usename</Form.Label>
          <Form.Control
            type="username"
            id="usename"
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
          Create Account
        </Button>
      </Form>
      <p>
        Already have an account ?<Link to="/">Login</Link>{" "}
      </p>
    </div>
  );
};

export default SignUp;
