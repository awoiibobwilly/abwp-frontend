import {
  FaUser,
  FaUniversity,
  FaCalendarAlt,
  FaBookOpen,
} from "react-icons/fa";

function ResearchMeta({ research }) {

  const metaItems = [

    {
      icon: <FaUser />,
      label: "Authors",
      value: research.authors,
    },

    {
      icon: <FaUniversity />,
      label: "Institution",
      value: research.institution,
    },

    {
      icon: <FaCalendarAlt />,
      label: "Year",
      value: research.year,
    },

    {
      icon: <FaBookOpen />,
      label: "Journal",
      value: research.journal || research.publisher,
    },

  ].filter(item => item.value);

  return (

    <div className="research-details">

      {

        metaItems.map((item) => (

          <div
            className="research-detail"
            key={item.label}
          >

            <div className="research-detail-label">

              <span className="research-detail-icon">

                {item.icon}

              </span>

              <span>

                {item.label}

              </span>

            </div>

            <div className="research-detail-value">

              {item.value}

            </div>

          </div>

        ))

      }

    </div>

  );

}

export default ResearchMeta;