import VideoCard from "./VideoCard";

import {
  videosData,
} from "../../data/knowledgeHub/videosData";

import "../../styles/knowledgeHub/videoLibrary.css";

function VideoLibrary() {

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
            tutorials, and presentations supporting
            research, leadership, healthcare, and innovation.

          </p>

        </div>


        <div className="video-grid">

          {videosData.map(

            (video, index) => (

              <VideoCard
                key={index}
                video={video}
              />

            )

          )}

        </div>

      </div>

    </section>

  );

}

export default VideoLibrary;