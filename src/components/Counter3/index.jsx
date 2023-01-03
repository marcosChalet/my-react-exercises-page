import './style.css';

import { useState, useEffect, useRef } from 'react'
import Main from '../template/Main'

const Contador = _ => {

  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const clickRef = useRef()

  useEffect(() => {
    countRef.current = count
  }, [count])

  useEffect(() => {
    clickRef.current.click()
  }, [])

  return (
    <div className="modal">
      <div className="counter">
        <div className="display">
          <h1>Atual = <strong>{count}</strong></h1>
          <h1>Anterior = <strong>{countRef.current}</strong></h1>
        </div>
        <div className="btns">
          <button onClick={() => setCount(prev => prev - 1)}>-</button>
          <button ref={clickRef} onClick={() => setCount(prev => prev + 1)}>+</button>
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
