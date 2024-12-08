
function InputBox({ label, extraClasses = "",}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg mt-4 text-sm flex ${extraClasses} `}>
            <div className="w-1/2 flex flex-col">
                <label  className="text-black/40 mb-2 self-start ">
                    label
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5 border-2 rounded-md pl-1"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-2 py-2 bg-gray-100 cursor-pointer outline-none"
                    
                >
                    
                        <option value="usd" >
                            usd
                        </option>
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
