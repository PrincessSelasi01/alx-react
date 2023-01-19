import logo from './hbnblogo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils'


function App() {
  return (
    <div>
      <div className="App-header">
        <img src={logo} alt="logo"/>
        <h1>School dashboard</h1>
      </div>
      <div className="App-body"><p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email"/>
        <label htmlFor="password"> Password: </label>
        <input type="text" id="password"/>
        <button>OK</button>
      </div>
      <div className="App-footer"><p>Copyright {getFullYear()} - {getFooterCopy(false)}</p></div>
    </div>

  );
}

export default App;
