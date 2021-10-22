import React from "react";
import {Navbar ,Nav ,Container} from "react-bootstrap";
import {Link} from "react-router-dom"

function Header() {
    return(
        <div className="content">
        <h3 className="heading">
          <Navbar variant="dark">
            <Container>
              <Nav className="me-auto">
                <Nav.Link href=""><Link to="/SignUp" className="navlink">SignUp</Link></Nav.Link>
                <Nav.Link href=""><Link to='/' className="navlink">Login</Link></Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </h3>
      </div>
    );
}

export default Header;