import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Books from './Books'

class BookGrid extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired,
      }

    render() {
        const { books, onChangeShelf, searchResults } = this.props;

        console.log('====================================');
        console.log(searchResults);
        console.log('====================================');

        console.log('====================================');
        console.log(searchResults.shelf);
        console.log('====================================');

        return(
            <div className="search-books-results">
                <div className="books-grid">
                    { books.map(book => (
                        <li key={book.id}>
                            <Books 
                                title={book.title}
                                image={book.imageLinks.thumbnail}
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

export default BookGrid