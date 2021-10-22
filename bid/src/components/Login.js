import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom"

const Login =() =>{
    const[email, setemail] = useState('')
    const[Password ,setPassword] = useState('')

    const submitHandler = (e)=> {
       e.preventDefault();
       if(email===''  || Password==='')
       {
           alert("Fill all the required fields")
       }
       else{
        let data = {email,Password}
        console.log(data)
        setemail('')
        setPassword('')
        alert("Login Successful")
       }
    }

    return(
    <div className="Login">
       <h3>Login</h3>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="number"
            id="Fname"
            onChange={(e) => setemail(e.target.value)}
            value={email}
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
      <p>Create new account ?<Link to="/SignUp">SignUp</Link> </p>
    </div>
    );
}

export default Login;