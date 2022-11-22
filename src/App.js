import './App.css';
import Counter from './Counter';
import { useState } from 'react';




function App() {

const [delta, setDelta] = useState(0)
function handleDelta(event){
  console.log(event)
  setDelta(Number(event.target.value))

}
  return (
    <div className="App">
      Usestate
    <input type = "number" value = {delta} onChange = {handleDelta} />
    <Counter delta = {delta}/>
    <Counter delta = {delta}/>
    </div>

  );
}

export default App;
