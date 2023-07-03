import { useState } from "react";
import "./App.css";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="title">Hello World!</h1>
      <ul className="header">
        <li>Home</li>
        <li>Products</li>
        <li>Contacts</li>
        <li>Login</li>
      </ul>
      <h3 className="message">Pippo, Paperino e Pluto</h3>
    </>
  );
}

export default App;
