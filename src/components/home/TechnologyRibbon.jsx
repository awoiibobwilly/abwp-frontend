import { useEffect, useState } from "react";

import {
  getTechnologies,
} from "../../services/technologyService";

import TechnologyBadge from "./TechnologyBadge";
import TechnologyRibbonSkeleton from "./TechnologyRibbonSkeleton";

import "../../styles/home/technology-ribbon.css";

function TechnologyRibbon() {

  const [technologies, setTechnologies] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    const fetchTechnologies = async () => {

      try {

        const data = await getTechnologies();

        setTechnologies(data);

      }

      catch (err) {

        console.error(err);

        setError(

          err?.detail ||

          "Unable to load technologies."

        );

      }

      finally {

        setLoading(false);

      }

    };

    fetchTechnologies();

  }, []);

  if (loading) {

    return <TechnologyRibbonSkeleton />;

  }

  if (error) {

    return (

      <section className="technology-ribbon">

        <div className="technology-ribbon-error">

          {error}

        </div>

      </section>

    );

  }

  if (!technologies.length) {

    return (

      <section className="technology-ribbon">

        <div className="technology-ribbon-empty">

          Technologies coming soon.

        </div>

      </section>

    );

  }

  return (

    <section className="technology-ribbon">

      <div className="technology-ribbon-header">

        <h3>

          Technologies I Use

        </h3>

        <p>

          Modern tools and frameworks used to build
          scalable, secure, and user-focused digital
          solutions.

        </p>

      </div>

      <div className="technology-ribbon-grid">

        {

          technologies.map(

            (technology) => (

              <TechnologyBadge

                key={technology.id}

                technology={technology}

              />

            )

          )

        }

      </div>

    </section>

  );

}

export default TechnologyRibbon;