// import logo from './logo.svg';
import './App.css';
import ReactAsync from './components/ReactAsync';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <div className="Menu">
        <ul>
          <li>Home</li>
          <li>Register</li>
          <li>Login</li>
        </ul>
      </div>
      <header>
        <h1>Tugas 11 - Pertemuan 17</h1>
      </header>
      <main>
        <section id="DataApi">
          <ReactAsync/>
        </section>
        <section>
          <HomePage/>
        </section>
        <section>
          <RegisterPage/>
        </section>
        <section>
          <LoginPage/>
        </section>
      </main>
      <footer>
        Copyright &copy; 2021 - Rodhiyah Desviana
      </footer>
    </div>
  );
}

export default App;
