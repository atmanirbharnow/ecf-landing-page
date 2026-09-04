import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTrack, setModalTrack] = useState('MSME Journey');
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
            <a href="#effects">The Effects</a>
            <a href="#solution">ECF Solution</a>
            <a href="#journey">Your Journey</a>
            <a href="#participation">Participation</a>
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

      {/* ========================================================
          02 — THE PROBLEM (PROS VS CONS INFOGRAPHIC)
          ======================================================== */}
      <section id="problem" className="ecf-section text-center">
        <div className="ecf-container">
          <span className="section-tag">02 • The Problem</span>
          <h2 className="section-heading">You want to do the right thing. But where do you start?</h2>
          <p className="section-desc">MSMEs want the benefits of environmental compliance, but lack the team to navigate the burden:</p>

          <div className="glass-pearl pros-cons-card">
            <h3 className="pros-cons-title">MSME Environmental Responsibility</h3>
            
            <div className="pros-cons-board">
              {/* PROS COLUMN */}
              <div className="pros-column">
                <div className="column-header pros-header">
                  <span>✔</span>
                  <span>Pros</span>
                </div>
                <div className="pros-list">
                  <div className="infographic-item">
                    <div className="infographic-icon icon-pro">🌱</div>
                    <span>Customer demand</span>
                  </div>
                  <div className="infographic-item">
                    <div className="infographic-icon icon-pro">🛡️</div>
                    <span>Brand enhancement</span>
                  </div>
                  <div className="infographic-item">
                    <div className="infographic-icon icon-pro">🌐</div>
                    <span>Export compliance</span>
                  </div>
                </div>
              </div>

              {/* VS DIVIDER */}
              <div className="vs-divider">
                <div className="vs-line"></div>
                <div className="vs-badge">VS</div>
              </div>

              {/* CONS COLUMN */}
              <div className="cons-column">
                <div className="column-header cons-header">
                  <span>✖</span>
                  <span>Cons</span>
                </div>
                <div className="cons-list">
                  <div className="infographic-item">
                    <div className="infographic-icon icon-con">👨‍💼</div>
                    <span>Lack of expertise</span>
                  </div>
                  <div className="infographic-item">
                    <div className="infographic-icon icon-con">🤝</div>
                    <span>No hand-holding</span>
                  </div>
                  <div className="infographic-item">
                    <div className="infographic-icon icon-con">🪙</div>
                    <span>Funding limitations</span>
                  </div>
                  <div className="infographic-item">
                    <div className="infographic-icon icon-con">📑</div>
                    <span>Compliance burden</span>
                  </div>
                  <div className="infographic-item">
                    <div className="infographic-icon icon-con">🏢</div>
                    <span>No dedicated team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="core-punchline-card">
            "You shouldn't need an environmental department to become environmentally ready."
          </div>
        </div>
      </section>

      {/* ========================================================
          03 — THE EFFECTS (4 QUADRANTS "THE REAL RISK")
          ======================================================== */}
      <section id="effects" className="ecf-section text-center">
        <div className="ecf-container">
          <span className="section-tag">03 — THE EFFECTS</span>
          <h2 className="section-heading">THE PRESSURE KEEPS GROWING</h2>
          <p className="section-desc">For an MSME, environmental inaction can lead to:</p>

          <div className="effects-quadrant-wrapper">
            <div className="quadrant-grid">
              {/* REGULATORY */}
              <div className="quadrant-card regulatory">
                <div className="quadrant-icon-box bg-reg">⚖️</div>
                <div className="quadrant-content">
                  <h4>REGULATORY</h4>
                  <ul>
                    <li>Government</li>
                    <li>Pollution Control Board</li>
                    <li>Legal consequences</li>
                  </ul>
                </div>
              </div>

              {/* MARKET */}
              <div className="quadrant-card market">
                <div className="quadrant-icon-box bg-mkt">🌍</div>
                <div className="quadrant-content">
                  <h4>MARKET</h4>
                  <ul>
                    <li>Customers</li>
                    <li>Exports</li>
                    <li>Supply chains</li>
                    <li>Brand</li>
                  </ul>
                </div>
              </div>

              {/* BUSINESS */}
              <div className="quadrant-card business">
                <div className="quadrant-icon-box bg-biz">💼</div>
                <div className="quadrant-content">
                  <h4>BUSINESS</h4>
                  <ul>
                    <li>Financial losses</li>
                    <li>Business risk</li>
                    <li>Global pressure</li>
                  </ul>
                </div>
              </div>

              {/* PEOPLE & PLANET */}
              <div className="quadrant-card planet">
                <div className="quadrant-icon-box bg-plt">🍃</div>
                <div className="quadrant-content">
                  <h4>PEOPLE and PLANET</h4>
                  <ul>
                    <li>Public health</li>
                    <li>Environmental damage</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CENTER ORB */}
            <div className="center-risk-orb">
              <span className="risk-orb-text">THE<br />REAL<br />RISK</span>
            </div>
          </div>

          <div className="core-punchline-card" style={{ marginTop: '28px', textAlign: 'center' }}>
            “Environmental responsibility is no longer only about protecting the environment. It is increasingly part of protecting the business.”
            <div style={{ marginTop: '8px', color: 'var(--primary)', fontWeight: 800 }}>
              The pressure is real. The question is how to respond.
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          04 — ECF SOLUTION (HAND-HOLDING 6-STEP PIPELINE)
          ======================================================== */}
      <section id="solution" className="ecf-section text-center">
        <div className="ecf-container">
          <span className="section-tag">04 — ECF SOLUTION</span>
          <h2 className="section-heading">Hand-holding from start to finish.</h2>
          <p className="section-desc">
            You don't have to figure it all out yourself. ECF guides you step by step — from understanding your impact to creating environmental and business value.
          </p>

          {/* 6 PIPELINE CARDS */}
          <div className="solution-pipeline-container">
            <div className="pipeline-card step-1">
              <div className="pipeline-header">
                <div>
                  <div className="pipeline-num">STEP 1</div>
                  <div className="pipeline-title">UNDERSTAND</div>
                </div>
                <div className="pipeline-icon">🔍</div>
              </div>
              <p className="pipeline-desc">Know where your business stands and what responsibilities apply.</p>
              <div className="pipeline-arrow">↓</div>
            </div>

            <div className="pipeline-card step-2">
              <div className="pipeline-header">
                <div>
                  <div className="pipeline-num">STEP 2</div>
                  <div className="pipeline-title">MEASURE</div>
                </div>
                <div className="pipeline-icon">⚖️</div>
              </div>
              <p className="pipeline-desc">Measure your energy use, emissions, water, waste, and relevant impacts.</p>
              <div className="pipeline-arrow">↓</div>
            </div>

            <div className="pipeline-card step-3">
              <div className="pipeline-header">
                <div>
                  <div className="pipeline-num">STEP 3</div>
                  <div className="pipeline-title">COMPLY</div>
                </div>
                <div className="pipeline-icon">📋</div>
              </div>
              <p className="pipeline-desc">Understand requirements, close gaps, and reduce regulatory compliance risks.</p>
              <div className="pipeline-arrow">↓</div>
            </div>

            <div className="pipeline-card step-4">
              <div className="pipeline-header">
                <div>
                  <div className="pipeline-num">STEP 4</div>
                  <div className="pipeline-title">IMPROVE</div>
                </div>
                <div className="pipeline-icon">📈</div>
              </div>
              <p className="pipeline-desc">Identify practical low-carbon, resource-efficient, and cost-effective fixes.</p>
              <div className="pipeline-arrow">↓</div>
            </div>

            <div className="pipeline-card step-5">
              <div className="pipeline-header">
                <div>
                  <div className="pipeline-num">STEP 5</div>
                  <div className="pipeline-title">DOCUMENT</div>
                </div>
                <div className="pipeline-icon">📑</div>
              </div>
              <p className="pipeline-desc">Build the evidence, records, reports, and compliance documentation needed.</p>
              <div className="pipeline-arrow">↓</div>
            </div>

            <div className="pipeline-card step-6">
              <div className="pipeline-header">
                <div>
                  <div className="pipeline-num">STEP 6</div>
                  <div className="pipeline-title">CREATE VALUE</div>
                </div>
                <div className="pipeline-icon">🏆</div>
              </div>
              <p className="pipeline-desc">Where eligible, turn verified action into market recognition & financial value.</p>
            </div>
          </div>

          {/* 3 CORE PROMISES */}
          <div className="solution-triplet-grid">
            <div className="triplet-box">
              <h4>KNOW WHERE YOU STAND</h4>
              <p>A clear environmental baseline and readiness position.</p>
            </div>
            <div className="triplet-box">
              <h4>KNOW WHAT TO DO</h4>
              <p>A practical, step-by-step pathway for compliance and improvement.</p>
            </div>
            <div className="triplet-box">
              <h4>KNOW WHAT VALUE YOUR ACTIONS CAN CREATE</h4>
              <p>Environmental progress that strengthens your business and creates additional value.</p>
            </div>
          </div>

          <div style={{ marginTop: '30px' }}>
            <button className="btn-primary" onClick={() => openModal('MSME Guided Journey')}>
              [ START MY JOURNEY ]
            </button>
          </div>

          <div className="clarification-note">
            One small but important distinction: Compliance and impact reduction are related but different.<br />
            <strong>COMPLY</strong> = meet applicable requirements & reduce compliance risk. <strong>IMPROVE</strong> = reduce actual environmental impact.
          </div>
        </div>
      </section>

      {/* ========================================================
          05 — HOW WE DO IT (YOUR ECF JOURNEY TIMELINE)
          ======================================================== */}
      <section id="journey" className="ecf-section text-center">
        <div className="ecf-container">
          <span className="section-tag">05 • How We Do It</span>
          <h2 className="section-heading">Your ECF Journey</h2>
          <p className="section-desc">A 7-stage verifiable operational path for manufacturing and trading enterprises:</p>

          <div className="timeline-stepper">
            {/* STEP 1 */}
            <div className="timeline-step">
              <div className="timeline-badge">01<small>STEP</small></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>REGISTER & VERIFY</h3>
                  <span className="timeline-tag">5 mins</span>
                </div>
                <p>Business identity and operational structure. With <strong>ECF Connect</strong>, we automatically fetch and verify official corporate filings.</p>
                <div className="timeline-highlight-box">⚡ Auto-verification of GSTIN, Udyam, and official registrations.</div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-step">
              <div className="timeline-badge">02<small>STEP</small></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>CONNECT YOUR DATA</h3>
                  <span className="timeline-tag" style={{ color: 'var(--primary)' }}>Zero-Jargon Entry</span>
                </div>
                <p style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '4px' }}>
                  "Don't enter what ECF can retrieve or extract."
                </p>
                <p>Connect utility inputs: DISCOM power bills, gas logs, water meters, fuel ledgers, waste logs, and existing consent permits.</p>
                <div className="timeline-highlight-box">API Connection → Automated Ingestion → Document Extraction → Confirmation</div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-step">
              <div className="timeline-badge">03<small>STEP</small></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>BUILD YOUR BASELINE</h3>
                  <span className="timeline-tag">Audit Vault</span>
                </div>
                <p>ECF organizes the evidence and prepares your verified Scope 1 & 2 baseline according to standard GHG protocols.</p>
                <div className="step-pills">
                  <span className="step-pill">Total Energy</span>
                  <span className="step-pill">Scope 1 Direct</span>
                  <span className="step-pill">Scope 2 Grid</span>
                  <span className="step-pill">Water Consumption</span>
                  <span className="step-pill">Waste Profiles</span>
                </div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-step">
              <div className="timeline-badge">04<small>STEP</small></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>COMPLIANCE & READINESS</h3>
                  <span className="timeline-tag" style={{ color: 'var(--secondary)' }}>Pathway Engine</span>
                </div>
                <p style={{ fontWeight: 700, color: 'var(--secondary)', marginBottom: '4px' }}>
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
            </div>

            {/* STEP 5 */}
            <div className="timeline-step">
              <div className="timeline-badge">05<small>STEP</small></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>IMPROVE & REDUCE</h3>
                  <span className="timeline-tag">Operational ROI</span>
                </div>
                <p>ECF turns audit findings into tangible cost-saving and reduction projects:</p>
                <div className="timeline-highlight-box">FIND → PRIORITISE → ACT → MEASURE → REDUCE</div>
                <div className="step-pills">
                  <span className="step-pill">Energy Efficiency</span>
                  <span className="step-pill">Rooftop Renewables</span>
                  <span className="step-pill">Water Recirculation</span>
                  <span className="step-pill">Process Upgrades</span>
                </div>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-step">
              <div className="timeline-badge">06<small>STEP</small></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>DOCUMENT & REPORT</h3>
                  <span className="timeline-tag">Audit-Proof</span>
                </div>
                <p>Professional, tamper-evident outputs generated directly from verified records for clients, banks, and authorities.</p>
                <div className="timeline-highlight-box">📄 Client-Ready PDF Reports & Verified Registry Vault Links</div>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-step">
              <div className="timeline-badge" style={{ borderColor: 'var(--primary)', background: 'var(--primary)', color: '#fff' }}>07<small>STEP</small></div>
              <div className="timeline-content" style={{ border: '2px solid var(--primary)' }}>
                <div className="timeline-header">
                  <h3>VALUE / POA</h3>
                  <span className="timeline-tag" style={{ background: 'var(--primary)', color: '#fff' }}>Monetization</span>
                </div>
                <p>Where eligible, verified carbon reductions are pooled into ECF's aggregated Programme of Activities under agreed revenue-sharing terms.</p>
                <div className="timeline-highlight-box">Aggregation → Documentation → Registry Market Access → Settlement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — PARTICIPATION */}
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

      {/* 08 — COHORT PROGRESS */}
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

      {/* 10 — FOOTER */}
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

      {/* MOBILE BOTTOM APP BAR */}
      <nav className="mobile-app-bar">
        <a href="#problem" className="active"><span>⚠️</span><span>Problem</span></a>
        <a href="#effects"><span>⚡</span><span>Effects</span></a>
        <a href="#solution"><span>✨</span><span>Solution</span></a>
        <a href="#journey"><span>🧭</span><span>Journey</span></a>
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
                  <input type="text" name="companyName" required placeholder="e.g. Apex Engineering Works" onChange={handleInputChange} />
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