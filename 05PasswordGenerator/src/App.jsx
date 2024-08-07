import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-={}[]|:;<>,.?/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 4);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-xl rounded-lg px-6 py-8 my-10 text-orange-500 bg-gray-900">
        <h1 className="text-white text-center text-3xl font-extrabold mb-6">
          Password Generator
        </h1>
        <div className="flex shadow-inner rounded-lg overflow-hidden mb-6 bg-gray-800">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-4 bg-gray-700 text-white placeholder-gray-400"
            placeholder="Generated password"
            ref={passwordRef}
            readOnly
          />
          <button
            onClick={copyPasswordToClipboard}
            className="ml-2 py-3 px-6 bg-orange-600 text-white rounded-lg transition-transform transform hover:scale-105"
          >
            Copy
          </button>
        </div>
        <div className="w-full max-w-md mx-auto my-4 p-4 bg-gray-800 rounded-lg shadow-xl">
          <div className="flex flex-col items-center mb-6">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer w-full mb-4 accent-orange-500"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-white text-xl font-medium">
              Length: {length}
            </label>
          </div>
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                className="mr-2 cursor-pointer"
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label
                htmlFor="numberInput"
                className="text-white text-lg font-medium"
              >
                Numbers
              </label>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                className="mr-2 cursor-pointer"
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label
                htmlFor="characterInput"
                className="text-white text-lg font-medium"
              >
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
