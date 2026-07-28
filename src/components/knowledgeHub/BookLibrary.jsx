import BookCard from "./BookCard";

import useApiResource from "../../hooks/useApiResource";

import { getLibraryResources } from "../../services/knowledgeHubService";

import LoadingSpinner from "../common/LoadingSpinner";
import ErrorState from "../common/ErrorState";

import "../../styles/knowledgeHub/bookLibrary.css";

function BookLibrary() {

    const {

        data: books = [],

        loading,

        error,

    } = useApiResource(

        getLibraryResources,

        []

    );

    if (loading) {

        return <LoadingSpinner />;

    }

    if (error) {

        return <ErrorState message={error} />;

    }

    return (

        <section className="book-library section">

            <div className="container">

                <div className="book-library-header">

                    <span className="book-library-badge">

                        Knowledge Library

                    </span>

                    <h2 className="section-title">

                        Explore the Library

                    </h2>

                    <p className="section-subtitle">

                        Curated books, frameworks, reports and professional
                        resources supporting healthcare, technology,
                        leadership and lifelong learning.

                    </p>

                </div>

                <div className="book-grid">

                    {books.map((book) => (

                        <BookCard
                            key={book.id}
                            book={book}
                        />

                    ))}

                </div>

            </div>

        </section>

    );

}

export default BookLibrary;