import React, { Component } from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import { Link } from "react-router-dom";
import { Route } from "react-router-dom"
import BookShelf from './BookShelf'
import BookGrid from './BookGrid'
import Search from './Search'

class App extends Component {
  state = {
    books: [],
    searchResults: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({books}));
  };

  onChangeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    book.shelf = shelf;
    this.setState(prevState => ({ bookList: prevState.bookList.filter(b => b !== book ).concat(book) }));
  };

  searchBooks = async query => {
    const bookSearch = await BooksAPI.search(query);

    if (bookSearch !== undefined && !bookSearch.hasOwnProperty("error")) {
      this.setState({ searchResults: bookSearch });
    } 
    
    if (query === null || bookSearch === undefined || bookSearch.hasOwnProperty("error")) {
      this.setState({ searchResults:[] });
    }
  };

  render() {
    const { books, searchResults } = this.state;    

    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <BookShelf books={books} onChangeShelf={this.onChangeShelf}/>
              <div className="open-search">
                <Link to="/search" />
              </div>
            </div>
          )} />
        <Route
          path="/search"
          render={() => (
            <div className="search-books">
              <Search searchBooks={this.searchBooks}/>
              <BookGrid books={books} searchResults={searchResults} onChangeShelf={this.onChangeShelf} />
            </div>
          )} />
      </div>
    );
  }
}

export default App;
