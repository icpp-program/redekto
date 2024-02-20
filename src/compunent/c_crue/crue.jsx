import { motion } from "framer-motion";
import { CrueOptionBox } from "./crueOptionBox";

export const Crue = () => {
  return (
    <motion.div
      variants={{
        offview: { opacity: 0, y: 20 },
        onview: {
          opacity: 1,
          y: 0,
          transition: { delay: 0.5, ease: "easeInOut" },
        },
      }}
      initial={"offview"}
      whileInView={"onview"}
      viewport={{ once: true }}
      className="crue-section"
    >
      <div className="crue-title">
        <h2>The crue</h2>
        <p>best person,best skill,best other...</p>
      </div>
      <div className="crue-option-box-wrap">
        <CrueOptionBox></CrueOptionBox>
      </div>
    </motion.div>
  );
};
