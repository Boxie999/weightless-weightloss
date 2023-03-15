import React from 'react';
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="sm">
        <Container>
        <Navbar.Brand href="#home">SimpleFit</Navbar.Brand>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">My Exercises</Nav.Link>
                    </Nav.Item>                    
                </Nav>
        </Container>
    </Navbar>
  )
}

export default Header