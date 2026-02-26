import React from 'react';

const JumpButton = ({ onJump, onJumpEnd }) => {
  return (
    <button 
      style={styles.button}
      onMouseDown={onJump}
      onMouseUp={onJumpEnd}
      onTouchStart={onJump}
      onTouchEnd={onJumpEnd}
    >
      JUMP
    </button>
  );
};

const styles = {
  button: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#ef4444',
    color: 'white',
    border: 'none',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  },
};

export default JumpButton;
