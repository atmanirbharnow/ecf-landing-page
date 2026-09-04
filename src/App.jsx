import React, { useState } from 'react';
import './App.css';

const LINKS = {
  cal: 'https://cal.com/amit-sinh-earth-carbon-wbfdu4',
  whatsapp: 'https://wa.me/919824025431?text=Hi%20ECF!%20I%20am%20interested%20in%20a%20Free%20Gap%20Analysis.'
};

export default function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phone: '',
    interest: 'Turnkey Baseline + Audit (₹44,999)'
  });
  const [submitted, setSubmitted] = useState(false);

  const openExternal = (url) => window.open(url, '_blank', 'noopener,noreferrer');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const msg = `*Gap Analysis Request:*%0A- *Name:* ${encodeURIComponent(formData.fullName)}%0A- *Company:* ${encodeURIComponent(formData.companyName)}%0A- *Email:* ${encodeURIComponent(formData.workEmail)}%0A- *Phone:* ${encodeURIComponent(formData.phone)}%0A- *Interest:* ${encodeURIComponent(formData.interest)}`;
    window.open(`https://wa.me/919824025431?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="b2b-page">
      {/* 1. TOP NAVBAR */}
      <nav className="b2b-nav">
        <div className="b2b-container b2b-nav-inner">
          <div className="b2b-logo">
            <span className="b2b-logo-bold">Earth Carbon Foundation</span>
            <span className="b2b-logo-sub">Environmental Self-Reliance</span>
          </div>
          <div className="b2b-nav-links">
            <a href="#the-math">The Math</a>
            <a href="#journey">The 7-Step Journey</a>
            <a href="#evidence">Evidence & Trust</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="b2b-nav-actions">
            <button className="b2b-btn-primary" onClick={() => openExternal(LINKS.cal)}>
              Book Free Gap Analysis ↗
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="b2b-hero">
        <div className="b2b-container text-center">
          <div className="b2b-pill">⚡ Fractional Environmental Architecture for Industry</div>
          <h1 className="b2b-hero-title">
            Environmental Readiness Shouldn't Be Complicated.
          </h1>
          <p className="b2b-hero-subtitle">
            Turn statutory compliance into measurable net profit. We combine automated utility bill extraction, digital facility vaults, and pooled sub-15 MW carbon monetization so your factory stays audit-ready without full-time ESG overhead.
          </p>
          <div className="b2b-hero-cta">
            <button className="b2b-btn-primary b2b-btn-lg" onClick={() => openExternal(LINKS.cal)}>
              Start My ECF Journey (Free Audit) ↗
            </button>
            <a href="#the-math" className="b2b-btn-outline b2b-btn-lg">
              Explore Financial Logic
            </a>
          </div>
          <div className="b2b-trust-row">
            <span>✓ Auto DISCOM Bill Fetching</span>
            <span>•</span>
            <span>✓ BRSR Core & CBAM Defensible</span>
            <span>•</span>
            <span>✓ Verra & Gold Standard PoA Aggregation</span>
          </div>
        </div>
      </section>

      {/* 3. 7-STAGE VERIFIABLE PATH */}
      <section id="journey" className="b2b-section bg-light">
        <div className="b2b-container text-center">
          <div className="b2b-pill">Step-by-Step Architecture</div>
          <h2 className="b2b-section-title">The 7-Stage Guided Journey</h2>
          <p className="b2b-section-desc">
            Engineered specifically for manufacturing MSMEs. From raw baseline data to verified carbon yields.
          </p>

          <div className="journey-flow-grid">
            <div className="journey-step-card">
              <span className="journey-step-badge">STEP 1</span>
              <div>
                <h4>Register & Verify (5 Mins)</h4>
                <p>Automatic corporate record extraction via official GSTIN and Udyam filings. Zero manual paperwork.</p>
              </div>
            </div>

            <div className="journey-step-card">
              <span className="journey-step-badge">STEP 2</span>
              <div>
                <h4>ECF Connect: Automated Data Ingestion</h4>
                <p>Direct ingestion of DISCOM electricity bills, fuel ledgers, and boiler logs. We never ask you to type what can be retrieved automatically.</p>
              </div>
            </div>

            <div className="journey-step-card">
              <span className="journey-step-badge">STEP 3</span>
              <div>
                <h4>Build Your GHG Baseline</h4>
                <p>Digital facility vault compiles Scope 1 & 2 emissions alongside thermal and electrical intensities.</p>
              </div>
            </div>

            <div className="journey-step-card">
              <span className="journey-step-badge">STEP 4</span>
              <div>
                <h4>Pathway Engine & Gap Analysis</h4>
                <p>Cross-referencing your facility requirements against EU CBAM, SEBI BRSR, and ISO 14064 standards.</p>
              </div>
            </div>

            <div className="journey-step-card">
              <span className="journey-step-badge">STEP 5</span>
              <div>
                <h4>Improve & Cut Utility Bills</h4>
                <p>Targeted on-site walkthroughs locate electrical, boiler, and motor inefficiencies to reduce monthly plant tariffs.</p>
              </div>
            </div>

            <div className="journey-step-card">
              <span className="journey-step-badge">STEP 6</span>
              <div>
                <h4>Document & Export Audit Vault</h4>
                <p>1-click, tamper-evident audit packages formatted for banking covenants and Tier-1 OEM vendor questionnaires.</p>
              </div>
            </div>

            <div className="journey-step-card" style={{ borderLeft: '4px solid var(--accent-mint)', background: '#f0fdf4' }}>
              <span className="journey-step-badge" style={{ background: 'var(--accent-mint)', color: '#0b1e17' }}>STEP 7</span>
              <div>
                <h4>PoA Aggregation & Monetization</h4>
                <p>Sub-15 MW solar or energy upgrades join ECF’s carbon pool with ₹0 upfront registry fees. Your facility retains 75% of sales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE MATH & FINANCIAL MODEL */}
      <section id="the-math" className="b2b-section bg-white">
        <div className="b2b-container text-center">
          <div className="b2b-pill">Direct Cost Contrast</div>
          <h2 className="b2b-section-title">Why the Hybrid Model Wins</h2>
          <p className="b2b-section-desc">Comparing full-time payroll vs. agency retainers vs. ECF.</p>

          <div className="roi-table-scroll">
            <table className="roi-table-v2">
              <thead>
                <tr>
                  <th>Approach</th>
                  <th>Annual Cost</th>
                  <th>Data Automation</th>
                  <th>Carbon Aggregation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Full-Time ESG Officer</strong></td>
                  <td>₹6,00,000 – ₹9,00,000</td>
                  <td>Manual Excel tracking</td>
                  <td>0% (In-house barrier)</td>
                </tr>
                <tr>
                  <td><strong>Big Agency Retainer</strong></td>
                  <td>₹1,50,000 – ₹3,00,000</td>
                  <td>Static PDF reports</td>
                  <td>0% (Locked out)</td>
                </tr>
                <tr className="roi-winner-row">
                  <td><strong>Earth Carbon Hybrid</strong></td>
                  <td>₹44,999 one-time</td>
                  <td>Automated Vault & Ingestion</td>
                  <td>75% Net Payout to Facility</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. LIVE COHORT DATA */}
      <section id="evidence" className="b2b-section bg-light">
        <div className="b2b-container text-center">
          <div className="b2b-pill">Live Cohort Transparency</div>
          <h2 className="b2b-section-title">Evidence-Backed MSME Progress</h2>
          <p className="b2b-section-desc">Audited figures across our operational industrial network.</p>

          <div className="cohort-metrics-grid">
            <div className="cohort-stat-box">
              <div className="cohort-stat-val">800+</div>
              <div className="cohort-stat-label">Sites Onboarded</div>
            </div>
            <div className="cohort-stat-box">
              <div className="cohort-stat-val">17,000+</div>
              <div className="cohort-stat-label">tCO₂e Verified Baseline</div>
            </div>
            <div className="cohort-stat-box">
              <div className="cohort-stat-val">₹0</div>
              <div className="cohort-stat-label">Upfront Registry Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRICING SECTION */}
      <section id="pricing" className="b2b-section bg-white">
        <div className="b2b-container text-center">
          <div className="b2b-pill">Clear Investment</div>
          <h2 className="b2b-section-title">Transparent, Unbundled Tiers</h2>
          <p className="b2b-section-desc">One setup fee unlocks baseline documentation and carbon pooling.</p>

          <div className="b2b-grid-3 text-left">
            <div className="b2b-price-card b2b-price-featured">
              <div>
                <h3>1. Turnkey Setup</h3>
                <div className="b2b-price-val">₹44,999 <small>one-time</small></div>
                <ul className="b2b-price-list">
                  <li>✓ Digital facility vault setup</li>
                  <li>✓ Scope 1 & 2 GHG audit report</li>
                  <li>✓ On-site walkthrough calibration</li>
                  <li>✓ Senior GHG practitioner review</li>
                </ul>
              </div>
              <button className="b2b-btn-primary w-full" onClick={() => openExternal(LINKS.cal)}>
                Book Free Gap Analysis ↗
              </button>
            </div>

            <div className="b2b-price-card">
              <div>
                <h3>2. Reporting Add-ons</h3>
                <div className="b2b-price-val">₹40,000 <small>on-demand</small></div>
                <ul className="b2b-price-list">
                  <li>✓ SEBI BRSR Core compliance</li>
                  <li>✓ EU CBAM export packaging</li>
                  <li>✓ CDP supply chain submissions</li>
                  <li>✓ ₹10k/yr ongoing vault renewal</li>
                </ul>
              </div>
              <a href="#contact" className="b2b-btn-outline w-full text-center">
                Select Add-on In Form ↓
              </a>
            </div>

            <div className="b2b-price-card b2b-price-monetize">
              <div>
                <h3 className="text-white">3. PoA Carbon Pool</h3>
                <div className="b2b-price-val text-mint">₹0 <small className="text-white">Upfront</small></div>
                <ul className="b2b-price-list text-white-80">
                  <li>✓ Sub-15 MW asset pooling</li>
                  <li>✓ Zero registry verification fees</li>
                  <li>✓ 75% net proceeds to your plant</li>
                  <li>✓ Institutional buyer off-take</li>
                </ul>
              </div>
              <button className="b2b-btn-mint w-full" onClick={() => openExternal(LINKS.cal)}>
                Check Asset Eligibility ↗
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT & INTAKE FORM */}
      <section id="contact" className="b2b-section bg-light">
        <div className="b2b-container">
          <div className="glass-card" style={{ maxWidth: '640px', margin: '0 auto' }}>
            <h3 className="text-center" style={{ fontSize: '24px', fontWeight: 800, marginBottom: '8px' }}>
              Schedule Your Free Half-Day Gap Analysis
            </h3>
            <p className="text-center" style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>
              We'll map your plant's energy baseline, identify utility leakages, and check carbon credit eligibility.
            </p>

            {submitted ? (
              <div style={{ background: '#e8f5e9', border: '1px solid #2e7d32', padding: '20px', borderRadius: '8px', color: '#1b5e20', textAlign: 'center' }}>
                <h4>✓ Request Received</h4>
                <p style={{ marginTop: '6px', fontSize: '13px' }}>Our technical team will review your plant profile and reach out within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div style={{ marginBottom: '14px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>Full Name</label>
                  <input style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--border-subtle)', borderRadius: '8px' }} type="text" name="fullName" required placeholder="e.g. Rajesh Shah" onChange={handleInputChange} />
                </div>
                <div style={{ marginBottom: '14px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>Company / Plant Name</label>
                  <input style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--border-subtle)', borderRadius: '8px' }} type="text" name="companyName" required placeholder="e.g. Apex Engineering Works" onChange={handleInputChange} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>Work Email</label>
                    <input style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--border-subtle)', borderRadius: '8px' }} type="email" name="workEmail" required placeholder="name@company.com" onChange={handleInputChange} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>Phone</label>
                    <input style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--border-subtle)', borderRadius: '8px' }} type="tel" name="phone" required placeholder="+91 98240 XXXXX" onChange={handleInputChange} />
                  </div>
                </div>
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>Primary Focus</label>
                  <select style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--border-subtle)', borderRadius: '8px' }} name="interest" onChange={handleInputChange}>
                    <option value="Turnkey Baseline + Audit (₹44,999)">Turnkey Baseline + Audit (₹44,999)</option>
                    <option value="BRSR Core / CDP Support">BRSR Core / CDP Support</option>
                    <option value="CBAM Export Readiness">CBAM Export Readiness</option>
                    <option value="PoA Carbon Pooling">PoA Carbon Pooling (₹0 Upfront)</option>
                  </select>
                </div>
                <button type="submit" className="b2b-btn-primary w-full" style={{ padding: '14px' }}>
                  Request Free Gap Analysis →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="b2b-footer" style={{ background: '#091913', color: '#ffffff', padding: '48px 0', fontSize: '13px' }}>
        <div className="b2b-container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <strong>Earth Carbon Foundation</strong> © 2026. All rights reserved.
            <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>CIN: U85300GJ2019NPL106818 · Gujarat, India</div>
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="https://wa.me/919824025431" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-mint)', textDecoration: 'none' }}>WhatsApp Helpdesk</a>
            <a href={LINKS.cal} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-mint)', textDecoration: 'none' }}>Discovery Call</a>
          </div>
        </div>
      </footer>

      {/* 9. MOBILE BOTTOM APP BAR */}
      <nav className="mobile-app-bar">
        <a href="#the-math" className="active">
          <span>📊</span>
          <span>The Math</span>
        </a>
        <a href="#journey">
          <span>🧭</span>
          <span>7 Steps</span>
        </a>
        <a href="#pricing">
          <span>🏷️</span>
          <span>Pricing</span>
        </a>
        <a href="#contact">
          <span>📅</span>
          <span>Book</span>
        </a>
      </nav>
    </div>
  );
}