import React from 'react';

const styles = {
  container: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  button: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '2px solid white',
    cursor: 'pointer',
  },
};

const Customization = ({ onColorChange }) => {
  const colors = ['#ef4444', '#3b82f6', '#22c55e', '#eab308', '#a855f7'];

  return (
    <div style={styles.container}>
      {colors.map((color) => (
        <button
          key={color}
          style={{ ...styles.button, backgroundColor: color }}
          onClick={() => onColorChange(color)}
        />
      ))}
    </div>
  );
};

export default Customization;
