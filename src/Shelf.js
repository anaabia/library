import React from 'react';
import Book from './Book.js';

const Shelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.currentlyBooks[0].shelf}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.currentlyBooks.map(book => (
                        <li key={book.id}>
                            <Book
                                title={book.title}
                                authors={book.authors}
                                photo={book.imageLinks.smallThumbnail} 
                                />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Shelf;