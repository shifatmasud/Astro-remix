import React from 'react';
import { motion } from 'framer-motion';

const Thumbstick = ({ onMove }) => {
  const handleDrag = (event, info) => {
    const { x, y } = info.offset;
    onMove(x / 50, -y / 50);
  };

  const handleDragEnd = () => {
    onMove(0, 0);
  };

  return (
    <div style={styles.base}>
      <motion.div
        style={styles.stick}
        drag
        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
        dragElastic={0.2}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      />
    </div>
  );
};

const styles = {
  base: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stick: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    cursor: 'grab',
  },
};

export default Thumbstick;
