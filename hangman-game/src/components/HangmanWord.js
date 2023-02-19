// Import React module
import React from 'react';

// Define a functional component named HangmanWord which receives two props, selectedWord and guesses
const HangmanWord = ({ selectedWord, guesses }) => {

    /* Define a function named getGuessedWord that uses the split() method to convert the selected 
    word string into an array of its letters and map over it. If the letter in the selected word 
    array is in the guesses array, return the letter, else return an underscore character */
    const getGuessedWord = () => {
        return selectedWord.split('').map((letter) => (guesses.includes(letter) ? letter : '_ '));
    };

    // Render the paragraphs for the component
    return (
        <>
            <p>Guess the word:</p>
            <p>{getGuessedWord()}</p>
        </>
    );
};

// Export HangmanWord component
export default HangmanWord;
