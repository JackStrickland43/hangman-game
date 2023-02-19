// Import react and images
import React from 'react';
import states from '../assets/images.js';

// Define functional component HangmanImage, which accepts a single prop wrongGuesses
const HangmanImage = ({ wrongGuesses }) => {
  // Returns an img element with a src property set to the path of an image in states array corresponding to the number of wrong guesses
  return (
    <img src={states[wrongGuesses]} alt={`Hangman ${wrongGuesses}`} />
  );
};

// Export the HangmanImage component as the default export of this module
export default HangmanImage;
