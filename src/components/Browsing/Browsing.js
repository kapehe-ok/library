import React, { Component } from 'react';
import './Browsing.css';
import { connect } from 'react-redux';
import { getBooks } from './../../ducks/reducer.js';
import axios from 'axios';


class Browsing extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentWillReceiveProps(id) {
        axios.get(`/api/books/${this.props.books.id}`).then(response => {
            this.setState({
                books: response.data
            })
        })
    }


    render() {
        const books = this.props.books;
         
        return (
            <div>
                <h1>Browse Inventory</h1>
                <div>
                    <p><img src={books.img} /></p>
                    <p>Title: {books.book_name}</p>
                    <p>Author: {books.author}</p>
                    <p>In-Stock: {books.in_stock}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps, { getBooks })(Browsing);
