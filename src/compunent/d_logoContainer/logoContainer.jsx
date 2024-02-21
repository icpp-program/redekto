import anime from "animejs";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const LogoContainer = () => {
  const logoCons = useRef(null);
  const logoAnim = useRef(null);

  useEffect(() => {
    logoAnim.current = anime.timeline({
      loop: true,
      easing: "linear",
      duration: 20000,
    });

    logoAnim.current.add({
      targets: ".slide-logo",
      translateX: "-100%",
    });
  }, []);

  return (
    <motion.div
      variants={{
        offview: { opacity: 0 },
        onview: {
          opacity: 1,
          transition: { delay: 0.2, ease: "easeInOut" },
        },
      }}
      initial={"offview"}
      whileInView={"onview"}
      viewport={{ once: true }}
      className="logo-container-section"
    >
      <div className="slide-logo">
        <div className="logo-container-warp">
          <img src="./logo/HTML.png" alt="logo" />
          <img src="./logo/CSS.png" alt="logo" />
          <img src="./logo/JS.png" alt="logo" />
          <img src="./logo/REACT.png" alt="logo" />
          <img src="./logo/NODE.png" alt="logo" />
          <img src="./logo/GIT.png" alt="logo" />
          <img src="./logo/PYTHON.png" alt="logo" />
          <img src="./logo/C++.png" alt="logo" />
          <img src="./logo/GODOT.png" alt="logo" />
        </div>
      </div>
      <div className="slide-logo">
        <div className="logo-container-warp">
          <img src="./logo/HTML.png" alt="logo" />
          <img src="./logo/CSS.png" alt="logo" />
          <img src="./logo/JS.png" alt="logo" />
          <img src="./logo/REACT.png" alt="logo" />
          <img src="./logo/NODE.png" alt="logo" />
          <img src="./logo/GIT.png" alt="logo" />
          <img src="./logo/PYTHON.png" alt="logo" />
          <img src="./logo/C++.png" alt="logo" />
          <img src="./logo/GODOT.png" alt="logo" />
        </div>
      </div>
      <div className="slide-logo">
        <div className="logo-container-warp">
          <img src="./logo/HTML.png" alt="logo" />
          <img src="./logo/CSS.png" alt="logo" />
          <img src="./logo/JS.png" alt="logo" />
          <img src="./logo/REACT.png" alt="logo" />
          <img src="./logo/NODE.png" alt="logo" />
          <img src="./logo/GIT.png" alt="logo" />
          <img src="./logo/PYTHON.png" alt="logo" />
          <img src="./logo/C++.png" alt="logo" />
          <img src="./logo/GODOT.png" alt="logo" />
        </div>
      </div>
    </motion.div>
  );
};
