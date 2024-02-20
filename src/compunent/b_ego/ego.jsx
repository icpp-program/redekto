import { EgoContact } from "./egoContact";
import { EgoQuote } from "./egoQuote";
import { motion } from "framer-motion";

export const Ego = () => {
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
      className="ego-section"
    >
      <h2>Pembimbing</h2>
      <div className="ego-body">
        <div className="ego-section-photo">
          <motion.div
            variants={{
              offview: { boxShadow: "0 0 0 0 rgb(0,0,0), 0 0 0 0 #e42f2f" },
              onview: {
                boxShadow:
                  "-17px -17px 0 0 rgb(0, 0, 0), -20px -20px 0 0 #e42f2f",
                transition: { delay: 0.8, ease: "easeInOut" },
              },
            }}
            initial={"offview"}
            whileInView={"onview"}
            viewport={{ once: true }}
            className="ego-photo"
          ></motion.div>
        </div>
        <div>
          <div className="ego-name">
            <h3>Ego Perdana Putra</h3>
            <h3>Guru Informatika</h3>
          </div>
          <EgoContact></EgoContact>
        </div>
      </div>
      <EgoQuote></EgoQuote>
    </motion.div>
  );
};
