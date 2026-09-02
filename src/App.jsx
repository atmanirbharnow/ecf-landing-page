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

  const openExternal = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
      {/* 1. COMPACT NAVIGATION */}
      <nav className="b2b-nav">
        <div className="b2b-container b2b-nav-inner">
          <div className="b2b-logo">
            <span className="b2b-logo-bold">Earth Carbon Foundation</span>
            <span className="b2b-logo-sub">Environmental Self-Reliance</span>
          </div>
          <div className="b2b-nav-links">
            <a href="#formula">The Math</a>
            <a href="#pillars">What Changes</a>
            <a href="#comparison">Compare Models</a>
            <a href="#pricing">Investment</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="b2b-nav-actions">
            <button className="b2b-btn-primary" onClick={() => openExternal(LINKS.cal)}>
              Book Free Gap Analysis ↗
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO: FOCUSED VALUE PROPOSITION */}
      <section className="b2b-hero">
        <div className="b2b-container text-center">
          <div className="b2b-pill">⚡ Fractional Environmental Architecture for Industry</div>
          <h1 className="b2b-hero-title">Turn Sustainability Compliance into Net Profit.</h1>
          <p className="b2b-hero-subtitle">
            Senior GHG expertise, automated audit vaults, and zero-upfront carbon aggregation—engineered to eliminate permanent manpower liabilities and make compliance self-funding.
          </p>
          <div className="b2b-hero-cta">
            <button className="b2b-btn-primary b2b-btn-lg" onClick={() => openExternal(LINKS.cal)}>
              Book a Free Half-Day Gap Analysis ↗
            </button>
            <a href="#formula" className="b2b-btn-outline b2b-btn-lg">
              See the Financial Logic
            </a>
          </div>
          <div className="b2b-trust-row">
            <span className="b2b-trust-item">✓ Aligned with GHG Protocol</span>
            <span>•</span>
            <span className="b2b-trust-item">✓ MoEF&CC Methodology Aligned</span>
            <span>•</span>
            <span className="b2b-trust-item">✓ Verra & Gold Standard PoA</span>
          </div>
        </div>
      </section>

      {/* 3. THE 3 FRICTION POINTS (TIGHT, NO FLUFF) */}
      <section className="b2b-section bg-light">
        <div className="b2b-container text-center">
          <h2 className="b2b-section-title">Why Traditional Sustainability Bleeds Cash</h2>
          <p className="b2b-section-desc">Factory owners usually get trapped in one of three broken models:</p>
          
          <div className="b2b-grid-3">
            <div className="b2b-card b2b-card-alert">
              <div className="b2b-card-icon">💼</div>
              <h3>The Payroll Trap</h3>
              <p>Full-time ESG hires cost ₹6L–₹9L/year but sit idle between audits. Tasks need high-level direction, not daily desk salaries.</p>
            </div>
            <div className="b2b-card b2b-card-alert">
              <div className="b2b-card-icon">📑</div>
              <h3>The Static PDF Trap</h3>
              <p>Agencies charge ₹2L+ for remote reports that leave your team with messy Excel sheets and zero on-site calibration.</p>
            </div>
            <div className="b2b-card b2b-card-alert">
              <div className="b2b-card-icon">🔒</div>
              <h3>The Dead Asset Trap</h3>
              <p>Sub-15 MW solar and energy upgrades sit without carbon income because solo registry audits cost more than the returns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE STAR FORMULA & 6 PILLARS */}
      <section id="formula" className="b2b-section bg-white">
        <div className="b2b-container text-center">
          <div className="b2b-pill">The Financial Law</div>
          <h2 className="b2b-section-title">The Math: Sustainability That Pays for Itself</h2>
          <p className="b2b-section-desc">
            No consulting jargon. Power reductions and carbon revenue offset your baseline compliance fee.
          </p>

          {/* THE STAR BANNER */}
          <div className="roi-hero-banner">
            <div className="roi-formula-box">
              <span className="roi-formula-term text-profit">Net Profit</span>
              <span className="roi-formula-op">=</span>
              <span className="roi-formula-group">
                [ <strong className="text-gain">Power Savings</strong> + <strong className="text-gain">Carbon Revenue</strong> ]
              </span>
              <span className="roi-formula-op">−</span>
              <span className="roi-formula-term text-cost">₹45,000 Outflow</span>
            </div>
            <div className="roi-formula-tagline">
              Single-window integration: one flat setup fee unlocks recurring utility savings and 75% net carbon credit sales.
            </div>
          </div>

          {/* 6 OPERATIONAL PILLARS */}
          <div id="pillars" className="b2b-grid-3 text-left" style={{ marginTop: '45px' }}>
            <div className="b2b-card b2b-card-solution">
              <div className="b2b-card-icon">⚡</div>
              <h3>1. Resource Optimization</h3>
              <ul className="pillar-list">
                <li><strong>Plug Leakages:</strong> On-site walkthroughs identify electrical and thermal waste.</li>
                <li><strong>Cut Input Costs:</strong> Slash monthly power and fuel bills against grid tariffs.</li>
              </ul>
            </div>

            <div className="b2b-card b2b-card-solution">
              <div className="b2b-card-icon">🌱</div>
              <h3>2. Revenue Generation</h3>
              <ul className="pillar-list">
                <li><strong>PoA Bundling:</strong> Aggregate sub-15 MW assets at ₹0 upfront registry fees.</li>
                <li><strong>75% Net Payout:</strong> Direct proceeds to your plant on verified credit sales.</li>
              </ul>
            </div>

            <div className="b2b-card b2b-card-solution">
              <div className="b2b-card-icon">📋</div>
              <h3>3. Compliance & Disclosure</h3>
              <ul className="pillar-list">
                <li><strong>Continuous Vault:</strong> Live Scope 1 & 2 tracking without spreadsheet chaos.</li>
                <li><strong>Export-Ready:</strong> 1-click documentation for EU CBAM, BRSR Core, and CDP.</li>
              </ul>
            </div>

            <div className="b2b-card b2b-card-solution">
              <div className="b2b-card-icon">🛡️</div>
              <h3>4. Reduced Dependency</h3>
              <ul className="pillar-list">
                <li><strong>No Payroll Liability:</strong> Fractional senior practitioners replace full-time hires.</li>
                <li><strong>Data Privacy:</strong> All calculations stay secure in your plant's private vault.</li>
              </ul>
            </div>

            <div className="b2b-card b2b-card-solution">
              <div className="b2b-card-icon">📊</div>
              <h3>5. Board-Ready Decisions</h3>
              <ul className="pillar-list">
                <li><strong>Live ROI Modeling:</strong> Compare solar and boiler upgrade paybacks in real time.</li>
                <li><strong>Faster Approvals:</strong> Defensible engineering data for confident CFO buy-in.</li>
              </ul>
            </div>

            <div className="b2b-card b2b-card-solution">
              <div className="b2b-card-icon">📈</div>
              <h3>6. Market Value & Trust</h3>
              <ul className="pillar-list">
                <li><strong>OEM Qualification:</strong> Meet global tier-1 supply chain procurement hurdles.</li>
                <li><strong>Public Leadership:</strong> Verified contributions to national INDC and Net Zero targets.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SIDE-BY-SIDE MODEL COMPARISON */}
      <section id="comparison" className="b2b-section bg-light">
        <div className="b2b-container text-center">
          <div className="b2b-pill">Direct Contrast</div>
          <h2 className="b2b-section-title">Why the Hybrid Model Wins</h2>
          <p className="b2b-section-desc">Comparing your three options for handling industrial sustainability.</p>

          <div className="roi-table-wrap">
            <div className="roi-table-scroll">
              <table className="roi-table-v2">
                <thead>
                  <tr>
                    <th>Approach</th>
                    <th>Annual Cost</th>
                    <th>Expertise</th>
                    <th>Tech Platform</th>
                    <th>Carbon Monetization</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Full-Time Manager</strong></td>
                    <td>₹6–9 Lakhs/yr</td>
                    <td>Junior / Mid</td>
                    <td>❌ None (Excel)</td>
                    <td>0% (In-house burden)</td>
                  </tr>
                  <tr>
                    <td><strong>Traditional Agency</strong></td>
                    <td>₹1.5–3 Lakhs</td>
                    <td>Senior (Remote)</td>
                    <td>❌ None (Static PDF)</td>
                    <td>0% (Locked out)</td>
                  </tr>
                  <tr className="roi-winner-row">
                    <td><strong>Earth Carbon Hybrid</strong></td>
                    <td><strong className="text-primary">₹44,999 one-time</strong></td>
                    <td><strong>Senior + On-Site</strong></td>
                    <td>✅ Included Vault</td>
                    <td><strong className="text-primary">75% Net to You</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MODULAR PRICING (ALIGNED WITH THE FORMULA) */}
      <section id="pricing" className="b2b-section bg-white">
        <div className="b2b-container text-center">
          <div className="b2b-pill">Transparent Industrial Pricing</div>
          <h2 className="b2b-section-title">Simple, Unbundled Structure</h2>
          <p className="b2b-section-desc">Your ₹45,000 base engagement unlocks compliance, the data vault, and carbon pooling.</p>

          <div className="b2b-grid-3 text-left">
            {/* The Foundation Bundle */}
            <div className="b2b-price-card b2b-price-featured">
              <div>
                <div className="b2b-price-header">
                  <h3>Turnkey Setup (The Formula Base)</h3>
                  <div className="b2b-price-val">₹44,999 <small>one-time</small></div>
                  <div className="b2b-price-sub">₹19,999 Platform Vault + ₹25,000 Scope 1 & 2 Audit</div>
                </div>
                <ul className="b2b-price-list">
                  <li>✓ Digital facility vault setup</li>
                  <li>✓ Verified Scope 1 & 2 baseline</li>
                  <li>✓ On-site walkthrough & boundary calibration</li>
                  <li>✓ Senior GHG practitioner review</li>
                </ul>
              </div>
              <button className="b2b-btn-primary w-full" onClick={() => openExternal(LINKS.cal)}>
                Book Free Gap Analysis ↗
              </button>
            </div>

            {/* Optional Reporting Add-Ons */}
            <div className="b2b-price-card">
              <div>
                <div className="b2b-price-header">
                  <h3>Reporting Add-Ons</h3>
                  <div className="b2b-price-sub">Add only when OEM or export buyers require</div>
                </div>
                <div className="b2b-addon-list">
                  <div className="b2b-addon-item">
                    <span>BRSR Core / CDP Support</span>
                    <strong>₹40,000</strong>
                  </div>
                  <div className="b2b-addon-item">
                    <span>CBAM Export Readiness Package</span>
                    <strong>₹65,000</strong>
                  </div>
                  <div className="b2b-addon-item">
                    <span>Annual Vault Renewal (Year 2+)</span>
                    <strong>₹10,000/yr</strong>
                  </div>
                </div>
                <small className="b2b-note">*100% advance per selected reporting module.</small>
              </div>
              <button className="b2b-btn-outline w-full" onClick={() => openExternal(LINKS.cal)}>
                Discuss Scope ↗
              </button>
            </div>

            {/* Monetization */}
            <div className="b2b-price-card b2b-price-monetize">
              <div>
                <div className="b2b-price-header">
                  <h3 className="text-white">PoA Carbon Pooling</h3>
                  <div className="b2b-price-val text-mint">₹0 <small className="text-white">Upfront</small></div>
                  <div className="b2b-price-sub text-white-80">Sub-15 MW Aggregation</div>
                </div>
                <p className="b2b-monetize-desc">
                  Pure success-share: <strong>25% fee</strong> only when credits are sold. <strong>Your plant retains 75%.</strong>
                </p>
                <ul className="b2b-price-list text-white-80">
                  <li>✓ Pooled entry into Verra / CDM programs</li>
                  <li>✓ Zero registry validation cost</li>
                  <li>✓ Direct institutional buyer off-take</li>
                </ul>
              </div>
              <button className="b2b-btn-mint w-full" onClick={() => openExternal(LINKS.cal)}>
                Check Asset Eligibility ↗
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. VERIFIABLE EXPERT QUOTE */}
      <section className="b2b-roi-section">
        <div className="b2b-container-sm text-center">
          <blockquote className="b2b-quote">
            “When properly engineered, environmental compliance is never a net cost. Reduced utility tariffs and pooled carbon credits turn the entire setup into a positive cashflow generator.”
          </blockquote>
          <div className="b2b-attribution">
            <strong>Amitsinh Vaghela</strong>
            <span>Founder & GHG Practitioner, Earth Carbon Foundation</span>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section id="faq" className="b2b-section bg-light">
        <div className="b2b-container-sm text-center">
          <div className="b2b-pill">Have Questions?</div>
          <h2 className="b2b-section-title">Frequently Asked Questions</h2>
          <p className="b2b-section-desc">Direct answers on fractional architecture, registry pooling, and onboarding.</p>

          <div className="b2b-faq-list">
            <details className="b2b-faq-item" open>
              <summary>What is "Fractional Environmental Architecture"?</summary>
              <p>Instead of carrying a full-time ESG manager (₹6L–₹9L/year), you get senior certified GHG practitioners and digital vaults on-demand at a fraction of the cost, eliminating permanent payroll overhead.</p>
            </details>
            <details className="b2b-faq-item">
              <summary>How does the ₹0 Upfront Carbon Monetization work?</summary>
              <p>Small-to-mid clean energy installations (&lt;15 MW) cannot justify standalone registry audit fees. ECF aggregates your eligible assets under a Program of Activities (PoA). We manage the registry audits and retain a 25% success fee upon credit sale.</p>
            </details>
            <details className="b2b-faq-item">
              <summary>What happens during the Free Half-Day Gap Analysis?</summary>
              <p>Our practitioners review your utility bills, fuel consumption records, and clean energy assets to benchmark your Scope 1 & 2 baseline and quantify potential energy leaks and carbon revenue.</p>
            </details>
            <details className="b2b-faq-item">
              <summary>Are these audit vaults accepted for EU CBAM and SEBI BRSR?</summary>
              <p>Yes. Calculations adhere strictly to GHG Protocol standards and MoEF&CC methodologies, formatted for immediate inclusion into SEBI BRSR Core filings and CBAM export declarations.</p>
            </details>
          </div>
        </div>
      </section>

      {/* 9. FOCUSED SINGLE CONVERSION / CONTACT */}
      <section id="contact" className="b2b-section bg-white">
        <div className="b2b-container">
          <div className="b2b-contact-grid">
            <div className="b2b-contact-info">
              <h2>Schedule Your Free Half-Day Gap Analysis</h2>
              <p>Let's map your facility's exact energy baseline, identify utility leakages, and check carbon credit eligibility.</p>
              
              <div className="b2b-contact-details">
                <div>📧 <a href="mailto:info@earthcarbonfoundation.org">info@earthcarbonfoundation.org</a></div>
                <div>📱 <a href="https://wa.me/919824025431" target="_blank" rel="noreferrer">+91-9824025431</a></div>
                <div>📍 Gujarat, India</div>
              </div>

              <div className="b2b-direct-cal-box">
                <h4>Prefer an Immediate Video Call?</h4>
                <p>Book a 30-minute discovery session directly on our technical team calendar:</p>
                <button className="b2b-btn-outline" onClick={() => openExternal(LINKS.cal)}>
                  📅 Open Live Booking Calendar ↗
                </button>
              </div>
            </div>

            <div className="b2b-form-card">
              <h3>Request Gap Analysis</h3>
              {submitted ? (
                <div style={{ background: '#e8f5e9', border: '1px solid #2e7d32', padding: '24px', borderRadius: '10px', color: '#1b5e20' }}>
                  <h4>✓ Request Received</h4>
                  <p style={{ marginTop: '8px', fontSize: '14px' }}>Our technical team will review your facility profile and reach out within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="b2b-form-group">
                    <label>Full Name</label>
                    <input type="text" name="fullName" required placeholder="e.g. Rajesh Shah" onChange={handleInputChange} />
                  </div>
                  <div className="b2b-form-group">
                    <label>Company / Plant Name</label>
                    <input type="text" name="companyName" required placeholder="e.g. Apex Engineering Works" onChange={handleInputChange} />
                  </div>
                  <div className="b2b-form-row">
                    <div className="b2b-form-group">
                      <label>Work Email</label>
                      <input type="email" name="workEmail" required placeholder="name@company.com" onChange={handleInputChange} />
                    </div>
                    <div className="b2b-form-group">
                      <label>Phone Number</label>
                      <input type="tel" name="phone" required placeholder="+91 98240 XXXXX" onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="b2b-form-group">
                    <label>Primary Focus</label>
                    <select name="interest" onChange={handleInputChange}>
                      <option value="Turnkey Baseline + Audit (₹44,999)">Turnkey Baseline + Audit (₹44,999)</option>
                      <option value="BRSR / CDP Support">BRSR Core / CDP Support</option>
                      <option value="CBAM Export Readiness">CBAM Export Readiness</option>
                      <option value="Carbon Monetization (PoA)">Carbon Monetization (PoA Aggregation)</option>
                    </select>
                  </div>
                  <button type="submit" className="b2b-btn-primary w-full" style={{ marginTop: '10px' }}>
                    Request Free Gap Analysis →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="b2b-footer">
        <div className="b2b-container b2b-footer-inner">
          <div>
            <strong>Earth Carbon Foundation</strong> © 2026. All rights reserved.
            <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>CIN: U85300GJ2019NPL106818 · Gujarat, India</div>
          </div>
          <div className="b2b-footer-links">
            <a href="https://drive.google.com/file/d/1Kf7iX6x33_UceGFR4ZCLCP7TfDoYynZE/view?usp=sharing" target="_blank" rel="noreferrer">Terms</a>
            <a href="https://wa.me/919824025431" target="_blank" rel="noreferrer">WhatsApp Helpdesk</a>
            <a href={LINKS.cal} target="_blank" rel="noreferrer">Discovery Call</a>
          </div>
        </div>
      </footer>
    </div>
  );
}