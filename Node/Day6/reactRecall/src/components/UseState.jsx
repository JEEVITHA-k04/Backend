import { useState } from "react"

export const On_Off = () => {
    const [input, setInput] = useState("")
    const changeHandle =(e)=>{
        setInput(e.target.value);
    }
    return<>
        <div className="m-5">
            <input type="text" onChange={changeHandle} value={input} className="border-2" />
            <div className="m-5">
                {input == "" ? <p>Type on/off</p> 
                    :
                    input =="on"  ? 
                    <div className="w-30 h-30 flex items-center justify-center bg-green-500 text-white rounded-2xl">ON</div> 
                    : input == "off" ? 
                    <div className="w-30 h-30 flex items-center justify-center bg-red-600 text-white rounded-2xl">OFF</div>
                    :
                    <div className="w-30 h-30 flex items-center justify-center bg-amber-400 text-white rounded-2xl">NORMAL</div> 
                }
            </div>
                
        </div>
        
    </>
}

export const With_btn = () => {
    const [input, setInput] = useState("")
    const [value, setValue] = useState("")

    const changeHandle =(e)=>{
        setInput(e.target.value);
    }
    
    const handleClick =()=>{
        setValue(input);        
    }
    return<>
        <div className="m-5">
            <input type="text" value={input} onChange={changeHandle} className="border-2" />
            <button onClick={handleClick} className="m-5 bg-green-400 rounded-2xl p-2">Submit</button>
            <div className="m-5">
                {value == "" ? <p>Type on/off</p> 
                    :
                    value =="on"  ? 
                    <div className="w-30 h-30 flex items-center justify-center bg-green-500 text-white rounded-2xl">ON</div> 
                    : value == "off" ? 
                    <div className="w-30 h-30 flex items-center justify-center bg-red-600 text-white rounded-2xl">OFF</div>
                    :
                    <div className="w-30 h-30 flex items-center justify-center bg-amber-400 text-white rounded-2xl">NORMAL</div> 
                }
            </div>
                
        </div>
        
    </>
}