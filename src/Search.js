import React from 'react'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Search extends React.Component {

    state = {
        query: ''
    }

    typeTimeout;

    updateQuery = query => {
        const { searchBooks } = this.props
        this.setState({ query: query })
        this.typeTimeout = setTimeout(() => searchBooks(this.state.query), 1000)
    };

    render() {
        return(
            <div className="search-books-bar">
                <Link className="close-search" to="/" />
                <div className="search-books-input-warpper">
                    <input type="text" placeholder="Search by title or author" onChange={event => this.updateQuery(event.target.value)}/>
                </div>
            </div>
        );
    }
}

Search.propType = {
    searchBooks: PropTypes.func.isRequired,
}

export default Search;