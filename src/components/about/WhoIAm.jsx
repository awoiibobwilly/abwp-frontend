import { getAboutIcon } from "../../utils/aboutIcons";
import "../../styles/about/who-i-am.css";

function WhoIAm({ intro, items = [] }) {
  if (!intro && items.length === 0) return null;

  return (
    <section className="who-i-am section">
      <div className="container">
        {/* ==================================================
            SECTION HEADING
        ================================================== */}
        <div className="section-heading">
          {intro?.eyebrow && (
            <span className="section-eyebrow">
              {intro.eyebrow}
            </span>
          )}

          {intro?.title && (
            <h2>{intro.title}</h2>
          )}

          {intro?.intro && (
            <p>{intro.intro}</p>
          )}
        </div>

        {/* ==================================================
            WHO I AM GRID
        ================================================== */}
        <div className="who-i-am-grid">
          {items.map((item) => {
            const Icon = getAboutIcon(item.icon);

            return (
              <article
                key={item.id}
                className="who-i-am-card"
              >
                <div className="who-i-am-icon">
                  <Icon />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhoIAm;