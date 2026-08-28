const METRICS = [
  { label: 'Projects assessed', value: '128' },
  { label: 'Projects under development', value: '42' },
  { label: 'Capacity / assets under assessment', value: '680 MW+' },
  { label: 'Buyers registered', value: '57' },
  { label: 'Credits available', value: '1.2M' },
]

const PROGRAMMES = [
  { label: 'Solar', pct: 46, color: 'var(--accent)' },
  { label: 'Water', pct: 22, color: 'var(--secondary)' },
  { label: 'Waste', pct: 18, color: 'var(--primary)' },
  { label: 'Nature', pct: 14, color: '#5a8f6a' },
]

export default function Progress() {
  return (
    <section id="progress" className="section ecf-progress-section">
      <span className="section-eyebrow">ECF Progress</span>
      <h2 className="section-title">Progress at a glance</h2>
      <p className="section-sub">Example figures shown as placeholders until connected to live data.</p>

      <div className="ecf-metrics">
        {METRICS.map((m) => (
          <div className="ecf-metric" key={m.label}>
            <span className="ecf-metric-value">{m.value}</span>
            <span className="ecf-metric-label">{m.label}</span>
            <span className="ecf-metric-demo">demo</span>
          </div>
        ))}
      </div>

      <div className="ecf-programmes">
        <h3 className="ecf-programmes-title">Programme breakdown</h3>
        <div className="ecf-prog-bar" aria-hidden="true">
          {PROGRAMMES.map((p) => (
            <div
              key={p.label}
              className="ecf-prog-seg"
              style={{ width: `${p.pct}%`, background: p.color }}
            />
          ))}
        </div>
        <div className="ecf-prog-legend">
          {PROGRAMMES.map((p) => (
            <div className="ecf-prog-item" key={p.label}>
              <span className="ecf-prog-dot" style={{ background: p.color }} />
              <span>{p.label}</span>
              <span className="ecf-prog-pct">{p.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
