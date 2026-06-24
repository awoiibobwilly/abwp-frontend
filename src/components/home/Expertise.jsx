import { useEffect, useState } from "react";

import { getExpertise } from "../../services/homeService";

import "../../styles/home/expertise.css";
import { iconMap } from "../../utils/iconMapper";


function Expertise() {

  const [expertise, setExpertise] = useState([]);

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchExpertise = async () => {

      try {

        const data = await getExpertise();

        setExpertise(data);

      }

      catch (error) {

        console.error(

          "Expertise Error:",

          error

        );

      }

      finally {

        setLoading(false);

      }

    };

    fetchExpertise();

  }, []);


  if (loading) {

    return null;

  }


  return (

    <section className="expertise">

      <div className="container">

        <div className="expertise-grid">

        {
            expertise.map((item) => {

              const Icon = iconMap[item.icon];

              return (

                <div
                  className="expertise-card"
                  key={item.id}
                >

                  <div className="expertise-icon">

                    {Icon && <Icon />}

                  </div>

                  <h3>

                    {item.title}

                  </h3>

                  <p>

                    {item.description}

                  </p>

                </div>

              );

            })
          }

        </div>

      </div>

    </section>

  );

}

export default Expertise;