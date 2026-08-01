import VideoCard from "../VideoCard";

import useApiResource from "../../../hooks/useApiResource";

import { getLearningVideos } from "../../../services/knowledgeHubService";

import LoadingSpinner from "../../common/LoadingSpinner";
import ErrorState from "../../common/ErrorState";


import "../../../styles/knowledgeHub/videoLibrary.css"


import EmptyState from "../../common/EmptyState";

function VideoLibrary() {

    const {

        data: videos = [],

        loading,

        error,

    } = useApiResource(
        getLearningVideos,
        []
    );

    if (loading) {

        return <LoadingSpinner />;

    }

    if (error) {

        return <ErrorState message={error} />;

    }

    return (

        <section className="video-library section">

            <div className="container">

                <div className="video-library-header">

                    <span className="video-library-badge">

                        Video Library

                    </span>

                    <h2 className="section-title">

                        Watch and Learn

                    </h2>

                    <p className="section-subtitle">

                        Explore curated educational videos,
                        tutorials, webinars, and presentations
                        supporting healthcare, research,
                        leadership, and technology.

                    </p>

                </div>

                {videos.length === 0 ? (

                <EmptyState
                    title="No learning videos available"
                    message="Educational videos will appear here as they are added."
                />

                ) : (

                <div className="video-grid">

                    {videos.map(video => (

                        <VideoCard
                            key={video.id}
                            video={video}
                        />

                    ))}

                </div>

                )}

            </div>

        </section>

    );

}

export default VideoLibrary;