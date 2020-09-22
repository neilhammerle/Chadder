import React from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';

const index = () => {
    return (
        <div>
            <Router>
                <Container className="p-0" fluid={true}>
                    <Navbar className='border-bottom' bg='dark' variant='dark' expand='lg'>
                        <Navbar.Brand href="/home">Chadder</Navbar.Brand>

                        <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
                        <Navbar.Collapse id='navbar-toggle'>
                            <Nav className='ml-auto'>
                                <Link className='nav-link' to='/home'>Home</Link>
                                <Link className='nav-link' to='/about'>About</Link>
                                <Link className='nav-link' to='/contact'>Contact</Link>
                            </Nav>
                        </Navbar.Collapse>

                        <Form inline>
                            <Button variant='outline-warning'>Sign In</Button>
                        </Form>
                    </Navbar>
                </Container>
            </Router>


        </div>
    );
}

export default index
