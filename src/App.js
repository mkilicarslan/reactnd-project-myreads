import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListShelves from './ListShelves'
import SearchBook from './SearchBook'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    myBooks: [],
    searchedBooks:[],
    query: "",
    noSearchResult: false
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((myBooks) => {
      this.setState({ myBooks: myBooks })
    })
  }

  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
    .then(()=>{
      const booksAfterChange = this.state.myBooks.filter(
        item => item.id !== book.id
      )
      book.shelf = newShelf
      booksAfterChange.push(book)
      this.setState({ myBooks: booksAfterChange })
    })
  }

  updateQuery = (query) => {
    this.setState({
      query: query.replace(/ +/g, ' ')
    })

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

  render() {
    const { changeShelf, updateQuery } = this
    const { myBooks, searchedBooks, query, noSearchResult } = this.state
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListShelves
          books={myBooks}
          changeShelf={changeShelf}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBook
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
