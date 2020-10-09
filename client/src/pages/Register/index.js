import React, { Component } from "react";
import axios from 'axios';
import './assets/styles.css';
export default class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            fullName: '',
            username: '',
            email: '',
            password: ''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event) {
        this.setState({
            fullName: event.target.value
        })
    }
    changeUsername(event) {
        this.setState({
            username: event.target.value
        })
    }
    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()

        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:4000/app/register', registered)
            .then(response => console.log(response.data))

        this.setState({
            fullName: '',
            username: '',
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <form>
                <h3 id='toptextr'>Letting get started!</h3>

                <div className="form-group">
                    <form onSubmit={this.onSubmit} />
                    <label>Full Name</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Full Name"
                        onChange={this.changeFullName}
                        value={this.state.fullName}
                    />
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Username"
                        onChange={this.changeUsername}
                        value={this.state.username}
                    />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={this.changeEmail}
                        value={this.state.email}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={this.changePassword}
                        value={this.state.password}
                    />
                </div>

                <button id='submitr' type="submit" className="btn btn-warning btn-block">Sign Up</button>
                <p id='fpr' className="forgot-password text-right">
                    Already registered? <a href="/signin">Sign In!</a>
                </p>
            </form>
        );
    }
}