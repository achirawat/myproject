import React from "react"
import PropTypes from 'prop-types'
import Shelf from "./Shelf"

const BookShelf = props => {
    const { books, onChangeShelf } = props;

    return(
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">\
                <div className="bookshelf">
                    <Shelf title="Currently Reading" onChangeShelf={onChangeShelf} books={books.filter(book => book.shelf === 'currentlyReading')}/>
                    <Shelf title="Want to Read" onChangeShelf={onChangeShelf} books={books.filter(book => book.shelf === 'wantToRead')}/>
                    <Shelf title="Read" onChangeShelf={onChangeShelf} books={books.filter(book => book.shelf === 'read')}/>
                </div>
            </div>
        </div>
    );
}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default BookShelf;