import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListShelves from './ListShelves'
import SearchBook from './SearchBook'
import './App.css'

class BooksApp extends Component {
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
