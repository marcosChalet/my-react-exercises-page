import './style.css';

import { useState } from 'react'
import Main from '../template/Main'

const Contador = _ => {

  const [count, setCount] = useState(0)

  return (
    <div className="modal">
      <div className="counter">
        <h1>Valor = <strong>{count}</strong></h1>
        <div className="btns">
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
        </div>
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
