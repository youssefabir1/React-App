import logo from './logo.svg';
import img from './Alan-Walker.webp';
import './App.css';

const title = 'Hello Worlds';
const todos = ['Buy groceries', 'Clean the house', 'Finish React project'];
const props = {
  id : "hello",
  className : "my-class",
};

function App() {
  return (
    <>
      <h1 {...props} style={{ color: 'red'}}>{title}</h1>
      <p {...props}>Welcome to my React App!</p>
      <p>I m happy for testing this project react</p>

      <img src={logo} className="App-logo" alt="logo" />
      <img src={img} className="Alan-Walker" alt="Alan Walker" width="300" height="300" />
      <>
        <button className="btn" onClick={() => alert('Button clicked!')}>Click Me</button>
      </>
      <input type="text" placeholder="Enter your name" className='name'/>
      <input type="number" placeholder="Enter your number" className='number' />
      <input type="password" placeholder="Enter your password" className='password' />

      <div className='navbar'>
        <h2>Navigation</h2>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
           <button className="nav-btn" onClick={() => alert('Navigation button passed!')}>check</button> 
        </nav>
        

      </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
    </>

  );
}


export default App;
