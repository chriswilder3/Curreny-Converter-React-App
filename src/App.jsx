import { useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';


function App() {

  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0)
  // This stores the current amount, that can be passed and received
  // from InputBoxes.

  const [from, setFromCurrency] = useState('usd');
  const [to, setToCurrency] = useState('inr');
  // Tells the type of currency for both boxes.

  // Now we need to use our custom hook to get
  // conversion rates of a currency. What will we pass
  // as arg to that hook? since it takes currency as arg,
  // Note that 'from' value is needs to be passed since
  // its the source currency for which we need that data.
  const currencyInfo = useCurrencyInfo(from)

  // Note that this returned data will be in the form of
  // Js object. But to display into input box We need 
  // both currencylist(keys of object), 
  // conversionRates( vals of object)

  const currencyList = Object.keys(currencyInfo)

  // And when we convert, the amount must be
  // multiplied by conversion rate(of target currency
  // which is indicated by 'to' tag) to get converted amt
  const convert = () =>{
    setConvertedAmount( amount * currencyInfo[to] )
  }


  // Note that there is swap button also which takes
  // reverses both these boxes. 

  const swap = () => {
    setToCurrency(from)
    setFromCurrency(to)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }



  return (
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           // When the convert button is clicked
                           // just call convert()
                           convert()

                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label={from}
                                amount={amount}
                                currencyOptions={currencyList}
                                selectCurrency={from}
                                onCurrencyChange={ (currency) => 
                                  setFromCurrency(currency)
                                }
                                onAmountChange={ (amt)=> 
                                  setAmount(amt)
                                }
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={ swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label={to}
                                amount={convertedAmount}
                                currencyOptions={currencyList}
                                selectCurrency={to}
                                onCurrencyChange={ (currency) => 
                                  setToCurrency(currency)
                                }
                                onAmountChange={ (amt)=> 
                                  setAmount(amt)
                                }
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    
  );
}

export default App;
