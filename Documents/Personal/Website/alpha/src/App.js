import React from 'react';
import './App.css'; // Importing the CSS file for the App component
import alphaImage from './images/alpha.svg'; // Importing the image

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* You can add any header content here */}
      </header>
      <div className="main-visual">
        <img src={alphaImage} alt="Alpha" className="alpha-image" />
      </div>
      <footer>
        {/* You can add any footer content here */}
      </footer>
    </div>
  );
}

export default App;
