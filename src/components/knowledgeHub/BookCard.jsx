import {
    FaBookOpen,
    FaDownload,
  } from "react-icons/fa";
  
  function BookCard({ book }) {
  
    return (
  
      <div className="book-card">
  
        <div className="book-image">
  
          <img
            src={book.image}
            alt={book.title}
          />
  
        </div>
  
  
        <div className="book-content">
  
          <span className="book-category">
  
            {book.category}
  
          </span>
  
  
          <h3>
  
            {book.title}
  
          </h3>
  
  
          <h4>
  
            {book.author}
  
          </h4>
  
  
          <p>
  
            {book.description}
  
          </p>
  
  
          <div className="book-actions">
  
            <a
              href={book.readLink}
              className="book-btn"
            >
  
              <FaBookOpen />
  
              <span>
  
                Read
  
              </span>
  
            </a>
  
  
            <a
              href={book.downloadLink}
              className="book-btn"
            >
  
              <FaDownload />
  
              <span>
  
                Download
  
              </span>
  
            </a>
  
          </div>
  
        </div>
  
      </div>
  
    );
  
  }
  
  export default BookCard;