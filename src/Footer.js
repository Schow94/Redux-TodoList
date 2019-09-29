import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const { container, button } = styles;
    return (
      <div style={container}>
        <button style={button}>ALL</button>
        <button style={button}>COMPLETED</button>
        <button style={button}>NOT COMPLETED</button>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    marginLeft: '0.5em'
  }
};
