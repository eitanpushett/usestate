import { useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(0)
    const {delta} = props
    const {max} = props
    function incr(){
        setCount(
            function(oldCount){
              if (oldCount + delta>max) {
                setCount(0)
              } else {
                return oldCount + delta
              }
            
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
    
        

    return (
      <div className="counter">
      <h1>React Counter</h1>
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
  