import React from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const index = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href='/'>Chadder</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/about'>About</Nav.Link>
                    <Nav.Link href='/contact'>Contact</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant='outline-info'>Sign In</Button>
                </Form>
            </Navbar>

        </div>
    )
}

export default index
