import React from 'react';
import GoldbarDeck from './components/GoldbarDeck.jsx';
import slideData from './data/slideData.js';
import FixedLogo from './components/FixedLogo.jsx'; // Import the logo
// import SVGBackground from './components/SVGBackground.jsx'; // Import if using background component separately

function App() {
  // You could potentially fetch slideData here or pass it down if needed
  // For now, directly using the imported data

  return (
    <>
      <FixedLogo /> {/* Render the logo */}
      {/* Render background if it's a separate component */}
      {/* <SVGBackground /> */}
      <GoldbarDeck slides={slideData} />
    </>
  );
}

export default App;
