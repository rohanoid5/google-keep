import React from 'react';
import { LIGHT_THEME } from '../utils/constants';

const ThemeContext = React.createContext({
  theme: LIGHT_THEME,
  toggleTheme: () => {}
});

export default ThemeContext;
