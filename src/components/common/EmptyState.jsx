import PropTypes from "prop-types";
import { FaInbox } from "react-icons/fa";

import "../../styles/common/emptyState.css";

function EmptyState({

    icon: Icon = FaInbox,

    title = "Nothing Here",

    message = "No data is currently available.",

}) {

    return (

        <div className="empty-state">

            <div className="empty-icon">

                <Icon />

            </div>

            <h3>

                {title}

            </h3>

            <p>

                {message}

            </p>

        </div>

    );

}

EmptyState.propTypes = {

    icon: PropTypes.elementType,

    title: PropTypes.string,

    message: PropTypes.string,

};

export default EmptyState;