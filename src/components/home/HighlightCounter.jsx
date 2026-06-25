import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function HighlightCounter({

  value,

  suffix,

}) {

  const [count, setCount] = useState(0);

  const {

    ref,

    inView,

  } = useInView({

    triggerOnce: true,

    threshold: 0.4,

  });

  useEffect(() => {

    if (!inView) return;

    const end = Number(value);

    const duration = 2000;

    const interval = 20;

    const steps = duration / interval;

    const increment = end / steps;

    let current = 0;

    const timer = setInterval(() => {

      current += increment;

      if (current >= end) {

        setCount(end);

        clearInterval(timer);

      } else {

        setCount(Math.floor(current));

      }

    }, interval);

    return () => clearInterval(timer);

  }, [inView, value]);

  return (

    <span ref={ref}>

      {count.toLocaleString()}

      {suffix}

    </span>

  );

}

export default HighlightCounter;