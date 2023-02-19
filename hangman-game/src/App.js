// Imports the styling and the Hangman component
import './App.css';
import Hangman from './components/Hangman'
import 'bootstrap/dist/css/bootstrap.min.css';

// Defines the main App component and returns the App with the Hangman component inside of it
function App() {
  return (
    <div className="App">
      <Hangman />
    </div>
  );
}

// Exports the app component
export default App;
