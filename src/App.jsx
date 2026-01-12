import { useState } from "react";
import InputBox from "./components/inputBox";
import Currencylist from "./hooks/useCurrencyList";
import Swap from "./components/swapBtn";
export default function App(){
  const [upperLabel, setUpperLable] = useState("from");
  const [lowerLabel,setLowerLabel] = useState("To");
  const [fromCurrency,setFromCurrency] = useState("inr");
 const [toCurrency,setToCurrency] = useState("usd");
 const currencyListObject = Currencylist(fromCurrency) || {};
const currencyListObjecKeys = Object.keys(currencyListObject) || [];
 const [fromAmmount,setFromAmmount] = useState(0);
 const [toAmount,setToAmmount] = useState(0);
//  const [convRate,setConvRate] = useState(0); lessons to remember: state updates are not instantaneous

 const swapvals = ()=>{
  const fr = fromCurrency;
  setFromCurrency(toCurrency);
  setToCurrency(fr);
  const fram = fromAmmount;
  setFromAmmount(toAmount);
  setToAmmount(fram);
 }

  return (
    <div className= "min-h-screen min-w-screen flex justify-center items-center"
    >
      {/* Form */}
      <div className="border border-pink-200 p-10 rounded-lg backdrop-blur-lg shadow-transparent">
        <div className="mid relative">
          <button onClick = {(e)=>{
            e.preventDefault();
            swapvals();
          }}className="absolute left-[45%] bottom-[40%] p-2 bg-blue-600 rounded-lg">Swap</button>
        <InputBox
        label={upperLabel}
        amount={fromAmmount}
        currency={fromCurrency}
        isboxActivated = {true}
        currencyList={currencyListObjecKeys}
        onAmountChange={(amount)=>{
          setFromAmmount(amount);
        }}
        onCurrencyChange={(currency)=>{
          setFromCurrency(currency);
        }}
        />
        <InputBox 
        label={lowerLabel}
        amount={toAmount}
         currency={toCurrency}
         isboxActivated = {false}
        currencyList={currencyListObjecKeys}
        onCurrencyChange={(currency)=>{
          setToCurrency(currency);
        }}
        onAmountChange={(amount)=>{
          setToAmmount(amount);
        }}
        />
        </div>
        <button
        className=" mt-4 w-full p-2 rounded-lg bg-blue-400 text-white hover:bg-blue-800 shadow-lg transition-all duration-550 delay-75 text-wrap text-2xl"
      onClick={(e)=>{
        e.preventDefault();
         const rate = Number(currencyListObject[toCurrency]);
  setToAmmount((fromAmmount * rate).toFixed(4));
      }} type="submit">{`Get ${fromCurrency.toUpperCase()} to ${toCurrency.toUpperCase()} rate`}</button>
      </div>
      
      {/*  */}
    </div>
  )
}

    // label  = "from",
    // amount = 1,
    // currency = "usd",
    // isboxActivated = true,
    // currencyList = [],
    // onCurrencyChange = ()=>{},
    // onAmountChange = ()=>{},
    // selectedCurrency = "usd",