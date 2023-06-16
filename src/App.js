import './App.css';
import Navigation from './Nav';

function App() {
  return (
    <div className="App">
      <Navigation />
      <section className="WelcomSection" />
      <form>
        <div>
          <input id="userName" for="userName" placeholder="user name" />
          <div>
            <input id="password" for="password" placeholder="password" />
          </div>
          <div>
            <button id="submit" type="submit">
              <h3>Log in</h3>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
