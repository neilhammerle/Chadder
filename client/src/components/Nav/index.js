import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown'

const index = () => {
    return (
        <div>
            <Router>
                <Container className="p-0" fluid={true}>
                    <Navbar className='border-bottom' bg='warning' variant='warning' expand='sm'>
                        <Navbar.Brand href="/">Chadder</Navbar.Brand>
                        <Navbar.Collapse className='justify-content-center'>
                            <Form inline>
                                <Dropdown>
                                    <Dropdown.Toggle variant='outline-dark'>
                                        Sign In
                                </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Form>
                                            <Form.Group controlId="Email">
                                                <Form.Label>Email Here</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Button variant="outline-warning" type="submit">
                                                Submit
                                            </Button>
                                        </Form>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Form>

                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Router>


        </div>
    );
}

export default index
