import massageIcon from "./ego_source/message-square .svg";

import { motion } from "framer-motion";

export const EgoQuote = () => {
  return (
    <motion.div
      variants={{
        offview: { height: 0 },
        onview: {
          height: "auto",
          transition: { delay: 0.5, ease: "easeInOut" },
        },
      }}
      //   initial={"offview"}
      whileInView={"onview"}
      viewport={{ once: true }}
      className="ego-quote"
    >
      <img src={massageIcon} alt="" />
      <p>
        quotes ustad disini dan kayak git takutnya kayak gimana yah.Gitu aja sih
        ngak tahu juga.Insyaallah
      </p>
    </motion.div>
  );
};
