import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import MainDisplay from './MainDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavbarCollapased: false,
      selctedIndex: 0
    };
  }

  setNavbarCollapse = () => {
    this.setState(({ isNavbarCollapased }) => {
      return {
        isNavbarCollapased: !isNavbarCollapased
      };
    });
  };

  setSelectedIndex = index =>
    this.setState({
      selctedIndex: index
    });

  render() {
    const { selctedIndex, isNavbarCollapased } = this.state;
    return (
      <div className="App">
        <Header
          isNavbarCollapased={isNavbarCollapased}
          setNavbarCollapse={this.setNavbarCollapse}
        />
        <div style={{ backgroundColor: '#BBB', height: '1px' }}></div>
        <div className="container">
          <NavBar
            selctedIndex={selctedIndex}
            setSelectedIndex={this.setSelectedIndex}
          />
          <MainDisplay selctedIndex={selctedIndex} />
        </div>
      </div>
    );
  }
}

export default App;
