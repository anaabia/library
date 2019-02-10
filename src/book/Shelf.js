import React from 'react';
import '../App.css'
import Book from './Book.js';
import { MessageH2 } from '../util/messageUtil';

const Shelf = (props) => {
    return (
        <div className="bookshelf">
            {props.title &&
                <MessageH2 id={props.title} className="bookshelf-title" />
            }
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.currentlyBooks && props.currentlyBooks.map(book => (
                        <li key={book.id}>
                            <Book
                                changeShelf={props.changeShelf}
                                book={book}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

Shelf.defaultProps = {
    title: '',
};

export default Shelf;