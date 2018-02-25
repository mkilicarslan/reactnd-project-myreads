import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {

  state = {
    books:this.props.bookList
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.bookList.map( book =>
                <li key={book.id}>
                  <Book
                    book={book}
                  />
                </li>
              )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
