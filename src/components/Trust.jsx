const POINTS = [
  { title: 'Environmental asset assessment', desc: 'Independent evaluation of your project\u2019s credit potential.' },
  { title: 'Registry & methodology expertise', desc: 'Navigation of standards and methodologies without the jargon.' },
  { title: 'Project development', desc: 'From concept to registered, credit-bearing project.' },
  { title: 'Credit market access', desc: 'Route your credits to verified buyers.' },
  { title: 'Buyer / seller matching', desc: 'Connecting requirements with the right supply.' },
]

export default function Trust() {
  return (
    <section id="about" className="section ecf-trust-section">
      <span className="section-eyebrow">Why ECF?</span>
      <h2 className="section-title">A marketplace, not a textbook</h2>
      <p className="section-sub">Everything you need to turn environmental value into credits — and credits into outcomes.</p>

      <div className="ecf-trust-grid">
        {POINTS.map((p) => (
          <div className="ecf-trust-item" key={p.title}>
            <span className="ecf-trust-check" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
