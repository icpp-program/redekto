import { motion } from "framer-motion";

export const BalihoIc = () => {
  return (
    <motion.div
      variants={{
        offview: { opacity: 0, y: 20 },
        onview: {
          opacity: 1,
          y: 0,
          transition: { delay: 1, ease: "easeInOut" },
        },
      }}
      initial={"offview"}
      whileInView={"onview"}
      viewport={{ once: true }}
      className="balihoIc-body"
    >
      <motion.div
        animate={{
          boxShadow: [
            "0 0 50px #00ffff",
            "0 0 100px #00ffff",
            "0 0 50px #00ffff",
          ],
        }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="balihoIc"
      >
        <h2>MAN IC PADPAR</h2>
      </motion.div>
      {/* <motion.div className="balihoIc-hole"></motion.div> */}
    </motion.div>
  );
};
