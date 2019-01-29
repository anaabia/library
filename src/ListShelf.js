import React from 'react'
import './App.css'
import Shelf from './Shelf';
import { groupBy } from './util.js';
import { Link } from 'react-router-dom'

class ListShelf extends React.Component {

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.props.books && Object.values(groupBy(this.props.books, 'shelf'))
              .map(book => (
                <Shelf key={book[0].shelf} currentlyBooks={book} />
              ))

            }
          </div>
        </div>
        <div className="open-search">
        <Link
            to='/search'
          > Add </Link>
          {/* <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button> */}
        </div>
      </div>
    )
  }

}

export default ListShelf
