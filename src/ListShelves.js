import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class ListShelves extends Component {
  render() {
    const { books, changeShelf } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              title="Currently Reading"
              bookList={books.filter(
                book => book.shelf === "currentlyReading"
              )}
              changeShelf={changeShelf}
            />
            <Bookshelf
              title="Want to Read"
              bookList={books.filter(
                book => book.shelf === "wantToRead"
              )}
              changeShelf={changeShelf}
            />
            <Bookshelf
              title="Read"
              bookList={books.filter(
                book => book.shelf === "read"
              )}
              changeShelf={changeShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
          Add a book
          </Link>
        </div>
      </div>
    )
  }
}

export default ListShelves
