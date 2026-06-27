import {useEffect,useRef,useState,} from "react";

import { getStatistics } from "../../services/statisticsService";

import "../../styles/home/hero-stats.css";

import { getIcon } from "../../utils/iconMapper";

import HeroStatsSkeleton from "./HeroStatsSkeleton";


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

          Math.round(current)

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

  const [error, setError] = useState("");

  const [visible, setVisible] = useState(false);

  const statsRef = useRef(null);


  useEffect(() => {

    const fetchStatistics = async () => {

      try {

        const data = await getStatistics();

        setStats(data);

      }

      catch (err) {

        console.error(err);
    
        setError(
    
            err?.detail ||
    
            "Unable to load statistics."
    
        );
    
    }

      finally {

        setLoading(false);

      }

    };

    fetchStatistics();

  }, []);

  useEffect(() => {

    const observer = new IntersectionObserver(
  
      ([entry]) => {
  
        if (entry.isIntersecting) {
  
          setVisible(true);
  
          observer.disconnect();
  
        }
  
      },
  
      {
  
        threshold: 0.25,
  
      }
  
    );
  
    if (statsRef.current) {
  
      observer.observe(statsRef.current);
  
    }
  
    return () => observer.disconnect();
  
  }, []);


  if (loading) {

    return <HeroStatsSkeleton />;

}

if (error) {

  return (

      <div className="hero-stats-error">

          {error}

      </div>

  );

}

if (!stats.length) {

  return (

      <div className="hero-stats-empty">

          Statistics coming soon.

      </div>

  );

}


  return (

    <div className="hero-stats" ref={statsRef}>

        {
          // 1. Added 'index' here to keep track of each item's position
          stats.map((stat, index) => {
            
            // 2. Get the icon before returning the JSX
            const Icon = getIcon(stat.icon);

            // 3. Explicitly return the JSX code
            return (
              <div
                className="hero-stat-card"
                key={stat.id}
                // 4. Added your staggered animation delay here
                style={{
                  animationDelay: `${index * 120}ms`
                }}
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