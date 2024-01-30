import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.div
      className="col-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Hi! I'm Taylor</h1>
      <img src="/taytayswirl.svg" width="300"></img>
      <h2>
        I'm a New York City based full stack web developer with a background in
        visual studies, graphic design, set design, and all things creative.{" "}
      </h2>
      <h4>
        {" "}
        As a self-proclaimed lifelong student, I focus on movement, growth, &
        adaptation in every aspect of life & work 🌳{" "}
      </h4>
    </motion.div>
  );
}
