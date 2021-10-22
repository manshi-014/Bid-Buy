import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom"

const SignUp =() =>{
    const[Name, setname] = useState('')
    const[email, setemail] = useState('')
    const[Password ,setPassword] = useState('')
    
    const submitHandler = (e)=> {
       e.preventDefault();
       if(email===''  || Password==='' || Name=== '')
       {
           alert("Fill all the required fields")
       }
       else{
        let data = {Name,email,Password}
        console.log(data)
        setemail('')
        setPassword('')
        alert("SignUp Successful")
       }
    }

    return(
    <div className="Login">
       <h3>Create Account</h3>
      <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            id="Fname"
            onChange={(e) => setemail(e.target.value)}
            value={Name}
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
      <p>Already have an account ?<Link to="/">Login</Link> </p>
    </div>
    );
}

export default SignUp;