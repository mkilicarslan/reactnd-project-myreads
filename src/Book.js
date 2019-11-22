import React, { Component } from "react";
import BookshelfChanger from "./BookshelfChanger";

class Book extends Component {
  render() {
    const { myReads, book, changeShelf } = this.props;
    const defaultImg = book.imageLinks ? book.imageLinks.smallThumbnail : "";
    const defaultAuthor = book.authors ? book.authors : "not found";
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${defaultImg})`
            }}
          ></div>
          <BookshelfChanger
            myReads={myReads}
            book={book}
            changeShelf={changeShelf}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{defaultAuthor}</div>
      </div>
    );
  }
}

export default Book;
