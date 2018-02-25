import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBook extends Component {

  state = {
    query: "",
    books: [],
  }

  updateQuery = (query) => {
    this.setState({
      query: query.trim()
    })

    if(query) {
      BooksAPI.search(query)
      .then((books) => {
        if (books.length > 0) {
          this.setState({ books })
        }
      })
    }
  }

  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
    .then(()=>{
      const updatedBooks = this.state.books.filter(
        item => item.id !== book.id
      )
      this.setState({ books: updatedBooks })
    })
  }


  render() {
    const { query, books } = this.state
    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              to="/"
              className="close-search"
              >Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {query && books.map(book => (
                  <li key={book.id}>
                    <Book
                      book={book}
                      changeShelf={this.changeShelf}
                    />
                  </li>
              ))}
            </ol>
          </div>
        </div>
    )
  }
}

export default SearchBook
