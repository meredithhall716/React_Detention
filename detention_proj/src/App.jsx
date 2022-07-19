import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState('')

  const print100Times = () => {
    let sentence = 'I will never mutate state or props directly. '
    let filledArray = new Array(100).fill(sentence);
    return filledArray
  }



  return (
    <div className="App">
      <h1>What will I never do?</h1>
      <div className="card">
        <p>{print100Times()}</p>
      </div>
    </div>
  )
}

export default App