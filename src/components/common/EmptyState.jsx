import { FaInbox } from "react-icons/fa";

import "../../styles/common/emptyState.css";

function EmptyState({

    icon: Icon = FaInbox,

    title,

    message,

}) {

    return (

        <div className="empty-state">

            <div className="empty-icon">

                <Icon />

            </div>

            <h3>{title}</h3>

            <p>{message}</p>

        </div>

    );

}

export default EmptyState;