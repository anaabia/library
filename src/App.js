import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI.js';
import { Route } from 'react-router-dom'
import ListShelf from './ListShelf';
import SearchBook from './SearchBook';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => this.setState((prevState) => ({
        books: prevState.books.concat(books)
      })));
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <SearchBook />
        )} />
        <Route exact path='/' render={() => (
          <ListShelf books={this.state.books} />
        )} />
      </div>
    )
  }

}

export default BooksApp
