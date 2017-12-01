import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Browsing from './components/Browsing/Browsing.js';
import BookDetail from './components/BookDetail/BookDetail.js';
import EditBook from './components/EditBook/EditBook.js';
import AddBook from './components/AddBook/AddBook.js';
import Cart from './components/Cart/Cart.js';
import BookShelf from './components/BookShelf/BookShelf.js';
import NavBar from './components/NavBar/NavBar.js';


class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
      <NavBar />
        <Route component={ Login } path="/" exact />
        <Route component={ Browsing } path="/browsing" />
        <Route component={ BookDetail } path="/bookdetail" />
        <Route component={ EditBook } path="/editbook" />
        <Route component={ AddBook } path="/addbook" />
        <Route component={ Cart } path="/cart" />
        <Route component={ BookShelf } path="/bookshelf" />        
      </div>
      </HashRouter>
    );
  }
}

export default App;
