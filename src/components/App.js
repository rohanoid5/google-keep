import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import MainDisplay from './MainDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavbarCollapased: false
    };
  }

  setNavbarCollapse = () => {
    this.setState(({ isNavbarCollapased }) => {
      return {
        isNavbarCollapased: !isNavbarCollapased
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          isNavbarCollapased={this.state.isNavbarCollapased}
          setNavbarCollapse={this.setNavbarCollapse}
        />
        <div style={{ backgroundColor: '#BBB', height: '1px' }}></div>
        <div className="container">
          <NavBar />
          <MainDisplay />
        </div>
      </div>
    );
  }
}

export default App;
