import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBook extends Component {

  state = {
    query: "",
    books: []
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
