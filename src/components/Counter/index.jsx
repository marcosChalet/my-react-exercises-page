import './style.css';

import { useState } from 'react'
import Main from '../template/Main'

const Contador = _ => {

  const [count, setCount] = useState(0)

  return (
    <div className="modal">
      <div className="counter">
        <h1>Valor = {count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  )
}

const Counter = _ => {
  return (
    <Main>
      <div className="App container">
        <Contador />
      </div>
    </Main>
  );
}

export default Counter
