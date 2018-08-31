import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Books from './Books'
import bookPlaceHolder from "./img/nobookcover.jpg";

class BookGrid extends Component {
    render() {
        const {onChangeShelf, searchResults } = this.props;

        return(
            <div className="search-books-results">
                <div className="books-grid">
                    { searchResults.map(book => (
                        <li key={book.id}>
                            <Books 
                                title={book.title}
                                image={book.imageLinks !== undefined ? book.imageLinks["thumbnail"] : bookPlaceHolder}
                                authors={book.authors}
                                book={searchResults}
                                shelf={searchResults.shelf}
                                onChangeShelf={onChangeShelf}/>
                        </li>
                    )) }
                </div>
            </div>
        );
    }
}

BookGrid.propTypes = {
    searchResults: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
}

export default BookGrid