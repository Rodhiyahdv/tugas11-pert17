// import logo from './logo.svg';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';
// import ReactAsync from './components/ReactAsync';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <div className="Menu">
        {/* <Link to="/ReactAsync" style={{textDecoration: "none", color: "black"}}>Async</Link> */}
        <Link to="/" style={{textDecoration: "none", color: "black", padding: "5px"}}>Home</Link>
        <Link to="/Register" style={{textDecoration: "none", color: "black", padding: "5px"}}>Register</Link>
        <Link to="/Login" style={{textDecoration: "none", color: "black", padding: "5px"}}>Login</Link>
      </div>
      <header>
        <h1>Tugas 11 - Pertemuan 17</h1>
      </header>
      <main>
        <Switch>
          {/* <Route path="/ReactAsync">
            <ReactAsync/>
          </Route> */}
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/Register">
            <RegisterPage/>
          </Route>
          <Route path="/Login">
            <LoginPage/>
          </Route>
        </Switch>
      </main>
      <footer>
        Copyright &copy; 2021 - Rodhiyah Desviana
      </footer>
    </div>
  );
}

export default App;
