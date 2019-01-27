import React from 'react';
import Book from './Book.js';

const Shelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.currentlyBooks.map(book => (
                        <li>
                            <Book
                                title={book.title}
                                author={book.author}
                                photo={book.photo} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Shelf;