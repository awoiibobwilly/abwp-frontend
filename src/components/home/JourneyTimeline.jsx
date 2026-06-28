import { motion } from "framer-motion";

import JourneyCard from "./JourneyCard";

function JourneyTimeline({

  journey,

}) {

  return (

    <div className="journey-timeline">

      {

        journey.map(

          (

            item,

            index,

          ) => (

            <motion.div

              key={item.id}

              initial={{

                opacity: 0,

                x:

                  index % 2 === 0

                    ? -40

                    : 40,

              }}

              whileInView={{

                opacity: 1,

                x: 0,

              }}

              viewport={{

                once: true,

              }}

              transition={{

                duration: 0.5,

                delay: index * 0.12,

              }}

            >

              <JourneyCard

                journey={item}

              />

            </motion.div>

          )

        )

      }

    </div>

  );

}

export default JourneyTimeline;