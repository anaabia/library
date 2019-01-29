import React from 'react';
import {concatString} from './util.js';

const Book = (props) => {
    return (
        <div className="book">
            <div className="book-top">
            <div className="book-cover" 
            style={{ width: 128, height: 193, backgroundImage: `url("${props.photo}")`}}>
            </div>
            <div className="book-shelf-changer">
                <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{props.title}</div>
            <div className="book-authors">{props.authors.reduce((author1, authors2) => concatString(author1,authors2, ', '))}</div>
        </div>
    );
};

export default Book;