import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListShelves from './ListShelves'
import SearchBook from './SearchBook'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    query:"art",
    books:[]
  }

  componentDidMount() {
    BooksAPI.search(this.state.query)
    .then((books) => {
      this.setState({ books })
      console.log(this.state)
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={ListShelves}/>
        <Route path="/search" render={() => (
        (<SearchBook
          books={this.state.books}
        />)
        )}/>
      </div>
    )
  }
}

export default BooksApp
