import {
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
            className="collection-card"
            style={{
                borderTop: `4px solid ${theme.accent_color}`,
            }}
        >

            <div
                className="collection-icon"
                style={{
                    color: theme.accent_color,
                }}
            >

                <Icon />

            </div>

            <h3>

                {theme.title}

            </h3>

            <p>

                {theme.short_description}

            </p>

        </article>

    );

}

export default ThemeCard;