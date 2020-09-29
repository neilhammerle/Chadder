import React, { Component } from "react";
import './assets/styles.css';
export default class SignIn extends Component {
    render() {
        return (
            <form>
                <h3 id='toptextr'>Letting get started!</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button id='submitr' type="submit" className="btn btn-warning btn-block">Sign Up</button>
                <p id='fpr' className="forgot-password text-right">
                    Already registered? <a href="/signin">Sign In!</a>
                </p>
            </form>
        );
    }
}