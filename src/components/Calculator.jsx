import { useMemo, useState } from 'react'

const ASSET_TYPES = [
  { id: 'solar', label: 'Solar PV', unit: 'kW', creditsPerUnit: 0.0007, pricePerCredit: 420 },
  { id: 'water', label: 'Water project', unit: 'households', creditsPerUnit: 0.35, pricePerCredit: 380 },
  { id: 'waste', label: 'Waste-to-energy', unit: 'tonnes/year', creditsPerUnit: 0.5, pricePerCredit: 540 },
  { id: 'nature', label: 'Forestry / Nature', unit: 'hectares', creditsPerUnit: 8, pricePerCredit: 620 },
  { id: 'energy', label: 'Energy efficiency', unit: 'MWh saved', creditsPerUnit: 0.8, pricePerCredit: 360 },
]

export default function Calculator() {
  const [typeId, setTypeId] = useState('solar')
  const [volume, setVolume] = useState('')
  const active = ASSET_TYPES.find((t) => t.id === typeId)

  const result = useMemo(() => {
    const v = parseFloat(volume)
    if (!v || v <= 0) return null
    const credits = v * active.creditsPerUnit
    const value = credits * active.pricePerCredit
    return {
      credits: credits.toLocaleString('en-IN', { maximumFractionDigits: 0 }),
      value: value.toLocaleString('en-IN', { maximumFractionDigits: 0 }),
    }
  }, [volume, active])

  return (
    <section id="calculator" className="section ecf-calc-section">
      <div className="ecf-calc">
        <div className="ecf-calc-head">
          <span className="section-eyebrow">Free Calculator</span>
          <h2 className="section-title">Want a quick indication?</h2>
          <p className="section-sub">Estimate the potential environmental value of your asset.</p>
        </div>

        <div className="ecf-calc-grid">
          <div className="ecf-calc-field">
            <label htmlFor="calc-asset">Asset</label>
            <select id="calc-asset" value={typeId} onChange={(e) => setTypeId(e.target.value)}>
              {ASSET_TYPES.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
            </select>
          </div>

          <div className="ecf-calc-field">
            <label htmlFor="calc-vol">Capacity / Volume / Area ({active.unit})</label>
            <input
              id="calc-vol"
              type="number"
              min="0"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              placeholder={`Enter ${active.unit}`}
            />
          </div>

          <div className="ecf-calc-field">
            <label>Estimated Impact</label>
            <div className="ecf-calc-output">
              {result ? `${result.credits} credits / yr` : '—'}
            </div>
          </div>

          <div className="ecf-calc-field">
            <label>Indicative Value</label>
            <div className="ecf-calc-output ecf-calc-value">
              {result ? `₹${result.value} / yr` : '—'}
            </div>
          </div>
        </div>

        <p className="ecf-calc-disclaimer">
          Illustrative only. Estimates use placeholder assumptions and are not a valuation or offer.
        </p>
      </div>
    </section>
  )
}
