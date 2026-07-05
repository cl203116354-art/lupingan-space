import { navItems } from '../content'

export default function Navigation() {
  return (
    <header className="nav-wrap">
      <nav className="nav glass" aria-label="主导航">
        <a className="brand" href="#top" aria-label="Lupingan Space 首页">
          <span className="brand-cn">鹭平安</span>
          <span className="brand-en">Lupingan Space</span>
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
