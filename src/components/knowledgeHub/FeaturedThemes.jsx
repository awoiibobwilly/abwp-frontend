import ThemeCard from "./ThemeCard";

import useApiResource from "../../hooks/useApiResource";

import { getThemes } from "../../services/knowledgeHubService";

import LoadingSpinner from "../common/LoadingSpinner";
import ErrorState from "../common/ErrorState";

import "../../styles/knowledgeHub/featuredThemes.css";

function FeaturedThemes() {

    const {

        data: themes = [],

        loading,

        error,

    } = useApiResource(getThemes, []);

    if (loading) {

        return <LoadingSpinner />;

    }

    if (error) {

        return <ErrorState message={error} />;

    }

    return (

        <section
            className="featured-collections section"
            id="themes"
        >

            <div className="container">

                <div className="collections-header">

                    <span className="collections-badge">

                        Knowledge Themes

                    </span>

                    <h2 className="section-title">

                        Explore Knowledge by Theme

                    </h2>

                    <p className="section-subtitle">

                        Curated themes bringing together resources,
                        research, practical tools, and learning materials
                        across multidisciplinary domains.

                    </p>

                </div>

                <div className="collections-grid">

                    {themes.map((theme) => (

                        <ThemeCard
                            key={theme.id}
                            theme={theme}
                        />

                    ))}

                </div>

            </div>

        </section>

    );

}

export default FeaturedThemes;