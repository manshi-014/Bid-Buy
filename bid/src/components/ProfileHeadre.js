import React from "react";
import {Navbar ,Nav ,Container} from "react-bootstrap";
import {Link} from "react-router-dom"

function ProfileHeader() {
    return(
        <div className="content">
        <h3 className="heading">
          <Navbar variant="dark">
            <Container>
              <Nav className="me-auto">
                <Nav.Link href=""><Link to="/SignUp" className="navlink">Choose</Link></Nav.Link>
                <Nav.Link href=""><Link to='/' className="navlink">Home</Link></Nav.Link>
                <Nav.Link href=""><Link to='/' className="navlink">Products</Link></Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </h3>
      </div>
    );
}

export default ProfileHeader;