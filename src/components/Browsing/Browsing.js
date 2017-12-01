import React, { Component } from 'react';
import './Browsing.css';
import { connect } from 'react-redux';
import { getBooks } from './../../ducks/reducer.js';
// import axios from 'axios';


class Browsing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: []
        }
    }

    componentDidMount() {
        this.props.getBooks();
    }


    render() {
        console.log(this.props.books)
        const bunchOfBooks = this.props.books.map((books, i) => {
            return (
                <div key={i}>
                    <p><img alt=" " src={books.img} /></p>
                    <p>Title: {books.book_name}</p>
                    <p>Author: {books.author}</p>
                    <p>In-Stock: {books.in_stock}</p>
                </div>
            )
        })

            return (
                <div>
                    <h1>Browse Inventory</h1>
                    <div>
                        {bunchOfBooks}
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
