import { Head_decor } from "./decorate";
import { BalihoIc } from "./balihoIc";

import { motion } from "framer-motion";

export const Head = () => {
  return (
    <>
      <div className="head">
        <Head_decor></Head_decor>
        <motion.div
          variants={{
            offview: { opacity: 0, y: 20 },
            onview: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, ease: "easeInOut" },
            },
          }}
          initial={"offview"}
          whileInView={"onview"}
          viewport={{ once: true }}
          className="logo"
        ></motion.div>
        <div className="logo-desc">
          <motion.h1
            variants={{
              offview: { opacity: 0, y: 10 },
              onview: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, ease: "easeInOut" },
              },
            }}
            initial={"offview"}
            whileInView={"onview"}
            viewport={{ once: true }}
          >
            Redekto
          </motion.h1>
          <motion.h3
            variants={{
              offview: { opacity: 0, y: 10 },
              onview: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, ease: "easeInOut" },
              },
            }}
            initial={"offview"}
            whileInView={"onview"}
            viewport={{ once: true }}
          >
            red is our spirit
          </motion.h3>
          <motion.h3
            variants={{
              offview: { opacity: 0, y: 10 },
              onview: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, ease: "easeInOut" },
              },
            }}
            initial={"offview"}
            whileInView={"onview"}
            viewport={{ once: true }}
          >
            elektro is our speed
          </motion.h3>
        </div>
      </div>
      <BalihoIc></BalihoIc>
    </>
  );
};
