import React from "react";
import arrow from "../../images/arrow.svg";
import { motion, AnimatePresence } from "framer-motion";

export default function Node({ value, next, index, color }) {
  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className="Node">
        <div className="Node-content">
          <div className="Node-index">{index}</div>
          <div className="Node-circle" style={{ background: color }}></div>
          <div className="Node-obj">
            <div className="Node-value">Value: {value}</div>
            <div className="Node-next">Next: {next}</div>
          </div>
        </div>
        <div className="Node-arrow">
          <img src={arrow} alt="arrow pointing right" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
