import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListShelves from './ListShelves'
import SearchBook from './SearchBook'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    myReads: [],
    searchedBooks:[],
    query: "",
    noSearchResult: false
  }

  // Get all books currently in a bookshelf
  componentDidMount() {
    BooksAPI.getAll()
    .then((myReads) => {
      this.setState({ myReads: myReads })
    })
  }

  // Update the query and escape multi-whitespaces
  updateQuery = (query) => {
    this.setState({
      query: query.replace(/ +/g, ' ')
    })

    // If there is a query, search on database. Display a message on error.
    if(query) {
      BooksAPI.search(query)
      .then((books) => {
        books.length > 0 ?
          this.setState({ searchedBooks: books, noSearchResult: false })
          :
          this.setState({ noSearchResult: true })
      })
    }
  }

  // Update the shelf and the ListShelves component
  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
    .then(()=>{
      const booksAfterChange = this.state.myReads.filter(
        item => item.id !== book.id
      )
      book.shelf = newShelf
      booksAfterChange.push(book)
      this.setState({ myReads: booksAfterChange })
    })
  }

  render() {
    const { changeShelf, updateQuery } = this
    const { myReads, searchedBooks, query, noSearchResult } = this.state
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListShelves
            books={myReads}
            changeShelf={changeShelf}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBook
            myReads={myReads}
            books={searchedBooks}
            query={query}
            noSearchResult={noSearchResult}
            changeShelf={changeShelf}
            updateQuery={updateQuery}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
