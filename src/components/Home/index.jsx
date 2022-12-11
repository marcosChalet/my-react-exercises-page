import React from 'react'

import './style.css'
import Main from '../template/Main/'

const Home = _ => {
  return (
    <Main>
      <div className="home">
        <h1>Mini projetos em React</h1>
        <p>Essa página é destinada a armazenar projetos em React que fiz,
          e que venho fazendo, para aprender os conceitos básicos do framework.
        </p>
      </div>
    </Main>
  )
}

export default Home
