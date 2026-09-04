import React, { useState } from 'react';
import './App.css';

const CAL_LINK = 'https://cal.com/amit-sinh-earth-carbon-wbfdu4';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTrack, setModalTrack] = useState('MSME Journey'); // or 'Direct PoA'
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phone: '',
    track: 'MSME Guided Journey'
  });
  const [submitted, setSubmitted] = useState(false);

  const openModal = (trackName) => {
    setModalTrack(trackName);
    setFormData((prev) => ({ ...prev, track: trackName }));
    setSubmitted(false);
    setModalOpen(true);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const msg = `*ECF Journey Intake:*%0A- *Track:* ${encodeURIComponent(formData.track)}%0A- *Name:* ${encodeURIComponent(formData.fullName)}%0A- *Company:* ${encodeURIComponent(formData.companyName)}%0A- *Email:* ${encodeURIComponent(formData.workEmail)}%0A- *Phone:* ${encodeURIComponent(formData.phone)}`;
    window.open(`https://wa.me/919824025431?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="ecf-page">
      {/* TOP NAVIGATION */}
      <nav className="ecf-nav">
        <div className="ecf-container ecf-nav-inner">
          <a href="#" className="ecf-brand">
            <div className="ecf-brand-icon">🌱</div>
            <span className="ecf-brand-title">Earth Carbon Foundation</span>
          </a>
          <div className="ecf-nav-links">
            <a href="#problem">The Problem</a>
            <a href="#solution">ECF Solution</a>
            <a href="#how-it-works">How We Do It</a>
            <a href="#participation">Participation</a>
            <a href="#proof">Proof</a>
          </div>
          <div>
            <button className="btn-secondary btn-sm" onClick={() => openModal('MSME Guided Journey')}>
              Sign In / Intake
            </button>
          </div>
        </div>
      </nav>

      {/* 01 — HERO */}
      <section className="ecf-section text-center">
        <div className="ecf-container">
          <div className="glass-pearl hero-badge">
            <span>✨ FOR MSMEs & RESPONSIBLE BUSINESSES</span>
          </div>
          <h1 className="hero-title">
            Environmental readiness <br />
            <span className="hero-title-accent">shouldn't be complicated.</span>
          </h1>
          <p className="section-desc">
            ECF helps MSMEs understand their environmental impact, meet applicable requirements, reduce their footprint, and create value — step by step.
          </p>

          <div className="hero-bridge-card">
            <div className="hero-bridge-label">↳ The ECF Bridge</div>
            <p style={{ fontSize: '14px', color: 'var(--text-main)', margin: 0 }}>
              From where you are today <strong>→</strong> to a documented, compliant, and more responsible business.
            </p>
          </div>

          <div className="hero-cta-group">
            <button className="btn-primary" onClick={() => openModal('MSME Guided Journey')}>
              START MY ECF JOURNEY →
            </button>
            <button className="btn-secondary" onClick={() => openModal('Direct PoA Programme')}>
              DIRECT POA PROGRAMME
            </button>
          </div>

          <div className="hero-trust-line">
            <span>Guided</span>
            <span>•</span>
            <span>Evidence-based</span>
            <span>•</span>
            <span>Step-by-step</span>
          </div>
        </div>
      </section>

      {/* 02 — THE PROBLEM */}
      <section id="problem" className="ecf-section">
        <div className="ecf-container text-center">
          <span className="section-tag">02 • Industry Reality</span>
          <h2 className="section-heading">You want to do the right thing. But where do you start?</h2>
          <p className="section-desc">MSMEs face mounting compliance questions without clear operational guidance:</p>

          <div className="problem-grid">
            <div className="problem-chip">📋 Environmental compliance</div>
            <div className="problem-chip">⚡ Energy consumption</div>
            <div className="problem-chip">🏭 Carbon emissions</div>
            <div className="problem-chip">🤝 Customer requirements</div>
            <div className="problem-chip">📦 Export requirements</div>
            <div className="problem-chip">♻️ Waste and resources</div>
            <div className="problem-chip">📑 Environmental documentation</div>
            <div className="problem-chip">📈 Future regulatory expectations</div>
            <div className="problem-chip">🚫 No full-time ESG team</div>
          </div>

          <div className="core-problem-card">
            "You shouldn't need an environmental department to become environmentally ready."
          </div>
        </div>
      </section>

      {/* 03 — THE EFFECTS */}
      <section className="ecf-section">
        <div className="ecf-container text-center">
          <span className="section-tag">03 • Pressure & Impact</span>
          <h2 className="section-heading">The Pressure Keeps Growing</h2>
          <p className="section-desc">How external mandates cascade directly down onto the factory floor:</p>

          <div className="glass-pearl cascade-wrapper">
            <div style={{ fontSize: '13px', fontWeight: 800, textAlign: 'left', color: 'var(--secondary)' }}>
              THE EXTERNAL PRESSURE CASCADE
            </div>
            <div className="cascade-flow">
              <span className="cascade-node">GPCB / Authorities</span>
              <span>→</span>
              <span className="cascade-node">Environmental Rules</span>
              <span>→</span>
              <span className="cascade-node">Customer Expectations</span>
              <span>→</span>
              <span className="cascade-node">Export & Supply Chain</span>
              <span>→</span>
              <span className="cascade-node">Market Perception</span>
              <span>→</span>
              <span className="cascade-node cascade-danger">Business Risk</span>
            </div>
          </div>

          <div className="effects-grid">
            <div className="effect-item">
              <div className="effect-title">⚠️ Compliance Pressure</div>
              <div className="effect-desc">Anxiety over regulatory notices and audit timelines.</div>
            </div>
            <div className="effect-item">
              <div className="effect-title">❓ Operational Uncertainty</div>
              <div className="effect-desc">Unclear how changing rules impact procurement and upgrades.</div>
            </div>
            <div className="effect-item">
              <div className="effect-title">📉 Loss of Customer Confidence</div>
              <div className="effect-desc">Tier-1 OEM buyers demanding Scope 1 & 2 documentation.</div>
            </div>
            <div className="effect-item">
              <div className="effect-title">🏷️ Brand Devaluation</div>
              <div className="effect-desc">Risk of being perceived as an environmentally lagging unit.</div>
            </div>
            <div className="effect-item">
              <div className="effect-title">🚫 Reduced Market Acceptance</div>
              <div className="effect-desc">Filtered out of institutional and green tenders.</div>
            </div>
            <div className="effect-item">
              <div className="effect-title">💸 Potential Financial Losses</div>
              <div className="effect-desc">Tariffs, non-compliance fines, and expensive third-party consultancies.</div>
            </div>
          </div>

          <div className="core-problem-card" style={{ marginTop: '30px' }}>
            The problem isn't willingness. The problem is knowing what to do, what applies, and where to begin.
          </div>
        </div>
      </section>

      {/* 04 — ECF SOLUTION */}
      <section id="solution" className="ecf-section">
        <div className="ecf-container text-center">
          <span className="section-tag">04 • ECF Solution</span>
          <h2 className="section-heading">One guided journey. From baseline to business value.</h2>
          <p className="section-desc">ECF becomes your ongoing hand-holding layer:</p>

          <div className="cycle-matrix">
            <div className="cycle-step cycle-step-active">1. UNDERSTAND</div>
            <div className="cycle-step">2. MEASURE</div>
            <div className="cycle-step">3. COMPLY</div>
            <div className="cycle-step">4. IMPROVE</div>
            <div className="cycle-step">5. DOCUMENT</div>
            <div className="cycle-step cycle-step-active">6. CREATE VALUE</div>
          </div>

          <div className="promises-grid">
            <div className="promise-card">
              <h4>1. Know where you stand</h4>
              <p>Clear visibility into your current footprint and consumption with zero guesswork.</p>
            </div>
            <div className="promise-card">
              <h4>2. Know what you need to do</h4>
              <p>Prioritized, step-by-step action items customized directly to your sector.</p>
            </div>
            <div className="promise-card">
              <h4>3. Know what value it creates</h4>
              <p>Turn verified environmental actions into export access and aggregated monetization.</p>
            </div>
          </div>

          <button className="btn-primary" onClick={() => openModal('MSME Guided Journey')}>
            START MY JOURNEY →
          </button>
        </div>
      </section>

      {/* 05 — HOW WE DO IT */}
      <section id="how-it-works" className="ecf-section">
        <div className="ecf-container text-center">
          <span className="section-tag">05 • How We Do It</span>
          <h2 className="section-heading">Your ECF Journey</h2>
          <p className="section-desc">A 7-stage verifiable operational path for manufacturing and trading enterprises:</p>

          <div className="steps-container">
            <div className="glass-pearl step-card">
              <div className="step-header">
                <span className="step-tag">STEP 1</span>
                <span style={{ fontSize: '12px', color: 'var(--text-light)' }}>5 mins</span>
              </div>
              <h3>REGISTER & VERIFY</h3>
              <p>Business identity and operational structure. With <strong>ECF Connect</strong>, we automatically fetch and verify official corporate filings.</p>
              <div className="step-highlight">⚡ Auto-verification of GSTIN, Udyam, and official registrations.</div>
            </div>

            <div className="glass-pearl step-card">
              <div className="step-header">
                <span className="step-tag">STEP 2</span>
                <span style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: 700 }}>Zero-Jargon Entry</span>
              </div>
              <h3>CONNECT YOUR DATA</h3>
              <p style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '6px' }}>
                "Don't enter what ECF can retrieve or extract."
              </p>
              <p>Connect utility inputs: DISCOM power bills, gas logs, water meters, fuel ledgers, waste logs, and existing consent permits.</p>
              <div className="step-highlight">API Connection → Automated Ingestion → Document Extraction → Confirmation</div>
            </div>

            <div className="glass-pearl step-card">
              <div className="step-header">
                <span className="step-tag">STEP 3</span>
                <span style={{ fontSize: '12px', color: 'var(--text-light)' }}>Audit Vault</span>
              </div>
              <h3>BUILD YOUR BASELINE</h3>
              <p>ECF organizes the evidence and prepares your verified Scope 1 & 2 baseline according to standard GHG protocols.</p>
              <div className="step-pills">
                <span className="step-pill">Total Energy</span>
                <span className="step-pill">Scope 1 Direct</span>
                <span className="step-pill">Scope 2 Grid</span>
                <span className="step-pill">Water Consumption</span>
                <span className="step-pill">Waste Profiles</span>
              </div>
            </div>

            <div className="glass-pearl step-card">
              <div className="step-header">
                <span className="step-tag">STEP 4</span>
                <span style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: 700 }}>Pathway Engine</span>
              </div>
              <h3>COMPLIANCE & READINESS</h3>
              <p style={{ fontWeight: 700, color: 'var(--secondary)', marginBottom: '6px' }}>
                "You don't have to know which one applies. ECF helps identify the pathway."
              </p>
              <p>We match your facility attributes against regulatory mandates and buyer questionnaires.</p>
              <div className="step-pills">
                <span className="step-pill">BRSR Core</span>
                <span className="step-pill">CBAM (EU Export)</span>
                <span className="step-pill">ISO 14064</span>
                <span className="step-pill">SBTi Guidelines</span>
                <span className="step-pill">OEM ESG Forms</span>
              </div>
            </div>

            <div className="glass-pearl step-card">
              <div className="step-header">
                <span className="step-tag">STEP 5</span>
                <span style={{ fontSize: '12px', color: 'var(--text-light)' }}>Operational ROI</span>
              </div>
              <h3>IMPROVE & REDUCE</h3>
              <p>ECF turns audit findings into tangible cost-saving and reduction projects:</p>
              <div className="step-highlight">FIND → PRIORITISE → ACT → MEASURE → REDUCE</div>
              <div className="step-pills" style={{ marginTop: '10px' }}>
                <span className="step-pill">Energy Efficiency</span>
                <span className="step-pill">Rooftop Renewables</span>
                <span className="step-pill">Water Recirculation</span>
                <span className="step-pill">Process Upgrades</span>
              </div>
            </div>

            <div className="glass-pearl step-card">
              <div className="step-header">
                <span className="step-tag">STEP 6</span>
                <span style={{ fontSize: '12px', color: 'var(--text-light)' }}>Audit-Proof</span>
              </div>
              <h3>DOCUMENT & REPORT</h3>
              <p>Professional, tamper-evident outputs generated directly from verified records for clients, banks, and authorities.</p>
              <div className="step-highlight">📄 Client-Ready PDF Reports & Verified Registry Vault Links</div>
            </div>

            <div className="glass-pearl step-card" style={{ border: '2px solid var(--primary)' }}>
              <div className="step-header">
                <span className="step-tag" style={{ background: 'var(--primary)', color: '#fff' }}>STEP 7</span>
                <span style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: 800 }}>Monetization</span>
              </div>
              <h3>VALUE / POA</h3>
              <p>Where eligible, verified carbon reductions are pooled into ECF's aggregated Programme of Activities under agreed revenue-sharing terms.</p>
              <div className="step-highlight">Aggregation → Documentation → Registry Market Access → Settlement</div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — PAYMENT / PARTICIPATION */}
      <section id="participation" className="ecf-section">
        <div className="ecf-container text-center">
          <span className="section-tag">06 • Participation Models</span>
          <h2 className="section-heading">Choose How You Want to Participate</h2>
          <p className="section-desc">Clear models designed for real business requirements:</p>

          <div className="pricing-grid">
            <div className="glass-pearl price-card">
              <h4>ECF ENVIRONMENTAL JOURNEY</h4>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)' }}>Full step-by-step guidance from baseline to compliance and readiness.</p>
              <ul className="price-list">
                <li>✓ Membership & continuous digital vault</li>
                <li>✓ Scope 1 & 2 baseline and compliance filing</li>
                <li>✓ Dedicated technical gap analysis & shop-floor review</li>
                <li>✓ Optional value & carbon aggregation unlock</li>
              </ul>
              <button className="btn-primary w-full" onClick={() => openModal('ECF Environmental Journey')}>
                Enroll In Journey
              </button>
            </div>

            <div className="glass-pearl price-card" style={{ background: 'var(--surface-high)' }}>
              <h4>DIRECT POA PROGRAMME</h4>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)' }}>For eligible project or green activity owners seeking structured market monetization.</p>
              <ul className="price-list">
                <li>✓ Basic registration & eligibility validation</li>
                <li>✓ Zero upfront registry fee aggregation</li>
                <li>✓ Institutional buyer off-take access</li>
                <li>✓ 75% net payout on verified sales</li>
              </ul>
              <button className="btn-secondary w-full" onClick={() => openModal('Direct PoA Programme')}>
                Explore Direct POA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — PROOF & TRUST */}
      <section id="proof" className="ecf-section">
        <div className="ecf-container text-center">
          <span className="section-tag">07 • Verifiability</span>
          <h2 className="section-heading">Built around evidence, not promises.</h2>
          <p className="section-desc">Every output is anchored in physical and digital verification trails:</p>

          <div className="proof-grid">
            <div className="proof-card">
              <h5>1. Business Verification</h5>
              <ul>
                <li>✓ Identity verification</li>
                <li>✓ Official filings match</li>
                <li>✓ Facility boundary lock</li>
              </ul>
            </div>
            <div className="proof-card">
              <h5>2. Environmental Evidence</h5>
              <ul>
                <li>✓ Utility DISCOM records</li>
                <li>✓ Fuel & meter receipts</li>
                <li>✓ Documented logs</li>
              </ul>
            </div>
            <div className="proof-card">
              <h5>3. Compliance Trail</h5>
              <ul>
                <li>✓ Applicable mandates</li>
                <li>✓ Tamper-evident vaults</li>
                <li>✓ Auditor-ready PDFs</li>
              </ul>
            </div>
            <div className="proof-card">
              <h5>4. Value Integrity</h5>
              <ul>
                <li>✓ Activity aggregation</li>
                <li>✓ Standardized registry</li>
                <li>✓ Transparent settlement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 08 — COHORT COMMUNITY PROGRESS */}
      <section className="ecf-section">
        <div className="ecf-container text-center">
          <span className="section-tag">08 • Cohort Transparency</span>
          <h2 className="section-heading">ECF Community Progress</h2>
          <p className="section-desc">Verified operational data across onboarding clusters. No artificial counters.</p>

          <div className="cohort-grid">
            <div className="glass-pearl cohort-stat">
              <div className="cohort-num">00</div>
              <div className="cohort-label">Businesses Onboarded</div>
            </div>
            <div className="glass-pearl cohort-stat">
              <div className="cohort-num">00</div>
              <div className="cohort-label">Units Assessed</div>
            </div>
            <div className="glass-pearl cohort-stat">
              <div className="cohort-num">00</div>
              <div className="cohort-label">Energy Data Processed</div>
            </div>
            <div className="glass-pearl cohort-stat">
              <div className="cohort-num">00</div>
              <div className="cohort-label">tCO₂e Assessed</div>
            </div>
            <div className="glass-pearl cohort-stat">
              <div className="cohort-num">00</div>
              <div className="cohort-label">Improvement Actions</div>
            </div>
            <div className="glass-pearl cohort-stat">
              <div className="cohort-num">00</div>
              <div className="cohort-label">Projects in Pipeline</div>
            </div>
          </div>
        </div>
      </section>

      {/* 09 — FINAL CTA */}
      <section className="ecf-section text-center">
        <div className="ecf-container">
          <div className="glass-pearl final-cta-card">
            <h2 className="section-heading">Your environmental journey can start with one step.</h2>
            <p className="section-desc" style={{ marginBottom: '24px' }}>
              Tell us who you are. ECF will help you understand what comes next.
            </p>
            <button className="btn-primary" onClick={() => openModal('MSME Guided Journey')}>
              START MY ECF JOURNEY →
            </button>
            <div style={{ marginTop: '20px', fontSize: '13px', color: 'var(--text-light)' }}>
              Already registered? <a href="#" style={{ color: 'var(--primary)', fontWeight: 700 }} onClick={(e) => { e.preventDefault(); openModal('Login'); }}>LOGIN TO DASHBOARD</a>
              <span style={{ margin: '0 8px' }}>•</span>
              Have an existing project? <a href="#" style={{ color: 'var(--secondary)', fontWeight: 700 }} onClick={(e) => { e.preventDefault(); openModal('Direct PoA Programme'); }}>EXPLORE DIRECT POA</a>
            </div>
          </div>
        </div>
      </section>

      {/* 10 — COMPREHENSIVE FOOTER */}
      <footer className="ecf-footer">
        <div className="ecf-container">
          <div className="footer-grid">
            <div className="footer-col">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span>🌱</span>
                <strong style={{ fontSize: '15px' }}>Earth Carbon Foundation</strong>
              </div>
              <p style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>
                Empowering Indian MSMEs to navigate decarbonization, regulatory compliance, and sustainable economic value creation.
              </p>
            </div>
            <div className="footer-col">
              <h5>ECF</h5>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">How ECF Works</a></li>
                <li><a href="#">The Journey</a></li>
                <li><a href="#">Payment Plans</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Customer</h5>
              <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); openModal('Customer Login'); }}>Login</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); openModal('Customer Dashboard'); }}>Dashboard</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); openModal('Customer Intake'); }}>Customer Intake</a></li>
                <li><a href="#">Documents</a></li>
                <li><a href="#">Payments</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Environmental</h5>
              <ul>
                <li><a href="#">Scope 1 & 2</a></li>
                <li><a href="#">BRSR</a></li>
                <li><a href="#">CBAM</a></li>
                <li><a href="#">SBTi</a></li>
                <li><a href="#">Net Zero</a></li>
                <li><a href="#">ISO Readiness</a></li>
                <li><a href="#">POA Programme</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Trust & Legal</h5>
              <ul>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Data Policy</a></li>
                <li><a href="#">Participation Terms</a></li>
                <li><a href="#">Disclosures</a></li>
              </ul>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', fontSize: '11.5px', color: 'var(--text-light)' }}>
            <div>CIN: U85300GJ2019NPL106818 · Gujarat, India</div>
            <div>© 2026 Earth Carbon Foundation. All rights reserved.</div>
          </div>
        </div>
      </footer>

      {/* BOTTOM MOBILE APP BAR */}
      <nav className="mobile-app-bar">
        <a href="#problem" className="active"><span>⚠️</span><span>Problem</span></a>
        <a href="#solution"><span>✨</span><span>Solution</span></a>
        <a href="#how-it-works"><span>🧭</span><span>Journey</span></a>
        <a href="#participation"><span>🏷️</span><span>Models</span></a>
        <a href="#" onClick={(e) => { e.preventDefault(); openModal('Mobile Quick Intake'); }}><span>🚀</span><span>Intake</span></a>
      </nav>

      {/* INTAKE MODAL */}
      {modalOpen && (
        <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="glass-pearl modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)}>×</button>
            <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '6px' }}>{modalTrack}</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '18px' }}>
              Tell us about your facility. ECF will guide you through your baseline and next steps.
            </p>

            {submitted ? (
              <div style={{ padding: '16px', background: 'var(--surface-high)', borderRadius: '10px', textAlign: 'center' }}>
                <p style={{ fontWeight: 700, color: 'var(--primary)' }}>✓ Request Transmitted</p>
                <p style={{ fontSize: '12.5px', marginTop: '4px' }}>Connecting to our senior GHG team...</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="fullName" required placeholder="e.g. Rajesh Shah" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label>Company / Plant Name</label>
                  <input type="text" name="companyName" required placeholder="e.g. Gujarat Auto Ancillary Ltd." onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label>Work Email</label>
                  <input type="email" name="workEmail" required placeholder="name@factory.com" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label>Phone / WhatsApp</label>
                  <input type="tel" name="phone" required placeholder="+91 98240 XXXXX" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label>Participation Track</label>
                  <select name="track" value={formData.track} onChange={handleInputChange}>
                    <option value="MSME Guided Journey">MSME Guided Journey</option>
                    <option value="Direct PoA Programme">Direct PoA Programme</option>
                    <option value="Scope 1 & 2 / BRSR Audit">Scope 1 & 2 / BRSR Audit</option>
                  </select>
                </div>
                <button type="submit" className="btn-primary w-full" style={{ marginTop: '10px' }}>
                  Proceed to Onboarding →
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}