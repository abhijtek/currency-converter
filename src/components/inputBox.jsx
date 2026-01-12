import { useState } from "react"

export default function InputBox({
    label  = "from",
    amount = 1,
    currency = "usd",
    isboxActivated = true,
    currencyList = [],
    onCurrencyChange = ()=>{},
    onAmountChange = ()=>{},
    selectedCurrency = "usd",
}){
    
    return (
       <div className="bg-blue-100 rounded-xl m-4 p-4">
        <div className="flex justify-evenly text-gray-800 gap-x-50 m-2">
            <div>{label}</div> <label id = "currencies">Currency Type</label>
        </div>
        <div className="gap-x-20 flex">
            <input 
            type="number"
             readOnly = {!isboxActivated}
             value={Number(amount).toFixed(4)}
             onChange={(e)=>{
                onAmountChange(e.target.value);
             }} 
            className="bg-gray-300 rounded-lg p-2"/>
            <select 
            className="border bg-blue-950 text-gray-300 p-2 rounded-xl"
            name="currencies"
             id="currencies"
             value={currency}
             onChange={(e)=>{
                onCurrencyChange(e.target.value)
             }}>
{currencyList.map((currency)=>(
 <option>{currency}</option>
))}
            </select>
        </div>
       </div>
    )
}