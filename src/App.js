import './App.css';
import Counter from './Counter';
import { useState } from 'react';




function App() {

const [delta, setDelta] = useState(1)
const [max, setMax] = useState(100)
const [reset, setReset] = useState(false)
const [ highest, changeHighest ] = useState(0)

function handleDelta(event){
  console.log(event)
  setDelta(Number(event.target.value))

}
function handleMax (e){
setMax(Number(e.target.value))
}

//son from father
function getReset(data){
  setReset(data)
}

function setHighest(num){
  if (num > highest) {
    changeHighest(num)
  }
}






  return (
    <div className="App">
      <p>Counter should jump by {delta}</p>
    <input type = "number" value = {delta} onChange = {handleDelta} />
    <p>Max counter number</p>
    <input type = "number" value = {max} onChange = {handleMax} />
    <p>Highest so far</p>
    <p>{highest}</p>
    <Counter delta = {delta} max = {max} getReset = {getReset} needToReset = {reset} setHighest = {setHighest}/>
    <Counter delta = {delta} max = {max} getReset = {getReset} needToReset = {reset} setHighest = {setHighest}/>
    </div>
    

  );
}

export default App;
