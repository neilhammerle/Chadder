import React, { Component } from "react";

export default class SignIn extends Component {
    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-warning btn-block">Sign In</button>
                <p className="forgot-password text-right">
                    Don't have a account, no worries! <a href="/register">Sign Up!</a>
                </p>
            </form>
        );
    }
}