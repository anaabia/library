import React from 'react';

import { concatString } from '../util/util.js';
import { MessageOptions } from '../util/messageUtil'

const onClickOptionShelf = (props, event) => {
    return props.changeShelf(event.target.value, props.book.id);
};

const Book = (props) => {
    return (
        <div className="book">
            <div className="book-top">
                {props.book.imageLinks && props.book.imageLinks.smallThumbnail &&
                    <div className="book-cover"
                        style={{ width: 128, height: 193, backgroundImage: `url("${props.book.imageLinks.smallThumbnail}")` }}>
                    </div>
                }
                <div className="book-shelf-changer">
                    <select onChange={(e) => onClickOptionShelf(props, e)} defaultValue={props.book.shelf ? props.book.shelf : 'none'}>
                        <MessageOptions id="moveTo" disabled />
                        <MessageOptions id="currentlyReading" />
                        <MessageOptions id="wantToRead" />
                        <MessageOptions id="read" />
                        <MessageOptions id="none" />
                    </select>
                </div>
            </div>
            <div className="book-title">{props.book.title}</div>
            {props.book.authors &&
                <div className="book-authors">{props.book.authors.reduce((author1, authors2) => concatString(author1, authors2, ', '))}</div>
            }
        </div>
    );
};

export default Book;