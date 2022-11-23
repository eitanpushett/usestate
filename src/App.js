import './App.css';
import Counter from './Counter';
import { useState } from 'react';




function App() {

const [delta, setDelta] = useState(0)
const [max, setMax] = useState(0)

function handleDelta(event){
  console.log(event)
  setDelta(Number(event.target.value))

}
function handleMax (e){
setMax(Number(e.target.value))
}
  return (
    <div className="App">
      <p>Counter should jump by {delta}</p>
    <input type = "number" value = {delta} onChange = {handleDelta} />
    <p>Max counter number</p>
    <input type = "number" value = {max} onChange = {handleMax} />
    <Counter delta = {delta} max = {max}/>
    <Counter delta = {delta} max = {max}/>
    </div>

  );
}

export default App;
