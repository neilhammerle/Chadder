import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const index = () => {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>Speak annoymously</h1>
                    <p>
                        Chadder lets you see what is going on around your local area.
                        </p>
                    <p>
                        Or you could see what is going on in certain places!
                        </p>

                </Container>
            </Jumbotron>
        </div>
    )
}

export default index
