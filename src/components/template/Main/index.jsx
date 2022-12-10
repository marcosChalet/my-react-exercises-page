import React from 'react'

import './style.css'

const Header = _ => {
  return (
    <header className="header">
      <div className="logo">Chalet's</div>
    </header>
  )
}

const Projects = _ => {

  const myProjects = [
    "Clock - useEffect", "Em breve 2", "Em breve 3",
    "Em breve 4", "Em breve 5", "Em breve 6",
    "Em breve 7", "Em breve 8", "Em breve 9",
  ]

  return (
    <aside className="projects-list">
      <ul className="menu-projects-area">
        {myProjects.map(project =>
          <li key={project} className="project"><button>{project}</button></li>
        )}
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
      {children}
      <Footer />
    </main>
  )
}

export default Main
