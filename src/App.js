import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI.js';
import { Route } from 'react-router-dom'
import ListShelf from './book/ListShelf';
import SearchBook from './book/SearchBook';
import {IntlProvider} from "react-intl";
import { addLocaleData } from "react-intl";
import locale_pt from 'react-intl/locale-data/pt';
import messages_en from "./intl/en.json";
import messages_pt from "./intl/pt.json";

const messages = {
    'en': messages_en,
    'pt': messages_pt
};
const language = navigator.language.split(/[-_]/)[0];

addLocaleData([...locale_pt]);

class BooksApp extends React.Component {
  state = {
    books: [],
    booksSearch: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => this.setState((prevState) => ({
        books: prevState.books.concat(books)
      })));
  }

  searchBook = (search) => {
    BooksAPI.search(search)
    .then(books => this.setState({
      booksSearch: books && books.length > 0 ? books.map(this.mergerSelf) : books
    }));
  }

  filterById = (list, id, shelf) => {
    const book = list.find(book => book.id === id);
    if(book){
      book.shelf = shelf
    }
    return book;
  }

  changeShelf = ( shelf, id ) => {
   let newShelf = this.filterById(this.state.books, id, shelf);
    if(!newShelf){
      newShelf = this.filterById(this.state.booksSearch, id, shelf);
    }
    BooksAPI.update(newShelf, shelf);
    this.setState((prevState) => ({
      books: prevState.books.filter((book => book.id !== id)).concat(newShelf),
    }));

  };

  mergerSelf = (search) => {
    const book = this.state.books.find(book => book.id === search.id);
    return book ? book: search;
  };

  render() {
    return (
      <IntlProvider locale={language} messages={messages[language]}>
        <div className="app">
          <Route path='/search' render={() => (
            <SearchBook 
            changeShelf={this.changeShelf} 
            searchBooks={this.searchBook} 
            booksSearch={this.state.booksSearch} />
          )} />
          <Route exact path='/' render={() => (
            <ListShelf 
            changeShelf={this.changeShelf} 
            books={this.state.books.filter(b => b.shelf !== 'none')} />
          )} />
        </div>
      </IntlProvider>
    )
  }

}

export default BooksApp
