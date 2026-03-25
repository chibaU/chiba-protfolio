import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

const SectionHeader = ({ badge, title, highlight, description }) => {
  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="flex items-center gap-4 mb-6">
          <Sparkles className="w-8 h-8 text-purple-400" />
          <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm">
            {badge}
          </span>
        </div>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold max-w-4xl mb-6">
          {title}
          <br />
          <span className="bg-linear-to-r from-purple-600 via-pink-600 to-teal-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        </h2>
        {description && (
          <p className="text-xl text-gray-400 max-w-2xl">{description}</p>
        )}
      </motion.div>
    </>
  );
};

export default SectionHeader;
