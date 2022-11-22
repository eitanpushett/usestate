import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(1)
    const [delta, setDelta] = useState(1)

    function incr(){
        setCount(
            function(oldCount){
                return oldCount + delta
            }
            
        )
          }
    function reset(){
      setCount(0)
        }
    

    function decr(){
      setCount(
        function(oldCount){
          return oldCount - 1
        }
      )
    }
        //console.log(count) useful for debugging
    
        function handleDelta(event){
          console.log(event)
          setDelta(Number(event.target.value))

        }

    return (
      <div className="counter">
      <h1>React Counter</h1>
      <input type = "number" value = {delta} onChange = {handleDelta} />
      <span className="counter__output">{count}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={incr}>Click to add {delta} to Counter</button>
        <button className="control__btn" onClick={decr}>-</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>


    );
  }
  
  export default Counter;
  