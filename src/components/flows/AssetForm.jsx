import { useState } from 'react'
import { FormGrid, Field, Confirmation } from './fields'

const ASSET_TYPES = ['Solar PV', 'Wind', 'Hydro / Water', 'Biogas / Waste', 'Forestry / Afforestation', 'Energy efficiency', 'Other']
const STATUS = ['Concept', 'In development', 'Operational', 'Decommissioned']

export default function AssetForm({ onClose, onBack }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    type: '', capacity: '', location: '', status: '',
    certification: '', name: '', email: '', phone: '',
  })

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 700)
  }

  if (submitted) {
    return (
      <Confirmation
        title="Assessment requested."
        message="Thank you. Your project has been submitted for ECF assessment and development."
        onClose={onClose}
      />
    )
  }

  return (
    <form onSubmit={submit}>
      <div className="ecf-asset-banner">
        <strong>ECF Assessment — ₹4,999</strong>
        <span>Submit your project for ECF assessment and development.</span>
      </div>
      <p className="ecf-asset-lead">
        Have an environmental project or asset that is not yet represented by certified credits?
      </p>

      <FormGrid>
        <Field label="Asset / project type">
          <select value={form.type} onChange={set('type')} required>
            <option value="">Select…</option>
            {ASSET_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Capacity / volume / area">
          <input value={form.capacity} onChange={set('capacity')} placeholder="e.g. 5 MW / 200 acres" required />
        </Field>
        <Field label="Location">
          <input value={form.location} onChange={set('location')} required />
        </Field>
        <Field label="Project status">
          <select value={form.status} onChange={set('status')} required>
            <option value="">Select…</option>
            {STATUS.map((s) => <option key={s}>{s}</option>)}
          </select>
        </Field>
        <Field label="Existing certification" optional span={2}>
          <input value={form.certification} onChange={set('certification')} placeholder="e.g. None / CDM / Verra" />
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
          {loading ? 'Submitting…' : 'START ASSET ASSESSMENT'}
        </button>
      </div>
    </form>
  )
}
