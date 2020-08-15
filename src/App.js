import React from 'react';
import './App.css';

import MenuAppBar from './components/app_bar';
import Bytes from './components/bytes';

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <header className="App-header">
        <Bytes />
      </header>
    </div>
  );
}

export default App;
