import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import MainDisplayContainer from '../containers/MainDisplayContainer';
import ThemeContext from '../contexts/ThemeContext';
import { LIGHT_THEME, DARK_THEME } from '../utils/constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavbarCollapased: false,
      selctedIndex: 0,
      theme: DARK_THEME,
      toggleTheme: this.toggleTheme
    };
  }

  setNavbarCollapse = () =>
    this.setState(({ isNavbarCollapased }) => {
      return {
        isNavbarCollapased: !isNavbarCollapased
      };
    });

  setSelectedIndex = index =>
    this.setState({
      selctedIndex: index
    });

  toggleTheme = () =>
    this.setState(({ theme }) => ({
      theme: theme === DARK_THEME ? LIGHT_THEME : DARK_THEME
    }));

  render() {
    const { selctedIndex, isNavbarCollapased, theme } = this.state;
    return (
      <ThemeContext.Provider
        value={{ theme: this.state.theme, toggleTheme: this.state.toggleTheme }}
      >
        <div
          className={theme === DARK_THEME ? 'App App-dark' : 'App App-light'}
        >
          <Header setNavbarCollapse={this.setNavbarCollapse} />
          <div style={{ backgroundColor: '#BBB', height: '1px' }}></div>
          <div className="container">
            <NavBar
              selctedIndex={selctedIndex}
              setSelectedIndex={this.setSelectedIndex}
              isNavbarCollapased={isNavbarCollapased}
            />
            <MainDisplayContainer selctedIndex={selctedIndex} />
          </div>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
