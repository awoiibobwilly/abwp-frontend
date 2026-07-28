import {
  FaBookOpen,
  FaDownload,
  FaExternalLinkAlt,
  FaClock,
} from "react-icons/fa";

function BookCard({ book }) {

  return (

      <article className="book-card">

          <div className="book-image">

          {book.cover_image ? (

              <img
                  src={book.cover_image}
                  alt={book.title}
                  loading="lazy"
              />

          ) : (

              <div className="book-placeholder">

                  <FaBookOpen />

                  <span>

                      {book.resource_type}

                  </span>

              </div>

          )}

          </div>

          <div className="book-content">

              <span className="book-category">

                  {book.resource_type}

              </span>

              <h3>

                  {book.title}

              </h3>

              <h4>

                  {book.author}

              </h4>

              <p>

                  {book.summary}

              </p>

              <div className="book-meta">

                  <FaClock />

                  <span>

                      {book.estimated_read_time} min read

                  </span>

              </div>

              <div className="book-actions">

                  {book.external_url && (

                      <a
                          href={book.external_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="book-btn"
                      >

                          <FaExternalLinkAlt />

                          <span>

                              Read

                          </span>

                      </a>

                  )}

                  {book.resource_file && (

                      <a
                          href={book.resource_file}
                          className="book-btn"
                      >

                          <FaDownload />

                          <span>

                              Download

                          </span>

                      </a>

                  )}

              </div>

          </div>

      </article>

  );

}

export default BookCard;