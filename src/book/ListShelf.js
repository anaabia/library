import React from 'react'
import '../App.css'
import Shelf from './Shelf';
import { groupBy } from '../util/util';
import { MessageH2 } from '../util/messageUtil';
import { Link } from 'react-router-dom'

const ListShelf = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <MessageH2 id="myReads" />
      </div>
      <div className="list-books-content">
        <div>
          {props.books && Object.values(groupBy(props.books, 'shelf'))
            .map(book => (
              <Shelf changeShelf={props.changeShelf} key={book[0].shelf} title={book[0].shelf} currentlyBooks={book} />
            ))
          }
        </div>
      </div>
      <div className="open-search">
        <Link
          to='/search'
        > Add </Link>
      </div>
    </div>
  )
};

export default ListShelf;
