/* eslint-disable */ 

import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">shopping mall</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className = "main">
        <div className = "event">
          <h1>20% Season Off</h1>
          <p>

          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className = "col-md-4">
            <img src="http://codingapple1.github.io/shop/shoes1.jpg" width = "100%"/>
          </div>
          <div className = "col-md-4">
            <img src="http://codingapple1.github.io/shop/shoes2.jpg" width = "100%"/>
          </div>
          <div className = "col-md-4">
            <img src="http://codingapple1.github.io/shop/shoes3.jpg" width = "100%"/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
