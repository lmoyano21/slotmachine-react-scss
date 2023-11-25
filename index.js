import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import SlotsReels from './SlotsReel.js'

export default function App() {
  return (
    <SlotsReels />
  );
}


render(<App />, document.getElementById('root'));
