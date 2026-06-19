import {
    FaPlayCircle,
    FaDownload,
  } from "react-icons/fa";
  
  function VideoCard({ video }) {
  
    return (
  
      <div className="video-card">
  
        <div className="video-thumbnail">
  
          <img
            src={video.thumbnail}
            alt={video.title}
          />
  
          <div className="video-play">
  
            <FaPlayCircle />
  
          </div>
  
        </div>
  
  
        <div className="video-content">
  
          <div className="video-meta">
  
            <span className="video-category">
  
              {video.category}
  
            </span>
  
            <span className="video-duration">
  
              {video.duration}
  
            </span>
  
          </div>
  
  
          <h3>
  
            {video.title}
  
          </h3>
  
  
          <p>
  
            {video.description}
  
          </p>
  
  
          <div className="video-actions">
  
            <a
              href={video.watchLink}
              className="video-btn"
            >
  
              <FaPlayCircle />
  
              <span>
  
                Watch
  
              </span>
  
            </a>
  
  
            <a
              href={video.downloadLink}
              className="video-btn"
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
  
  export default VideoCard;