import designData from "../../data/design.json";
import DesignCard from "../DesignCard";
import { motion } from "framer-motion";
// import {
//   motion,
//   useScroll,
//   useSpring,
//   useTransform,
//   MotionValue,
// } from "framer-motion";

// function useParallax(value: MotionValue<number>, distance: number) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }
// function Image({ id }: { projectData.id }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 300);
// }

export default function DesignPortfolio() {
  return (
    <motion.div
      className="container"
      id="design"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="row">
        {designData.map((design) => (
          <DesignCard design={design} key={design.title} />
        ))}
      </div>
    </motion.div>
  );
}
