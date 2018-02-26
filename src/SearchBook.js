import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBook extends Component {
  render() {
    const { myReads, books, query, updateQuery, noSearchResult, changeShelf } = this.props
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
                onChange={(event) => updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            {/* Display a message if there is no result */}
            {noSearchResult && query.length !== 0 &&
              <div>There is no result. Please try again</div>
            }
            <ol className="books-grid">
              {!noSearchResult && query && books.map(book => (
                  <li key={book.id}>
                    <Book
                      myReads={myReads}
                      book={book}
                      changeShelf={changeShelf}
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
