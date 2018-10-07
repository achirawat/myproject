import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Books from './Books'
import bookPlaceHolder from "./img/nobookcover.jpg";

class BookGrid extends Component {
    render() {
        const { books, onChangeShelf, searchResults } = this.props;

        return(
            <div className="search-books-results">
                <div className="books-grid">
                    { searchResults.map(result => {
                        const bookInShelf = books.find(
                            book => book.id === result.id
                        );
                        return (
                            <li key={result.id}>
                                <Books 
                                    title={result.title}
                                    image={result.imageLinks !== undefined ? result.imageLinks["thumbnail"] : bookPlaceHolder}
                                    authors={result.authors}
                                    book={result}
                                    shelf={bookInShelf !== undefined ? bookInShelf.shelf : "none"}
                                    onChangeShelf={onChangeShelf}
                                />
                            </li>
                        );
                    }) }
                </div>
            </div>
        );
    }
}

BookGrid.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
}

export default BookGrid