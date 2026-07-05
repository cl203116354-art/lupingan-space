import CharacterIntro from './components/CharacterIntro'
import Hero from './components/Hero'
import Interaction from './components/Interaction'
import Navigation from './components/Navigation'
import Works from './components/Works'

export default function App() {
  return (
    <div className="site">
      <Navigation />
      <main>
        <Hero />
        <CharacterIntro />
        <Works />
        <Interaction />
      </main>
      <footer className="footer shell">
        <a className="footer-mark" href="#top" aria-label="返回页面顶部">
          Lupingan Space
        </a>
        <p>鹭平安，守护每一次安心抵达。</p>
      </footer>
    </div>
  )
}
