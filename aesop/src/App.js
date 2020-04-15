import React from 'react';
import logo from './logo.svg';
import './AppWalter.css';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <a id="hoverThis" href="#">test modal display</a>
      <Modal />
    </div>
  );
}

export default App;
