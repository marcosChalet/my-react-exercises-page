import './style.css';

import { useState, useEffect } from 'react'
import Main from '../template/Main'

const Contador = _ => {

  const [count, setCount] = useState(0)
  const [btnStatus, setBtnStatus] = useState('')

  // coloca cadeado a cada 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Valor de count: ', count)
      setBtnStatus('fa fa-lock fa-sm')
    }, 2000);

    return () => {
      setBtnStatus('')
      clearTimeout(timer)
    }
  },[count])

  function operacao(x) {
    return function() {
      setCount(prevCount => prevCount + x)
    }
  }

  const soma = operacao(1)
  const subtrai = operacao(-1)

  return (
    <div className="modal">
      <div className="counter">
        <h1>Valor = <strong>{count}</strong></h1>
        <div className="btns">
          <button onClick={soma}>
            <i className={btnStatus}></i>+
          </button>
          <button onClick={subtrai}>-</button>
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
