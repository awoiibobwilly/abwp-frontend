import {

  FaPlayCircle,
  FaExternalLinkAlt,

} from "react-icons/fa";

import { PLATFORMS } from "../../config/platforms";

import { formatDate } from "../../utils/dateFormatter";

function VideoCard({ video }) {

  const platform =
      PLATFORMS[video.platform] || {};

  const PlatformIcon =
      platform.icon;

  return (

      <article className="video-card">

          <div className="video-thumbnail">

              {video.thumbnail ? (

              <img
              src={video.thumbnail}
              alt={video.title}
              loading="lazy"
              onError={(e) => {

                  e.target.src = "/images/placeholders/video-placeholder.webp";

              }}
              />

              ) : (

                  <div className="video-placeholder">

                      <FaPlayCircle />

                  </div>

              )}

              <div className="video-play">

                  <FaPlayCircle />

              </div>

          </div>

          <div className="video-content">

              <div className="video-meta">

                  <span className="video-platform">

                      {PlatformIcon && <PlatformIcon />}

                      {platform.label || video.platform}

                  </span>

                  <span className="video-duration">

                      {video.duration_minutes} min

                  </span>

                  <span className="video-date">

                      {formatDate(video.published_at)}

                  </span>

              </div>

              <h3 className="video-title">

                  {video.title}

              </h3>

              <p className="video-presenter">

                  {video.presenter}

              </p>

              <p className="video-summary">

                  {video.summary}

              </p>

              <a

                  href={video.video_url}

                  target="_blank"

                  rel="noopener noreferrer"

                  className="video-watch"

              >

                  <FaExternalLinkAlt />

                  <span>

                      Watch Video

                  </span>

              </a>

          </div>

      </article>

  );

}

export default VideoCard;