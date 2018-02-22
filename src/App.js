import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListShelves from './ListShelves'
import SearchBook from './SearchBook'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={ListShelves}/>
        <Route path="/search" component={SearchBook}/>
      </div>
    )
  }
}

export default BooksApp
