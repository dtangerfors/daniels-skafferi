
import React, { useRef, useState, useLayoutEffect } from "react";
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion
} from "framer-motion";

const calculateMinHeight = (height, range) => {
  return height + height * range;
};

const rand = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (+max - +min)) + +min;
};

export default function ParallaxImage({ className, children }) {
  const range = 0.4;
  const { scrollY } = useViewportScroll();
  const ref = useRef();
  const [offsetTop, setOffsetTop] = useState(0);
  const [minHeight, setMinHeight] = useState("auto");
  const springConfig = {
    damping: 100,
    stiffness: 100,
    mass: rand(1, 3)
  };

   useLayoutEffect(() => {
    if (!ref.current) return null;
    const onResize = () => {
      setOffsetTop(ref.current.offsetTop);
      setMinHeight(calculateMinHeight(ref.current.offsetHeight, range));
    };

    onResize();
    window.addEventListener("resize", onResize);
 
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);
  

  const y = useSpring(
    useTransform(
      scrollY,
      [offsetTop - 500, offsetTop + 500],
      ["0%", `${range * 100}%`]
    ),
    springConfig
  );

  return (
    <div className={className}>
      <motion.div ref={ref} initial={{ y: 0 }} style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}