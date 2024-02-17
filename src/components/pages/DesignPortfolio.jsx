import projectData from "../../data/projects.json";
import ProjectCard from "../ProjectCard";
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

export default function Homepage() {
  return (
    <motion.div className="container" id="portfolio"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity:0}}
    >
      <div className="row">
        {projectData.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </motion.div>
  );
}
