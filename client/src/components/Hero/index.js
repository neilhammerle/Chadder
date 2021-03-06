import React from 'react';
import './assets/styles.css';

import Earth from "../../Assets/Images/earth.png"

const index = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="row justify-content-between">
                    <div>
                        <h1 className="text-left">See what's going on
            <br />
                            annoymously. </h1>
                        <h2>
                            Get live feed from anywhere,
              <br />
                            even if you might not be there!
            </h2>
                        <form>
                            <label>
                                <input id='zipform' type='text' placeholder="Enter Zip Code!" name='zipcode' />
                            </label>
                            <input id='zipsubmit' type="submit" value='Submit' />
                        </form>
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
        </section >
    );
}

export default index
