import { useEffect, useState } from "react";

import SectionHeader from "../common/SectionHeader";

import ExpertiseCard from "./ExpertiseCard";
import ExpertiseSkeleton from "./ExpertiseSkeleton";

import { getExpertise } from "../../services/expertiseService";

import "../../styles/home/expertise.css";

function Expertise() {

  // ==========================================
  // State
  // ==========================================

  const [expertise, setExpertise] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // ==========================================
  // Fetch Expertise
  // ==========================================

  useEffect(() => {

    const fetchExpertise = async () => {

      try {

        setLoading(true);

        setError("");

        const data = await getExpertise();

        setExpertise(data);

      }

      catch (err) {

        console.error(

          "Expertise Error:",

          err

        );

        setError(

          err?.detail ||

          "Unable to load expertise."

        );

      }

      finally {

        setLoading(false);

      }

    };

    fetchExpertise();

  }, []);

  // ==========================================
  // Component
  // ==========================================

  return (

    <section

      className="expertise section"

      id="expertise"

    >

      <div className="container">

        {/* ===================================
            Section Header
        ==================================== */}

        <SectionHeader

          eyebrow="Expertise"

          title="Areas of Expertise"

          description="A diverse toolkit spanning technical innovation, data analytics, healthcare, research and strategic execution."

        />

        {/* ===================================
            Loading
        ==================================== */}

        {

          loading && (

            <ExpertiseSkeleton />

          )

        }

        {/* ===================================
            Error
        ==================================== */}

        {

          !loading &&

          error && (

            <div className="expertise-message error">

              {error}

            </div>

          )

        }

        {/* ===================================
            Empty
        ==================================== */}

        {

          !loading &&

          !error &&

          expertise.length === 0 && (

            <div className="expertise-message">

              Expertise will appear here soon.

            </div>

          )

        }

        {/* ===================================
            Expertise Grid
        ==================================== */}

        {

          !loading &&

          !error &&

          expertise.length > 0 && (

            <div className="expertise-grid">

              {

                expertise.map((item) => (

                  <ExpertiseCard

                    key={item.id}

                    expertise={item}

                  />

                ))

              }

            </div>

          )

        }

      </div>

    </section>

  );

}

export default Expertise;