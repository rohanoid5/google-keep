import React from 'react';
import { LIGHT_THEME } from '../constants/ThemeConstants';

const ThemeContext = React.createContext({
  theme: LIGHT_THEME,
  toggleTheme: () => {}
});

export default ThemeContext;
