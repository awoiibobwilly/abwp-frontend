import { useEffect, useState } from "react";

import { getStatistics } from "../../services/statisticsService";

import "../../styles/home/hero-stats.css";

import { getIcon } from "../../utils/iconMapper";


function AnimatedNumber({

  value,

}) {

  const [count, setCount] = useState(0);

  useEffect(() => {

    const end = Number(value);

    const duration = 2000;

    const stepTime = 20;

    const increment = end / (duration / stepTime);

    let current = 0;

    const timer = setInterval(() => {

      current += increment;

      if (current >= end) {

        setCount(end);

        clearInterval(timer);

      }

      else {

        setCount(

          Math.floor(current)

        );

      }

    }, stepTime);

    return () => clearInterval(timer);

  }, [value]);

  return count.toLocaleString();

}


function HeroStats() {

  const [stats, setStats] = useState([]);

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchStatistics = async () => {

      try {

        const data = await getStatistics();

        setStats(data);

      }

      catch (error) {

        console.error(error);

      }

      finally {

        setLoading(false);

      }

    };

    fetchStatistics();

  }, []);


  if (loading) {

    return null;

  }


  return (

    <div className="hero-stats">

    {
      stats.map((stat) => {
        // 1. Get the icon before returning the JSX
        const Icon = getIcon(stat.icon);

        // 2. Explicitly return the JSX code
        return (
          <div
              className="hero-stat-card"
              key={stat.id}
          >

              <div className="hero-stat-icon">

                  <Icon />

              </div>

              <h3>

                  <AnimatedNumber
                      value={stat.value}
                  />

                  {stat.suffix}

              </h3>

              <span>

                  {stat.title}

              </span>

          </div>
        );
      })
    }

    </div>

  );

}

export default HeroStats;