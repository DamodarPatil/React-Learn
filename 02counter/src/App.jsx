import { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      // Check if counter is less than 20
      // Original Approach - This will not work as intended due to state batching
      /*
      setCounter(counter + 1); // Update state to counter + 1
      setCounter(counter + 1); // This will not work as expected due to batching
      setCounter(counter + 1); // This will not work as expected due to batching
      setCounter(counter + 1); // This will not work as expected due to batching
      */

      // Solution - Use functional update to handle state batching
      setCounter((prevCounter) => prevCounter + 1); // Increment by 1 using functional update
      setCounter((prevCounter) => prevCounter + 1); // Increment by 1 using functional update
      setCounter((prevCounter) => prevCounter + 1); // Increment by 1 using functional update
      setCounter((prevCounter) => prevCounter + 1); // Increment by 1 using functional update
    } else {
      alert("Above 20 value is not allowed"); // Alert if counter is 20 or more
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
