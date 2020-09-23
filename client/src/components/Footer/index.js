import React from 'react'

import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'

const index = () => {
    return (
        <div>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Button variant="outline-warning" href='/'>Home</Button>
                </Nav.Item>
                <Nav.Item>
                    <Button variant="outline-warning" href='/about'>About us</Button>
                </Nav.Item>
                <Nav.Item>
                    <Button variant="outline-warning" href='/contact'>Contact</Button>
                </Nav.Item>
                <Nav.Item>
                    <Button variant="outline-warning">Download</Button>
                </Nav.Item>
                <Nav.Item>
                    <Dropdown>
                        <Dropdown.Toggle variant='warning' id='dropdown'>
                            Follow us
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="http://www.facebook.com">Facebook</Dropdown.Item>
                            <Dropdown.Item href="http://www.instagram.com">Instagram</Dropdown.Item>
                            <Dropdown.Item href="http://www.twitter.com">Facebook</Dropdown.Item>
                            <Dropdown.Item href="http://www.youtube.com">YouTube</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default index
