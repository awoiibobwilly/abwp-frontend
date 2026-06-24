import { useEffect, useState } from "react";

import CountUpModule from "react-countup";

const CountUp = CountUpModule.default;

console.log(CountUp);

import { getStatistics } from "../../services/homeService";

import "../../styles/home/hero-stats.css";


function HeroStats() {

  const [stats, setStats] = useState([]);

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchStatistics = async () => {

      try {

        const data = await getStatistics();

        setStats(

          data

        );

      }

      catch (

        error

      ) {

        console.error(

          error

        );

      }

      finally {

        setLoading(

          false

        );

      }

    };


    fetchStatistics();

  }, []);


  if (

    loading

  ) {

    return null;

  }


  return (

    <div className="hero-stats">

      {

        stats.map(

          (

            stat

          ) => (

            <div

              className="hero-stat-card"

              key={stat.id}

            >

            <h3>
                <CountUp
                    start={0}
                    end={Number(stat.value)}
                    duration={2}
                />

                {stat.suffix}
            </h3>

              <span>

                {stat.title}

              </span>

            </div>

          )

        )

      }

    </div>

  );

}


export default HeroStats;