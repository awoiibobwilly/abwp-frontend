import { useMemo, useState } from "react";

import PracticalResourceCard from "./PracticalResourceCard";
import ResourceFilters from "./ResourceFilters";

import useApiResource from "../../hooks/useApiResource";

import {
    getPracticalResources,
} from "../../services/knowledgeHubService";

import LoadingSpinner from "../common/LoadingSpinner";
import ErrorState from "../common/ErrorState";
import EmptyState from "../common/EmptyState";

import "../../styles/knowledgeHub/resourceDirectory.css";

function PracticalResources() {

    const {
        data: resources = [],
        loading,
        error,
    } = useApiResource(
        getPracticalResources,
        {
            initialData: [],
        }
    );

    const [activeFilter, setActiveFilter] = useState("All");

    const resourceTypes = useMemo(() => {

        const unique = new Map();

        resources.forEach((resource) => {

            unique.set(resource.resource_type, {

                value: resource.resource_type,

                label: resource.resource_type_display,

            });

        });

        return [

            {

                value: "All",

                label: "All",

            },

            ...unique.values(),

        ];

    }, [resources]);

    const filteredResources = useMemo(() => {

        if (activeFilter === "All") {

            return resources;

        }

        return resources.filter(

            resource =>

                resource.resource_type === activeFilter

        );

    }, [resources, activeFilter]);

    if (loading) {

        return <LoadingSpinner />;

    }

    if (error) {

        return <ErrorState message={error} />;

    }

    return (

        <section className="resource-directory section">

            <div className="container">

                {/* ======================================
                    SECTION HEADER
                ======================================= */}

                <header className="resource-directory-header">

                    <span className="resource-directory-badge">

                        <i className="bi bi-journal-richtext"></i>

                        Practical Resources

                    </span>

                    <h2 className="resource-directory-title">

                        Tools, Templates & Professional Resources

                    </h2>

                    <p className="resource-directory-description">

                        Access carefully curated templates, checklists,
                        frameworks, datasets, policies, calculators,
                        toolkits and trusted platforms supporting
                        healthcare, research, public health, data science,
                        artificial intelligence and software engineering.

                    </p>

                    <div className="resource-stats">

                        <div className="resource-stat">

                            <strong>{resources.length}</strong>

                            <span>Resources</span>

                        </div>

                        <div className="resource-stat">

                            <strong>{resourceTypes.length - 1}</strong>

                            <span>Categories</span>

                        </div>

                    </div>

                </header>

                {/* ======================================
                    FILTERS
                ======================================= */}

                <ResourceFilters

                    filters={resourceTypes}

                    activeFilter={activeFilter}

                    onFilterChange={setActiveFilter}

                />

                {/* ======================================
                    GRID
                ======================================= */}

                {filteredResources.length === 0 ? (

                    <EmptyState

                        title="No Resources Found"

                        message="No practical resources match the selected category."

                    />

                ) : (

                    <div className="resource-directory-grid">

                        {filteredResources.map((resource) => (

                            <PracticalResourceCard

                                key={resource.id}

                                resource={resource}

                            />

                        ))}

                    </div>

                )}

            </div>

        </section>

    );

}

export default PracticalResources;