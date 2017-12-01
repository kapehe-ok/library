import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="navbars">
                <ul>
                    <Link exact className="active" to="/">Photo of a book</Link>
                    <Link className="active" to="/browsing">BROWSE</Link>
                    <Link className="active" to="/cart">CART</Link>
                    <Link className="active" to="/bookshelf">MyShelf</Link>
                </ul>
            </div>
        )
    }
}

export default NavBar;