import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)

    function incr(){
        setCount(
            function(oldCount){
                return oldCount + 1
            }
            
        )
          }
    function reset(){

      setCount(
        function(oldCount){
          oldCount = 0
          return oldCount
        }
      )
    }

    function decr(){

      setCount(
        function(oldCount){
          return oldCount - 1
        }
      )
    }
        //console.log(count) useful for debugging
    

    return (
      <div className="counter">
      <h1>React Counter</h1>
      <span className="counter__output">{count}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={incr}>+</button>
        <button className="control__btn" onClick={decr}>-</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>


    );
  }
  
  export default Counter;
  