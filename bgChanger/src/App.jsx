import { useState } from "react";

function App() {
  const [color, setColor] = useState("pink");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div
          className="fixed flex flex-wrap justify-center
         bottom-12 inset-x-0 px-2"
        >
          <div
            className="flex flex-wrap justify-center 
          gap-3 px-2 py-1 shadow-lg bg-green-200 rounded-3xl"
          >
            <button
              className="outline-none px-4 rounded-full
            text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 rounded-full
            text-white shadow-lg"
              style={{ backgroundColor: "blueviolet" }}
              onClick={() => setColor("blueviolet")}
            >
              Blueviolet
            </button>
            <button
              className="outline-none px-4 rounded-full
            text-white shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 rounded-full
            text-white shadow-lg"
              style={{ backgroundColor: "wheat" }}
              onClick={() => setColor("wheat")}
            >
              Wheat
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
