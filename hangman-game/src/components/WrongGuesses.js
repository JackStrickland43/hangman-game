// Imports react
import React from 'react';

// This component displays the number of wrong guesses.
// It receives the number of wrong guesses as a prop.
const WrongGuesses = ({ wrongGuesses }) => {
  return (
    <p>Wrong guesses: {wrongGuesses}</p>
  );
};

// Export the WrongGuesses component as the default export of this module
export default WrongGuesses;