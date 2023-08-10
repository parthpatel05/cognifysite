import logo from './logo.svg';
import './App.css';
import Home from "./home";
import Service from "./service";
import Feature from "./feature";
import Price from "./price";
import Footer from "./footer";

function App() {
  return (
    <div className="App" style={{display:"flex", flexDirection:"column"}}>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      <Home></Home>
        <Service></Service>
        <Feature></Feature>
      <Price></Price>
      <Footer></Footer>
    </div>
  );
}

export default App;
