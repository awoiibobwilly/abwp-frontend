import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import conversationContent from "../../../config/conversationContent";

import "./UniversalCTA.css";

import {

    PAGE_KEYS,

} from "../../../config/portfolioConstants"; 

function UniversalCTA({

    page = PAGE_KEYS.HOME,

})

{



  /* ==========================================================
     LOAD PAGE STORY
  ========================================================== */

  const story =

    conversationContent[page] ||

    conversationContent.home;

  /* ==========================================================
     SECONDARY ACTION
  ========================================================== */

  const secondaryAction =

    story.actions.secondary;

  return (

    <section className="universal-cta section">

      <div className="container">

        <div className="universal-cta-wrapper">

          {/* ==================================================
              CONTENT
          ================================================== */}

          <div className="universal-cta-content">

            {/* ==================================================
                HEADER
            ================================================== */}

            <header className="universal-cta-header">

              <span className="universal-cta-eyebrow">

                {story.eyebrow}

              </span>

              <h2 className="universal-cta-title">

                {story.title}

              </h2>

              <p className="universal-cta-description">

                {story.description}

              </p>

            </header>

            {/* ==================================================
                TRUST BAR
            ================================================== */}

            {

              story.trustItems?.length > 0 && (

                <div className="universal-cta-trust">

                  {

                    story.trustItems.map(

                      (

                        item,

                        index

                      ) => (

                        <span

                          key={item}

                          className="universal-cta-trust-item"

                        >

                          {item}

                          {

                            index < story.trustItems.length - 1 && (

                              <span className="trust-divider">

                                •

                              </span>

                            )

                          }

                        </span>

                      )

                    )

                  }

                </div>

              )

            }

            {/* ==================================================
                ACTIONS
            ================================================== */}

            <nav

              className="universal-cta-actions"

              aria-label="Primary Call To Action"

            >

              {/* ==============================================
                  PRIMARY BUTTON
              ============================================== */}

              <Link

                to={story.actions.primary.to}

                className="btn btn-primary"

              >

                <span>

                  {story.actions.primary.label}

                </span>

                <FaArrowRight />

              </Link>

              {/* ==============================================
                  SECONDARY BUTTON
              ============================================== */}

              {

                secondaryAction.to ? (

                  <Link

                    to={secondaryAction.to}

                    className="btn btn-secondary"

                  >

                    <FaDownload />

                    <span>

                      {secondaryAction.label}

                    </span>

                  </Link>

                ) : (

                  <a

                    href={secondaryAction.href}

                    className="btn btn-secondary"

                    download

                  >

                    <FaDownload />

                    <span>

                      {secondaryAction.label}

                    </span>

                  </a>

                )

              }

            </nav>

            {/* ==================================================
                CLOSING NOTE
            ================================================== */}

            {

              story.closing && (

                <footer className="universal-cta-footer">

                  <p className="universal-cta-closing">

                    {story.closing}

                  </p>

                </footer>

              )

            }

          </div>

        </div>

      </div>

    </section>

  );

}

export default UniversalCTA;