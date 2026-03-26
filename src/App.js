import logo from './logo.svg';
import img from './Alan-Walker.webp';
import './App.css';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <p>Welcome to my React App!</p>
      <p>I m happy for testing this project react</p>

      <img src={logo} className="App-logo" alt="logo" />
      <img src={img} className="Alan-Walker" alt="Alan Walker" width="300" height="300" />
      <>
        <button className="btn" onClick={() => alert('Button clicked!')}>Click Me</button>
      </>
    </>

  );
}


export default App;
