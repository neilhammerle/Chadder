import React from 'react'
import "./assets/style.css";

import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
        <footer id='footer'>
            <div className='footer-top'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-lg-12 col-md-1 footer-contact text-center'>
                            <h3>Chadder</h3>
                            <p>
                                Oakland, CA 94607 <br />
                                United States <br />
                                <strong>Email: </strong> contact@chadder.com <br />
                            </p>
                        </div>
                    </div>

                    <Navbar id='crnb' bg="warning">
                        <Navbar.Brand>&copy; Chadder</Navbar.Brand>
                    </Navbar>
                </div>
            </div>
        </footer>
    )
}
export default Footer