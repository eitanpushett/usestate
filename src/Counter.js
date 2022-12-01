import { useState,useEffect } from "react";



function Counter(props) {
    const [count, setCount] = useState(0)
    const {delta,max,getReset,needToReset,setHighest} = props


    useEffect(()=>{
      if(needToReset){
        setCount(0)
        getReset(false)
      }
    }, [needToReset,getReset])


    function incr(){
        setCount(
            function(oldCount){
              if (oldCount + delta>max) {
                setCount(0)
              } else {
                setHighest(oldCount + delta)
                return oldCount + delta
              }
            
            }
            
        )
          }
    function reset(){
      getReset(true)
      //setCount(0)
        }
    

    function decr(){
      setCount(
        function(oldCount){
          return oldCount - 1
        }
      )
    }
        //console.log() . useful for debugging
    
        

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
  