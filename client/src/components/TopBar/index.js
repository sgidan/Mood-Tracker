import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

// let item = localStorage.getItem("user");
// let user = null;
// if (item) {
//   user = JSON.parse(item);
// }

function TopBar(props) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Mood Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link id="nav-option" href="/signup">
              SignUp
            </Nav.Link>
            <Nav.Link id="nav-option" href="/login">
              Login
            </Nav.Link>
            <Nav.Link id="nav-option" onClick={props.logout}>
              Logout

            </Nav.Link>
            <Nav.Link id="nav-option" href="#pricing">
              {props.user ? props.user.name + "'s Mood Tracker" : " "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TopBar;
