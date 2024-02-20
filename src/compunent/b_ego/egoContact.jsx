import instagram_icon from "./ego_source/instagram.svg";
import mail_icon from "./ego_source/mail.svg";
import facebook_icon from "./ego_source/facebook.svg";
import phone_icon from "./ego_source/phone.svg";

import { motion } from "framer-motion";

export const EgoContact = () => {
  return (
    <motion.div
      variants={{
        offview: {
          borderLeft: "0px solid white",
          borderBottom: "0px solid white",
        },
        onview: {
          borderLeft: "3px solid white",
          borderBottom: "3px solid white",
          transition: { delay: 0.5 },
        },
      }}
      initial={"offview"}
      whileInView={"onview"}
      viewport={{ once: true }}
      className="ego-contact"
    >
      <motion.div
        variants={{
          offview: { opacity: 0, y: 10 },
          onview: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, ease: "easeInOut" },
          },
        }}
        initial={"offview"}
        whileInView={"onview"}
        viewport={{ once: true }}
        className="ego-contact-wrap-item"
      >
        <img src={instagram_icon} alt="instagram" />
      </motion.div>
      <motion.div
        variants={{
          offview: { opacity: 0, y: 10 },
          onview: {
            opacity: 1,
            y: 0,
            transition: { delay: 1, ease: "easeInOut" },
          },
        }}
        initial={"offview"}
        whileInView={"onview"}
        viewport={{ once: true }}
        className="ego-contact-wrap-item"
      >
        <img src={mail_icon} alt="mail" />
      </motion.div>
      <motion.div
        variants={{
          offview: { opacity: 0, y: 10 },
          onview: {
            opacity: 1,
            y: 0,
            transition: { delay: 1.5, ease: "easeInOut" },
          },
        }}
        initial={"offview"}
        whileInView={"onview"}
        viewport={{ once: true }}
        className="ego-contact-wrap-item"
      >
        <img src={facebook_icon} alt="facebook" />
      </motion.div>
      <motion.div
        variants={{
          offview: { opacity: 0, y: 10 },
          onview: {
            opacity: 1,
            y: 0,
            transition: { delay: 2, ease: "easeInOut" },
          },
        }}
        initial={"offview"}
        whileInView={"onview"}
        viewport={{ once: true }}
        className="ego-contact-wrap-item"
      >
        <img src={phone_icon} alt="phone" />
      </motion.div>
    </motion.div>
  );
};
