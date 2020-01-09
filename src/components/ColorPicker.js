import React from 'react';

const ColorPicker = ({
  colors,
  selectedIndex,
  handleBackgroundColor,
  setColorPickerVisibility,
  position
}) => {
  return (
    <div
      style={{
        boxShadow: `0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 
                  0 1px 5px 0 rgba(0, 0, 0, 0.12)`,
        backgroundColor: '#272727',
        position: 'absolute',
        [position.key]: position.value,
        bottom: '38px',
        height: 90,
        width: 120,
        display: 'flex',
        flexWrap: 'wrap',
        padding: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 99
      }}
      onMouseEnter={() => setColorPickerVisibility(true)}
      onMouseLeave={() => setColorPickerVisibility(false)}
    >
      {colors.map((color, index) => (
        <div
          key={color}
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: 30,
            height: 30,
            backgroundColor: `${color}`,
            borderRadius: 99,
            margin: '2px 0px',
            border: '2px solid #bbbbbb',
            opacity: index === selectedIndex ? 0.4 : 1
          }}
          onClick={() => handleBackgroundColor(index, color)}
        >
          {index === selectedIndex && (
            <i style={{ alignSelf: 'center' }} className="material-icons">
              check
            </i>
          )}
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;
