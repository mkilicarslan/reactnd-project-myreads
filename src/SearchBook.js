import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBook extends Component {

  state = {
    query: "",
    books: [],
    noSearchResult: false
  }

  updateQuery = (query) => {
    this.setState({
      query: query.trim()
    })

    if(query) {
      BooksAPI.search(query)
      .then((books) => {
        this.setState({ noSearchResult: true })
        if (books.length > 0) {
          this.setState({ books, noSearchResult: false })
        }
      })
    }
  }

  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
  }


  render() {
    const { query, books, noSearchResult } = this.state
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
            {noSearchResult && query.length !== 0 &&
              <div>There is no result. Please try again</div>
            }
            <ol className="books-grid">
              {!noSearchResult && query && books.map(book => (
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
