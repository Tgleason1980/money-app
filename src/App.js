import React, {useState} from "react";
import './App.css';
import Counter from "./components/Counter";

function App() {
  const [ones, setOnes] = useState(0);
  const [fives, setFives] = useState(0);
  const [tens, setTens] = useState(0);
  const [twenties, setTwenties] = useState(0);
  const [fifties, setFifties] = useState(0);
  const [hundreds, setHundreds] = useState(0);
  return (
    <div className="App">
      <Counter setOnes={setOnes} setFives={setFives} fives={fives} ones={ones} setTens={setTens} setTwenties={setTwenties} tens={tens} twenties={twenties} setFifties={setFifties} setHundreds={setHundreds} fifties={fifties} hundreds={hundreds} />
    </div>
  );
}

export default App;
