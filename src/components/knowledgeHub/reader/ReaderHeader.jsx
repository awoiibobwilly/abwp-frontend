import { Link } from "react-router-dom";

import { ROUTES } from "../../../config/routes";

function ReaderHeader() {

    return (

        <header className="reader-header">

            <Link to={ROUTES.KNOWLEDGE_HUB}>

                ← Back to Knowledge Hub

            </Link>

            <span>

                Knowledge Hub / Research Contributions

            </span>

        </header>

    );

}

export default ReaderHeader;