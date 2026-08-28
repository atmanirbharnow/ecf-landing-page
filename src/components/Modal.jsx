import { useEffect } from 'react'

function lockScroll() {
  document.body.style.overflow = 'hidden'
}
function unlockScroll() {
  document.body.style.overflow = ''
}

export default function Modal({ open, title, sub, onClose, children, maxWidth }) {
  useEffect(() => {
    if (!open) return
    lockScroll()
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      unlockScroll()
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal" style={maxWidth ? { maxWidth } : undefined}>
        <div className="modal-header">
          <div>
            <h3 className="modal-title">{title}</h3>
            {sub && <p className="modal-sub">{sub}</p>}
          </div>
          <button type="button" className="modal-close" aria-label="Close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}
