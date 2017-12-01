import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { login, register } from './../../ducks/reducer.js';
import { connect } from 'react-redux';



class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }

        this.proceedAsGuest = this.proceedAsGuest.bind(this);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    login() {
        const { login, history } = this.props;
        const { username, password } = this.state;
        login({ username, password }, history);
    }
    register() {
        const { register, history } = this.props;
        const { username, password } = this.state;
        register({ username, password }, history);
    }
    proceedAsGuest() {
        const { history } = this.props;
        history.push('/');
    }
    handleChange(prop, val) {
        this.setState({ [prop]: val});
    }

    render() {
        return (
            <div>
                <div className="loginDiv">
                    <h1>Book Exchange</h1>
                    <div className="inputBoxes">
                        <h2>Username</h2>
                        <input onChange={ (e) => this.handleChange('username' , e.target.value) }/>
                        <h2>Password</h2>
                        <input onChange={ (e) => this.handleChange('password' , e.target.value) }/>
                        <br />
                        <Link to="/browsing"><button className="loginButtons" onClick={this.login}> Login </button></Link>
                        <Link to="/browsing"><button className="loginButtons"> Register </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect( state => state, { login, register })(Login);