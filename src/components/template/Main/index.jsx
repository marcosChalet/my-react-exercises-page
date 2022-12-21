import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Header = _ => {
  return (
    <header className="header">
      <nav className="nav">
        <Link className="logo" to="/"><div>Chalet's</div></Link>
        <Link className="home" to="/"><div>Home</div></Link>
      </nav>
    </header>
  )
}

const Projects = _ => {

  const myProjects = [
    {link : "counter-1", name : "Counter - useState"},
    {link : "counter-2", name : "Counter - useEffect"},
    {link : "temporary", name : "Em breve 3"},
    {link : "temporary", name : "Em breve 4"},
    {link : "temporary", name : "Em breve 5"},
    {link : "temporary", name : "Em breve 6"},
    {link : "temporary", name : "Em breve 7"},
    {link : "temporary", name : "Em breve 8"},
    {link : "temporary", name : "Em breve 9"},
  ]

  return (
    <aside className="projects-list">
      <ul className="menu-projects-area">
        {myProjects.map(project => (
          <li key={project.name} className="project">
            <Link to={`/${project.link}`}><button>{project.name}</button></Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

const Footer = _ => {
  return (
    <footer className="footer">
      <span>
        Desenvolvido por MarcosChalet <i className="fa fa-heart"></i> React.
      </span>
    </footer>
  )
}

const Main = ({ children }) => {
  return (
    <main className="main">
      <Header />
      <Projects />
      <section className="content container">
        {children}
      </section>
      <Footer />
    </main>
  )
}

export default Main
