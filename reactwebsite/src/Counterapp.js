import { useState } from "react"


const Counter = ()=>{
    const [Counter,setCounterN] = useState(0)
    
    const Increase =() =>setCounterN(Counter+1)
    const Decreases = ()=>{
        if(Counter>0){
            setCounterN(Counter-1)
        }
    }
    return(
        <>
        <div className="Container-fluid" >
            <div className="Counter-Box">
                <h1>COUNTER APP</h1>
                <p className="itt">{Counter}</p>
                <button className="Fab" onClick={Increase}>+</button>
                <button className="Fab1" onClick={Decreases}>-</button>
            </div>
        </div>
        </>
    )
}
export default Counter