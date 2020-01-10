import React from 'react';
import './ColorPicker.css';

const ColorPicker = ({
  colors,
  selectedIndex,
  handleBackgroundColor,
  setColorPickerVisibility,
  position
}) => {
  return (
    <div
      className="color-container"
      style={{
        [position.key]: position.value
      }}
      onMouseEnter={() => setColorPickerVisibility(true)}
      onMouseLeave={() => setColorPickerVisibility(false)}
    >
      {colors.map((color, index) => (
        <div
          key={color}
          className="color"
          style={{
            backgroundColor: `${color}`,
            opacity: index === selectedIndex ? 0.4 : 1
          }}
          onClick={e => {
            e.stopPropagation();
            handleBackgroundColor(index, color);
          }}
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
