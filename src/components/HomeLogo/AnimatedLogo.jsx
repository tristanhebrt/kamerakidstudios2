import React from 'react';
import { motion } from 'framer-motion';
import styles from './HomeLogo.module.css';
import SVGLogo from './SVGLogo.jsx';

const AnimatedLogo = () => {
  return (
    <motion.div
      className={styles.logoContainer}
      initial={{ x: '-100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <SVGLogo />
    </motion.div>
  );
};

export default AnimatedLogo;
