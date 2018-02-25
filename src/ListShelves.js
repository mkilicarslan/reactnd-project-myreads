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

  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
    .then(()=>{
      const updatedBooks = this.state.books.filter(
        item => item.id !== book.id
      )
      book.shelf = newShelf // ??
      updatedBooks.push(book)
      this.setState({ books: updatedBooks })
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
              changeShelf={this.changeShelf}
            />
            <Bookshelf
              title="Want to Read"
              bookList={books.filter(
                book => book.shelf === "wantToRead"
              )}
              changeShelf={this.changeShelf}
            />
            <Bookshelf
              title="Read"
              bookList={books.filter(
                book => book.shelf === "read"
              )}
              changeShelf={this.changeShelf}
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
