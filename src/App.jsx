import './App.css';

const Header = _ => {
  return (
    <header className="header">
      <div className="logo">Chalet's</div>
    </header>
  )
}

const Projects = _ => {
  return (
    <aside className="projects-list">
      <ul className="menu-projects-area">
        <li className="project"><a>Clock [useEffect]</a></li>
        <li className="project"><a>temporary [tmp]</a></li>
        <li className="project"><a>temporary [tmp]</a></li>
        <li className="project"><a>temporary [tmp]</a></li>
      </ul >
    </aside >
  )
}

const Main = _ => {
  return (
    <main>
      <Header />
      <Projects />
      <section className="content container">
        <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
      </section>
    </main>
  )
}

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
