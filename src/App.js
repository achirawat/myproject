import React, { Component } from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import { Route } from "react-router-dom"
import BookShelf from './BookShelf'

class App extends Component {
  state = {
    books: [],
    searchResults: [],
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => this.setState({ books }));
  };

  onChangeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    this.setState({ book: book.shelf = shelf });
  }

  searchBooks = query => {
    const books = BooksAPI.search(query).then(books => books);

    if (books !== undefined) {
      this.setState({ searchResults: books });
    } 
    else if (query == "" || books == undefined) {
      this.setState({ searchResults:[] });
    }
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <BookShelf books={books} onChangeShelf={this.onChangeShelf}/>
            </div>
          )} />
        <Route
          path="/search"
          render={() => (
            <div className="search-books">
              {/* <Search books={books} onChangeShelf={this.onChangeShelf}/> */}
            </div>
          )} />
      </div>
    );
  }
}

export default App;
