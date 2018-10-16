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

  async componentDidMount() {
    const data = await BooksAPI.getAll().then(books => books);
    this.setState({books: data});
  };

  onChangeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      let books = this.state.books;

      if (shelf === "") { // Unsetting book from the shelf
          books = books.filter(b => {
              return b.id !== book.id;
          });
      } else if (books.filter(b => b.id === book.id).length === 0) { // Setting a new book to shelf
          books.push({
              ...book,
              shelf
          });
      } else { // Updating a book's shelf
          books = books.map(b => {
              if (b.id === book.id) {
                  b.shelf = shelf;
              }
              return b;
          });
      }

      this.setState({books, loading: false});
  });
  };

  searchBooks = async query => {
    const bookSearch = await BooksAPI.search(query).then(books => books);

    if (bookSearch !== undefined && !bookSearch.hasOwnProperty("error")) {
      this.setState({ searchResults: bookSearch });
    } 
    
    if (query === "" || bookSearch === undefined || bookSearch.hasOwnProperty("error")) {
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
