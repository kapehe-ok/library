import React, { Component } from 'react';
import './Browsing.css';
import { connect } from 'react-redux';
import { getBooks } from './../../ducks/reducer.js';
// import axios from 'axios';


class Browsing extends Component {
    constructor() {
        super();

        this.state = {
            books: []
        }
    }

    componentDidMount() {
        this.props.getBooks();
    
    }

    render() {
        console.log(this.props.books)
        const booksToBrowse = this.props.books.map((books, i) => {
            return (
                <div>
                    <section>
                        <div>{books.img}</div>
                        <div>{books.book_name}</div>
                        <div>{books.author}</div>
                        <div>{books.in_stock}</div>
                        <div><button className="detailbutton">Details</button></div>
                    </section>
                    
                </div>
            
            )
        })

        return (

            <div id='browsed'>
                <article>
                    <header>
                        Browse Inventory
                    </header>
                   {booksToBrowse}
                   <footer>
                        <button>+ADD NEW BOOK</button>
                    </footer>
                </article>
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
