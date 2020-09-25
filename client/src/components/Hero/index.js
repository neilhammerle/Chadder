import React from 'react';
import './assets/styles.css';

import Earth from "../../Assets/Images/earth.png"

const index = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="row justify-content-between">
                    <div clasName="col-lg-3 pt-5 pt-lg-0 d-flex">
                        <h1 className="text-left">Speak to the world
            <br />
                            annoymously. </h1>
                        <h2>
                            See what's going on in your area
              <br />
                            even if you might not be there!
            </h2>
                        <a href="/about" className="badge-pill btn-get-started  scrollto">
                            Learn More
            </a>
                    </div>
                    <div className=" align-items-right justify-content-right rounded-circle hero-img">
                        <img
                            src={Earth}
                            className="img-fluid animated earth"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default index
