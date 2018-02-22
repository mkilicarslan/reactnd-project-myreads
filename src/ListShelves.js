import React, { Component } from 'react'
import Bookshelf from './Bookshelf'

class ListShelves extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf />
            <Bookshelf />
            <Bookshelf />
          </div>
        </div>
        <div className="open-search">
          <a>Add a book</a>
        </div>
      </div>
    )
  }
}

export default ListShelves
