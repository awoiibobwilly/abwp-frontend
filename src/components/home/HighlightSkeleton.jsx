import "../../styles/home/highlights.css";

function HighlightSkeleton() {

    return (

        <div className="highlights-grid">

            {

                Array.from({ length: 4 }).map((_, index) => (

                    <article
                        key={index}
                        className="highlight-card"
                    >

                        <div className="skeleton skeleton-highlight-icon"></div>

                        <div className="skeleton skeleton-highlight-value"></div>

                        <div className="skeleton skeleton-highlight-title"></div>

                    </article>

                ))

            }

        </div>

    );

}

export default HighlightSkeleton;