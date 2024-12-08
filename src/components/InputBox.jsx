import { useId } from "react";

 // In this component, we need to update many things, based
 // on several things, to know whether these things changed
 // We will receive these changes as args



function InputBox({ label, 
                    extraClasses = "",
                    amount,
                    onAmountChange,
                    onCurrencyChange,
                    currencyOptions = [],
                    selectCurrency = "usd" ,
                    amountDisable = false,
                    currencyDisable = false
                }
    ) {
    // Label is type of currency, ex: usd,inr
    // extraClasses is for additional styling if needed
    // amount is number we want to display.
    // onAmountChange tells us whether amount has been changed,
    // so that we can do something accordingly
    // onCurrencyChange also tells us whether currency type
    // was changed.
    // currencyOptions is the list of all currency types we 
    // can convert into. for an empty arr. Its obtained from 
    // the API. Then we can loop through it.
    // selectCurrency is used for changing the currency.
    
    // Why are we taking so many args? Because remember We
    // have 2 inputboxes, and when we swap them. We need
    // to make all such related changes. Also when fetch
    // data comesback we need to display related results
    // in another inputbox also. Hence all these args.

    const amountInputFieldId = useId()
    // This hook generates a unique Id that can be used
    // is ur programs. But NOTE : Never use
    // useId for using as keys while looping through list.

    return (
        <div className={`bg-white p-3 rounded-lg mt-4 text-sm flex ${extraClasses} `}>
            <div className="w-1/2 flex flex-col">
                <label  htmlFor={amountInputFieldId} className="text-black/40 mb-2 self-start ">
                    {label}
                </label>
                <input
                    id={amountInputFieldId}
                    className="outline-none w-full bg-transparent py-1.5 border-2 rounded-md pl-1"
                    type="number"
                    placeholder="Amount" value={amount} disabled={amountDisable}
                    onChange={ (e) => onAmountChange && onAmountChange( Number(e.target.value))}
                    // What are we doing above?
                    // Here whenever amount is written by user, we
                    // need to trigger something to recalculate 
                    // everything. Hence We invoke here, the onAmountChange defined
                    // in the parent. And the && ensures that we invoke it
                    // only if onAmountChange is passed to this box.
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-2 py-2 bg-gray-100 cursor-pointer outline-none"
                        value={selectCurrency} disabled={currencyDisable}
                        onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}>
                        // When parent gives back the data, we need to set 
                        // this inputbox's currency type to the received one.
                        // But what if user selects another? Then we need to
                        // trigger onCurrencyChange, which is done with onChange

                        // For displaying the various currency as 
                        // option, we can apply forEach/ map.
                        // But remember in React, If we need to use
                        // loops, We must pass some sort of keys to
                        // not degrade the performance. Here we 
                        // will use index as key. But the element value
                        // are unique its even better to use than index.
                        // For DB use, we can use ID as key.

                        {
                            currencyOptions.map( (curr, index) => 
                                <option key={index} value={curr} > {curr} </option>
                            )
                        }
                </select>
            </div>
        </div>
    );
}

export default InputBox;
