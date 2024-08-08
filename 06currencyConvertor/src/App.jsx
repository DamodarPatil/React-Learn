import { useState } from "react";
import InputBox from "./components/InputBox"; // Make sure to import the InputBox component
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const App = () => {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const CurrencyInfo = useCurrencyInfo(from);

  const options = Object.keys(CurrencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * (CurrencyInfo[to] || 1));
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
      <div className="w-full max-w-md mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-extrabold text-center mb-8 text-white">
            Currency Converter
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="mb-6">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
                className="w-full p-4 border border-gray-600 bg-gray-700 text-black rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-center mb-6">
              <button
                type="button"
                onClick={swap}
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:from-green-600 hover:to-blue-700 transition"
              >
                Swap
              </button>
            </div>
            <div className="mb-6">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
                className="w-full p-4 border border-gray-600 bg-gray-700 text-black rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-red-600 text-white px-4 py-3 rounded-lg shadow-md hover:from-purple-700 hover:to-red-700 transition font-bold"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
