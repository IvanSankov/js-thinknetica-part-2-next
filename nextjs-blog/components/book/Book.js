import React from "react";

import AuthorList from "./AuthorList"
import BookInfo from "./BookInfo";
import ContactForm from "../forms/contact/ContactForm";
import SimilarBookList from "./SimilarBookList";

const MIN_SUBSCRIBERS_FOR_POPULARITY = 100;

function Book({ book }) {

  const popular = book.subscribers > MIN_SUBSCRIBERS_FOR_POPULARITY
    && <span className="badge badge-primary">Popular</span>;

  return (
    <>
      <div className="row bg-light">
        <div className="col-sm-7">
          <div className="row">
            <div className="col-sm-12">
              <h3>Book {popular}</h3>
              <BookInfo book={book}/>
            </div>
            <div className="mt-3 col-sm-12 border">
              <SimilarBookList book={book} />
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <h3>Authors</h3>
          <AuthorList authors={book.authors}/>
        </div>
        <div className="col-sm-12">
          <ContactForm/>
        </div>
      </div>
    </>
  );
}

export default Book;