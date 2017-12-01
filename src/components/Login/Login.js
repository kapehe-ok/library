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

        
    }

    render() {
        return (
            <div>
                <div className="loginDiv">
                    <h1>Book Exchange</h1>
                    <div className="inputBoxes">
                        <a href="http://localhost:3005/auth"><button>Login</button></a>
                        {/* <Link to="/browsing"><button className="loginButtons" onClick={this.login}> Login </button></Link> */}
                        <Link to="/browsing"><button className="loginButtons"> Register </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect( state => state, { login, register })(Login);