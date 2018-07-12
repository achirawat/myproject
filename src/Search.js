import React,{ Component } from 'react'
import * as BooksAPI from './BooksAPI';
import { Link } from "react-router-dom";

class Search extends Component {

    render() {
        return(
            <div className="search-book-bar">
                <Link className="close-search" to="/" />
                <div className="search-books-input-warpper">
                    <input type="text" placeholder="Search by title or author" onChangeShelf={onChangeShelf} />
                </div>
            </div>
        );
    }
}

export default Search;