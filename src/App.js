import logo from './logo.svg';
import './App.css';

function App() {
  const location = useLocation();

  // Check if current path is login
  const isLoginPage = location.pathname === "/" || location.pathname === "/login";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Wrap App with BrowserRouter at root (index.js)
export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
