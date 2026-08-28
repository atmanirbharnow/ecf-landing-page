export function Confirmation({ title = "Thank you.", message, onClose, closeLabel = "Done" }) {
  return (
    <div className="confirmation">
      <div className="check" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>
      <h3>{title}</h3>
      <p>{message}</p>
      <button className="btn btn-primary" onClick={onClose}>{closeLabel}</button>
    </div>
  )
}

export function FormGrid({ children }) {
  return <div className="ecf-form-grid">{children}</div>
}

export function Field({ label, span, optional, children }) {
  return (
    <div className="field" style={span ? { gridColumn: `span ${span}` } : undefined}>
      <label>
        {label} {optional && <span className="opt">(optional)</span>}
      </label>
      {children}
    </div>
  )
}


