import PropTypes from "prop-types";
import SidebarCard from "./SidebarCard";

function SidebarAuthor({ author }) {

    if (!author) return null;

    return (

        <SidebarCard
            title="Author"
            icon="bi bi-person-circle"
        >

            <div className="sidebar-author">

                {author.photo && (

                    <img
                        src={author.photo}
                        alt={author.name}
                        className="sidebar-author-image"
                    />

                )}

                <h4>

                    {author.name}

                </h4>

                {author.role && (

                    <p>

                        {author.role}

                    </p>

                )}

                {author.organization && (

                    <p>

                        {author.organization}

                    </p>

                )}

            </div>

        </SidebarCard>

    );

}

SidebarAuthor.propTypes = {

    author: PropTypes.object,

};

export default SidebarAuthor;