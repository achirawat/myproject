import React from 'react'
import PropTypes from 'prop-types'
import Books from './Books'

const Shelf = props => {
    const { books, onChangeShelf, title } = props;

    return(
        <div>
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
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
                </ol>
            </div>
        </div>
    );
}

Shelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default Shelf;