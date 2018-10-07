import React from 'react'
import PropTypes from 'prop-types'

const Books = props => {
    const { title, image, authors, book, shelf, onChangeShelf } = props;

    return(
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
                <div className="book-shelf-changer">
                    <select onChange={e => onChangeShelf(book, e.target.value)} value={book.shelf || shelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors ? authors.join(', ') : ''}</div>
        </div>
    );
}

Books.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    authors: PropTypes.array,
    books: PropTypes.object,
    onChangeShelf: PropTypes.func
}

export default Books;