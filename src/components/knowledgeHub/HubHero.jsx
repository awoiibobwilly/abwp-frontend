import { FaSearch } from "react-icons/fa";

import useApiResource from "../../hooks/useApiResource";

import { getKnowledgeHub } from "../../services/knowledgeHubService";

import LoadingSpinner from "../common/LoadingSpinner";
import ErrorState from "../common/ErrorState";

import "../../styles/knowledgeHub/hubHero.css";

function HubHero() {

    const {

        data: hub,

        loading,

        error,

    } = useApiResource(getKnowledgeHub);

    if (loading) {

        return <LoadingSpinner />;

    }

    if (error) {

        return <ErrorState message={error} />;

    }

    return (

        <section className="hub-hero">

            <div className="container">

                <div className="hub-hero-content">

                    <span className="hub-badge">

                        {hub.eyebrow}

                    </span>

                    <h1>

                        {hub.title}

                    </h1>

                    <h2>

                        {hub.subtitle}

                    </h2>

                    <p>

                        {hub.description}

                    </p>

                    {/* Premium Search */}

                    <div className="hub-search-bar">

                        <FaSearch className="hub-search-icon" />

                        <input

                            type="text"

                            placeholder={hub.search_placeholder}

                        />

                    </div>

                    <div className="hub-buttons">

                        <a

                            href="#collections"

                            className="btn btn-primary"

                        >

                            Explore Collections

                        </a>

                        <a

                            href="/contact"

                            className="btn btn-outline"

                        >

                            Collaborate

                        </a>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default HubHero;