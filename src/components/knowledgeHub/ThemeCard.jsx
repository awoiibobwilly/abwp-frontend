import { Link } from "react-router-dom";

import {
    FaArrowRight,
    FaHeartbeat,
    FaGlobeAfrica,
    FaLaptopMedical,
    FaFlask,
    FaCode,
    FaChartLine,
    FaBrain,
    FaUsers,
    FaClipboardCheck,
    FaRocket,
    FaFolderOpen,
} from "react-icons/fa";

import "../../styles/knowledgeHub/themeCard.css";

/* ==========================================
   ICON MAP
========================================== */

const ICONS = {
    FaHeartbeat,
    FaGlobeAfrica,
    FaLaptopMedical,
    FaFlask,
    FaCode,
    FaChartLine,
    FaBrain,
    FaUsers,
    FaClipboardCheck,
    FaRocket,
};

/* ==========================================
   THEME CARD
========================================== */

function ThemeCard({ theme }) {

    const Icon = ICONS[theme.icon] || FaFolderOpen;

    return (

        <article
            className="theme-card"
            style={{
                "--theme-color": theme.accent_color,
            }}
        >

            <div className="theme-header">

                <div className="theme-icon">

                    <Icon />

                </div>

            </div>

            <div className="theme-body">

                <h3>

                    {theme.title}

                </h3>

                <p>

                    {theme.short_description}

                </p>

            </div>

            <div className="theme-footer">

                <Link
                    to={`/knowledge-hub/themes/${theme.slug}`}
                    className="theme-link"
                >

                    <span>

                        Explore Theme

                    </span>

                    <FaArrowRight />

                </Link>

            </div>

        </article>

    );

}

export default ThemeCard;