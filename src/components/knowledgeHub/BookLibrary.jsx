import BookCard from "./BookCard";

import {
  booksData,
} from "../../data/knowledgeHub/booksData";

import "../../styles/knowledgeHub/bookLibrary.css";

function BookLibrary() {

  return (

    <section className="book-library section">

      <div className="container">

        <div className="book-library-header">

          <span className="book-library-badge">

            Books & Literature

          </span>


          <h2 className="section-title">

            Explore the Library

          </h2>


          <p className="section-subtitle">

            Curated books and literature
            supporting leadership, healthcare,
            research, and lifelong learning.

          </p>

        </div>


        <div className="book-grid">

          {booksData.map(

            (book, index) => (

              <BookCard
                key={index}
                book={book}
              />

            )

          )}

        </div>

      </div>

    </section>

  );

}

export default BookLibrary;