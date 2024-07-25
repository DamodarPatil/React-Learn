import { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert("Above 20 value is not allowed");
    }
  };

  const deleteValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Negative value not allowed");
    }
  };

  return (
    <div>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={deleteValue}>Delete Value</button>
    </div>
  );
};

export default App;
