export default function Header({ onNav }) {
  const links = [
    { label: 'About', target: 'about' },
    { label: 'Progress', target: 'progress' },
  ]

  const go = (id) => {
    onNav?.(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="ecf-header">
      <div className="ecf-header-inner">
        <button className="ecf-brand" onClick={() => go('top')} aria-label="ECF home">
          <span className="ecf-mark" aria-hidden="true">ECF</span>
          <span className="ecf-brand-text">Earth Carbon Foundation</span>
        </button>

        <nav className="ecf-nav" aria-label="Primary">
          {links.map((l) => (
            <button key={l.target} className="btn btn-ghost" onClick={() => go(l.target)}>
              {l.label}
            </button>
          ))}
          <button className="btn btn-ghost" onClick={() => go('login')}>Login</button>
        </nav>
      </div>
    </header>
  )
}
