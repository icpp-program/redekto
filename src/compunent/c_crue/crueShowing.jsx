import { motion } from "framer-motion";
import { useState, useRef } from "react";

export const CrueShowing = ({ item, state }) => {
  return (
    <div className="crue-box-showing">
      <div className="crue-photo"></div>
      <div className="crue-desc">
        <h3>Name</h3>
        <motion.div
          variants={{
            offview: { opacity: 0, y: -5 },
            onview: {
              opacity: 1,
              y: 0,
              transition: { delay: 1, ease: "easeInOut" },
            },
          }}
          initial={"offview"}
          whileInView={"onview"}
          viewport={{ once: true }}
        >
          <motion.p
            variants={{ onganti: { opacity: 0 }, offganti: { opacity: 1 } }}
            animate={state ? "onganti" : "offganti"}
          >
            {item ? item.nama : "~blank~"}
          </motion.p>
        </motion.div>
        <h3>Quote</h3>
        <motion.div
          variants={{
            offview: { opacity: 0, y: -5 },
            onview: {
              opacity: 1,
              y: 0,
              transition: { delay: 1.5, ease: "easeInOut" },
            },
          }}
          initial={"offview"}
          whileInView={"onview"}
          viewport={{ once: true }}
        >
          <motion.p
            variants={{ onganti: { opacity: 0 }, offganti: { opacity: 1 } }}
            animate={state ? "onganti" : "offganti"}
          >
            {item ? item.quote : "~blank~"}
          </motion.p>
        </motion.div>
        <h3>Skill</h3>
        <motion.div
          variants={{
            offview: { opacity: 0, y: -5 },
            onview: {
              opacity: 1,
              y: 0,
              transition: { delay: 2, ease: "easeInOut" },
            },
          }}
          initial={"offview"}
          whileInView={"onview"}
          viewport={{ once: true }}
        >
          <motion.ul
            variants={{ onganti: { opacity: 0 }, offganti: { opacity: 1 } }}
            animate={state ? "onganti" : "offganti"}
          >
            {item ? (
              item.skill.map((item, i) => <li key={i}>{item}</li>)
            ) : (
              <li>~blank~</li>
            )}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};
