export default function Footer({ onNav }) {
  const go = (id) => {
    onNav?.(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const cols = [
    {
      title: 'ECF',
      links: [
        { label: 'About', id: 'about' },
        { label: 'Progress', id: 'progress' },
        { label: 'Calculator', id: 'calculator' },
      ],
    },
    {
      title: 'Credits',
      links: [
        { label: 'Buy Credits', id: 'buy' },
        { label: 'Sell Credits', id: 'sell' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Resources', id: 'resources' },
        { label: 'FAQ', id: 'faq' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms', id: 'terms' },
        { label: 'Privacy', id: 'privacy' },
        { label: 'Refund Policy', id: 'refund' },
        { label: 'Contact', id: 'contact' },
      ],
    },
  ]

  return (
    <footer className="ecf-footer" id="contact">
      <div className="ecf-footer-inner">
        <div className="ecf-footer-brand">
          <span className="ecf-mark" aria-hidden="true">ECF</span>
          <span className="ecf-footer-name">Earth Carbon Foundation</span>
          <p className="ecf-footer-tag">Connecting environmental projects and credits with buyers.</p>
        </div>

        <div className="ecf-footer-cols">
          {cols.map((c) => (
            <div className="ecf-footer-col" key={c.title}>
              <h4>{c.title}</h4>
              <ul>
                {c.links.map((l) => (
                  <li key={l.label}>
                    <button className="ecf-footer-link" onClick={() => go(l.id)}>{l.label}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="ecf-footer-bottom">
        <span>© {new Date().getFullYear()} Earth Carbon Foundation. Prototype — figures are illustrative.</span>
      </div>
    </footer>
  )
}
