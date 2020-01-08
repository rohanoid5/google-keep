import React from 'react';

const ColorPicker = ({ colors, selectedIndex }) => {
  return (
    <div
      style={{
        boxShadow: `0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 
                  0 1px 5px 0 rgba(0, 0, 0, 0.12)`,
        backgroundColor: '#272727',
        position: 'absolute',
        bottom: '38px',
        height: 90,
        width: 100,
        display: 'flex',
        flexWrap: 'wrap',
        padding: 8,
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      {colors.map((color, index) => (
        <div
          key={color}
          style={{
            width: 30,
            height: 30,
            backgroundColor: `${color}`,
            borderRadius: 99,
            margin: '2px 0px',
            opacity: index === selectedIndex ? 0.4 : 1
          }}
        >
          {''}
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;
