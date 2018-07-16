import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Books from './Books'

class BookGrid extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired,
      }

    render() {
        const { books, onChangeShelf } = this.props;

        return(
            <div className="search-books-results">
                <div className="books-grid">
                    { books.map(book => (
                        <li key={book.id}>
                            <Books 
                                title={book.title}
                                image={book.imageLinks.thumbnail}
                                authors={book.authors}
                                book={book}
                                shelf={book.shelf}
                                onChangeShelf={onChangeShelf}/>
                        </li>
                    )) }
                </div>
            </div>
        );
    }
}

export default BookGrid