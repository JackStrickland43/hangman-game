# A simple Hangman Game created using React and Bootstrap

Rules of the game:
The aim of hangman is to guess all the letters in a randomly selected hidden word in as few guesses as possible to stop the the hangman from being hanged.
    - When a new game of hangman starts a word is randomly selected. The word is displayed to the player as a series of underscores to represent the hidden letters of the word.
    - Select letters you think are in the word. When a correct letter is guessed, all instances of that letter are displayed in place of the underscores.
    - When a wrong letter is selected it brings the hangman closer to his end as shown in the hangman image.
    - If the player completes the word by selecting all its letters before the hangman is hanged then the player has succeeded. However if the hangman dies before the player completes the word then the player has failed.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `git clone`

Open your terminal and type: $ git clone (git repository URL). 
This clones the repository for use on your machine.

### `npm install`

This installs the required dependencies into the project folder.

### `npm install react-bootstrap bootstrap`

This installs bootstrap to be used within the project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
