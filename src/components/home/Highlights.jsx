import { useEffect, useState } from "react";

import { getHighlights } from "../../services/homeService";

import { iconMap } from "../../utils/iconMapper";

import "../../styles/home/highlights.css";


function Highlights() {

  const [highlights, setHighlights] = useState([]);

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchHighlights = async () => {

      try {

        const data = await getHighlights();

        setHighlights(data);

      }

      catch (error) {

        console.error(error);

      }

      finally {

        setLoading(false);

      }

    };

    fetchHighlights();

  }, []);


  if (loading) {

    return null;

  }


  return (

    <section className="highlights section">

      <div className="container">

      <div className="section-header">

        <h2 className="section-title">
          Highlights
        </h2>

        <p className="section-subtitle">
          A multidisciplinary professional committed to
          technology, healthcare, research, and impact.
        </p>

        </div>

        <div className="highlights-grid">

          {

            highlights.map((item) => {

              const Icon = iconMap[item.icon];

              return (

                <div
                className="highlight-card"
                key={item.id}
            >

                <div className="highlight-icon">

                    {Icon && <Icon />}

                </div>

    <h3>

        {item.value}

        {item.suffix}

    </h3>

    <span>

        {item.title}

    </span>

</div>

              );

            })

          }

        </div>

      </div>

    </section>

  );

}

export default Highlights;