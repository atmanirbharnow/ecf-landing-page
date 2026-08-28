import { useState } from 'react'
import { FormGrid, Field, Confirmation } from './fields'

const TYPES = ['Solar', 'Water', 'Waste-to-energy', 'Forestry / Nature', 'Energy efficiency', 'Other']
const REGIONS = ['India', 'South Asia', 'Southeast Asia', 'Africa', 'Middle East', 'Europe', 'Americas', 'Any']
const STANDARDS = ['Verra (VCS)', 'Gold Standard', 'CDM', 'Indian registry', 'Other / flexible']

export default function BuyForm({ onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    type: '', quantity: '', region: '', vintage: '', standard: '',
    price: '', company: '', name: '', email: '', phone: '',
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
        message="Your requirement has been received by ECF."
        onClose={onClose}
      />
    )
  }

  return (
    <form onSubmit={submit}>
      <FormGrid>
        <Field label="Credit / project type">
          <select value={form.type} onChange={set('type')} required>
            <option value="">Select…</option>
            {TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Quantity required">
          <input value={form.quantity} onChange={set('quantity')} placeholder="e.g. 5,000" required />
        </Field>
        <Field label="Preferred country / region">
          <select value={form.region} onChange={set('region')} required>
            <option value="">Select…</option>
            {REGIONS.map((r) => <option key={r}>{r}</option>)}
          </select>
        </Field>
        <Field label="Vintage">
          <input value={form.vintage} onChange={set('vintage')} placeholder="e.g. 2024" required />
        </Field>
        <Field label="Preferred standard / registry">
          <select value={form.standard} onChange={set('standard')} required>
            <option value="">Select…</option>
            {STANDARDS.map((s) => <option key={s}>{s}</option>)}
          </select>
        </Field>
        <Field label="Price expectation" optional>
          <input value={form.price} onChange={set('price')} placeholder="e.g. ₹ per credit" />
        </Field>
        <Field label="Company" span={2}>
          <input value={form.company} onChange={set('company')} required />
        </Field>
        <Field label="Name">
          <input value={form.name} onChange={set('name')} required />
        </Field>
        <Field label="Email">
          <input type="email" value={form.email} onChange={set('email')} required />
        </Field>
        <Field label="Phone" span={2}>
          <input value={form.phone} onChange={set('phone')} placeholder="+91…" required />
        </Field>
      </FormGrid>

      <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: 20 }} disabled={loading}>
        {loading ? 'Submitting…' : 'SUBMIT BUYING REQUIREMENT'}
      </button>
    </form>
  )
}
