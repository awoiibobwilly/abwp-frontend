import { useEffect, useState } from "react";

import SectionHeader from "../common/SectionHeader";

import ExpertiseCard from "./ExpertiseCard";
import ExpertiseSkeleton from "./ExpertiseSkeleton";

import { getExpertise } from "../../services/expertiseService";

import "../../styles/home/expertise.css";

import SectionMessage from "../common/SectionMessage";

import useApiResource from "../../hooks/useApiResource";

function Expertise() {

  // ==========================================
  // State
  // ==========================================

  const {

    data: expertise,

    loading,

    error,

} = useApiResource(

    getExpertise

);

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

            <SectionMessage

              type="error"

              message={error}

            />

          )

        }

        {/* ===================================
            Empty
        ==================================== */}

        {

          !loading &&

          !error &&

          expertise.length === 0 && (

            <SectionMessage

              type="empty"

              message="Expertise will appear here soon."

            />

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