import React, { useState, useEffect } from 'react';
import HangmanImage from './HangmanImage';
import WrongGuesses from './WrongGuesses';
import HangmanWord from './HangmanWord';
import Help from './Help';

// An array of words that will be used as the hidden word to guess
const words = ['apple', 'banana', 'cherry', 'orange', 'pear', 'kiwi', 'mango', 'papaya', 'strawberry', 'lime'];

const Hangman = () => {

  /* State variables containing the hidden word that the user has to guess, An array of letters that 
  the user has already guessed, the letter that the user currently wants to guess and the number of 
  wrong guesses the user has made */
  const [selectedWord, setSelectedWord] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [guess, setGuess] = useState('');
  const [wrongGuesses, setWrongGuesses] = useState(0);

  // When the component first mounts, select a random word from the list of words to be guessed
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setSelectedWord(words[randomIndex]);
  }, []);

  // Handler for when the user submits a guess
  const handleGuess = (event) => {
    event.preventDefault();
    if (guesses.includes(guess)) {
      alert('You already guessed that letter!');
    } else {
      setGuesses([...guesses, guess]); // Add the guessed letter to the list of guesses
      if (!selectedWord.includes(guess)) {
        // If the guessed letter is not in the hidden word, increment the number of wrong guesses
        setWrongGuesses(wrongGuesses + 1);
      }
    }
    setGuess(''); // Reset the guess input field to be empty
  };

  // Get the current state of the guessed word, with unguessed letters represented as underscores
  const getGuessedWord = () => {
    return selectedWord.split('').map((letter) => (guesses.includes(letter) ? letter : '_ '));
  };

  // Check if the game has been won (all letters have been guessed)
  const isGameWon = () => {
    return getGuessedWord().join('') === selectedWord;
  };

  // Check if the game has been lost (too many wrong guesses)
  const isGameLost = () => {
    return wrongGuesses >= 10;
  };

  // Reset the game to a new hidden word and clear all state variables
  const resetGame = () => {
    setSelectedWord(words[Math.floor(Math.random() * words.length)]);
    setGuesses([]);
    setGuess('');
    setWrongGuesses(0);
  };

  {/* Renders the appropriate components and DOM elements in the react app */ }
  return (
    <div>
      <div className="title">
        <h1>Hangman</h1>
        <Help />
      </div>
      <div className="contents">
        <div className="text">
          <div>
            <HangmanWord selectedWord={selectedWord} guesses={guesses} />
          </div>

          <div>
            <div>
              <WrongGuesses wrongGuesses={wrongGuesses} />
            </div>
            <div>
              <p>Letters used: {guesses + ' '} </p>
            </div>
            {/* If the game has been won, display a win message and a play again button */}
            {isGameWon() && (
              <>
                <p>You win!</p>
                <button onClick={resetGame}>Play again</button>
              </>
            )}
            {/* If the game has been lost, display a loss message, the correct word, and a play again button */}
            {isGameLost() && (
              <>
                <p>You lose!</p>
                <p>The word was: {selectedWord}</p>
                <button onClick={resetGame}>Play again</button>
              </>
            )}
            {/* If the game is active this is the form used to guess a letter with a submit button and a reset button */}
            {!isGameWon() && !isGameLost() && (
              <div>
                <form onSubmit={handleGuess}>
                  <label>
                    Guess a letter:
                    <input type="text" value={guess}
                      onChange={(event) => setGuess(event.target.value)} maxLength="1" />
                  </label>
                  <button type="submit">Guess</button>
                <button onClick={resetGame} type="submit">Reset</button>
                </form>
              </div>
            )}
          </div>
        </div>
        <div className="image">
          <HangmanImage wrongGuesses={wrongGuesses} />
        </div>
      </div>

    </div>
  );
};

export default Hangman;