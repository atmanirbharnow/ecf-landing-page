import { useState } from 'react'
import { FormGrid, Field, Confirmation } from './fields'

const REGISTRIES = ['Verra (VCS)', 'Gold Standard', 'CDM', 'Indian registry', 'Other']
const TYPES = ['Solar', 'Water', 'Waste-to-energy', 'Forestry / Nature', 'Energy efficiency', 'Other']

export default function CertifiedForm({ onClose, onBack }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    registry: '', project: '', methodology: '', credits: '',
    vintage: '', country: '', link: '', terms: '', name: '', email: '', phone: '',
  })

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 600)
  }

  if (submitted) {
    return (
      <Confirmation
        title="Credits received."
        message="Thank you. Your credits have been submitted for sale."
        onClose={onClose}
      />
    )
  }

  return (
    <form onSubmit={submit}>
      <FormGrid>
        <Field label="Registry">
          <select value={form.registry} onChange={set('registry')} required>
            <option value="">Select…</option>
            {REGISTRIES.map((r) => <option key={r}>{r}</option>)}
          </select>
        </Field>
        <Field label="Project name / type">
          <select value={form.project} onChange={set('project')} required>
            <option value="">Select…</option>
            {TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Methodology / project type">
          <input value={form.methodology} onChange={set('methodology')} required />
        </Field>
        <Field label="Available credits">
          <input value={form.credits} onChange={set('credits')} placeholder="e.g. 12,000" required />
        </Field>
        <Field label="Vintage">
          <input value={form.vintage} onChange={set('vintage')} placeholder="e.g. 2024" required />
        </Field>
        <Field label="Country">
          <input value={form.country} onChange={set('country')} required />
        </Field>
        <Field label="Registry / project link" span={2}>
          <input value={form.link} onChange={set('link')} placeholder="https://" />
        </Field>
        <Field label="Asking price / terms" span={2}>
          <input value={form.terms} onChange={set('terms')} placeholder="e.g. ₹X per credit / negotiable" required />
        </Field>
        <Field label="Contact name">
          <input value={form.name} onChange={set('name')} required />
        </Field>
        <Field label="Email">
          <input type="email" value={form.email} onChange={set('email')} required />
        </Field>
        <Field label="Phone" span={2}>
          <input value={form.phone} onChange={set('phone')} placeholder="+91…" required />
        </Field>
      </FormGrid>

      <div className="ecf-form-actions">
        <button type="button" className="btn btn-ghost" onClick={onBack}>Back</button>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Submitting…' : 'SUBMIT CREDITS FOR SALE'}
        </button>
      </div>
    </form>
  )
}
