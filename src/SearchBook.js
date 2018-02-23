import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBook extends Component {

  state = {
    query: "react"
  }

  updateQuery = (query) => {
    this.setState({
      query: query.trim()
    })
  }

  render() {

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
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.props.books.map(book => (
                  <li key={book.id}>
                    <Book
                      title={book.title}
                      authors={book.authors}
                      imageLink={book.imageLinks.smallThumbnail}
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
