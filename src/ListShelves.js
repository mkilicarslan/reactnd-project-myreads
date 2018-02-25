import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class ListShelves extends Component {

  state = {
    books:[],
  }

  componentWillMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({ books })
    })
  }


  render() {
    const { books } = this.state
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
            />
            <Bookshelf
              title="Want to Read"
              bookList={books.filter(
                book => book.shelf === "wantToRead"
              )}
            />
            <Bookshelf
              title="Read"
              bookList={books.filter(
                book => book.shelf === "read"
              )}
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
