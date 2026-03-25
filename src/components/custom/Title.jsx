import { motion } from "motion/react";
import React from "react";

const Title = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="space-y-2"
    >
      <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight">
        <span className="block text-gray-100">Abdallah</span>
        <span className="block bg-linear-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
          Chiba
        </span>
      </h1>
    </motion.div>
  );
};

export default Title;
