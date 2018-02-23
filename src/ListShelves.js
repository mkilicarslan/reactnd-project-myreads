import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class ListShelves extends Component {

  state = {
    currentlyList: [],
    wantToList: [],
    readList: [],
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              title="Currently Reading"
              bookList={this.state.currentlyList}
            />
            <Bookshelf
              title="Want to Read"
              bookList={this.state.wantToList}
            />
            <Bookshelf
              title="Read"
              bookList={this.state.readList}
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
