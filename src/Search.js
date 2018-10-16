import React from 'react'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { debounce  } from "throttle-debounce";

const Search = ({ searchBooks }) => {

    const updateQuery = query => {
        debounce (500, searchBooks(query));
    };

    return(
        <div className="search-books-bar">
            <Link className="close-search" to="/" />
            <div className="search-books-input-warpper">
                <input type="text" placeholder="Search by title or author" onChange={event => updateQuery(event.target.value)}/>
            </div>
        </div>
    );
};

Search.propType = {
    searchBooks: PropTypes.func.isRequired,
}

export default Search;