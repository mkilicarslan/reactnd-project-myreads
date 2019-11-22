import React, { Component } from "react";

class BookshelfChanger extends Component {
  render() {
    const { myReads, book, changeShelf } = this.props;

    // In SearchBook component, add checkmark to book if it is belong to any shelf
    if (!book.shelf) {
      for (let myRead of myReads) {
        if (myRead.id === book.id) {
          book.shelf = myRead.shelf;
          break;
        }
      }
    }

    return (
      <div className="book-shelf-changer">
        <select
          value={book.shelf || "none"}
          onChange={event => changeShelf(book, event.target.value)}
        >
          <option disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookshelfChanger;
