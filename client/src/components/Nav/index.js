import React from 'react';
import './assets/styles.css';

import { BrowserRouter as Router } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const index = () => {
    return (
        <div>
            <Router>
                <Container className="p-0" fluid={true}>
                    <Navbar id='navbar' collapseOnSelect expand="lg" bg="warning" variant="warning">
                        <Navbar.Brand id='navbartabs' href="/">Chadder</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link id='navbartabs' href="/about">About</Nav.Link>
                                <Nav.Link id='navbartabs' href="/contact">Contact</Nav.Link>
                                <Nav.Link id='navbartabs' href="/signin">Sign In</Nav.Link>
                                <Nav.Link id='navbartabs' href="/register">Sign Up </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Router>


        </div>
    );
}

export default index
