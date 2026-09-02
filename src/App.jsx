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
      {/* 1. NAVIGATION */}
      <nav className="b2b-nav">
        <div className="b2b-container b2b-nav-inner">
          <div className="b2b-logo">
            <span className="b2b-logo-bold">Earth Carbon Foundation</span>
            <span className="b2b-logo-sub">Environmental Self-Reliance</span>
          </div>
          <div className="b2b-nav-links">
            <a href="#the-math">The Math</a>
            <a href="#outcomes">Outcomes</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
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
          <h1 className="b2b-hero-title">Turn Sustainability Compliance into Net Profit.</h1>
          <p className="b2b-hero-subtitle">
            Senior GHG expertise, automated audit vaults, and zero-upfront carbon aggregation. We eliminate permanent manpower liabilities to make your compliance entirely self-funding.
          </p>
          <div className="b2b-hero-cta">
            <button className="b2b-btn-primary b2b-btn-lg" onClick={() => openExternal(LINKS.cal)}>
              Book a Free Half-Day Gap Analysis ↗
            </button>
            <a href="#the-math" className="b2b-btn-outline b2b-btn-lg">
              See the Financial Logic
            </a>
          </div>
          <div className="b2b-trust-row">
            <span className="b2b-trust-item">✓ GHG Protocol Aligned</span>
            <span>•</span>
            <span className="b2b-trust-item">✓ MoEF&CC Methodology</span>
            <span>•</span>
            <span className="b2b-trust-item">✓ Verra & Gold Standard PoA</span>
          </div>
        </div>
      </section>

      {/* 3. THE PROBLEM */}
      <section className="b2b-section bg-light">
        <div className="b2b-container text-center">
          <h2 className="b2b-section-title">Why Traditional Sustainability Bleeds Cash</h2>
          <p className="b2b-section-desc">Factory owners typically get trapped in one of three broken models:</p>

          <div className="b2b-grid-3">
            <div className="b2b-card b2b-card-alert">
              <div className="b2b-card-icon">💼</div>
              <h3>The Payroll Trap</h3>
              <p>Full-time ESG hires cost ₹6L–₹9L/year but sit idle between audits. You need high-level strategic direction, not a daily desk salary.</p>
            </div>
            <div className="b2b-card b2b-card-alert">
              <div className="b2b-card-icon">📑</div>
              <h3>The Static PDF Trap</h3>
              <p>Agencies charge ₹2L+ for remote reports, leaving your team with messy Excel sheets and zero on-site shop-floor calibration.</p>
            </div>
            <div className="b2b-card b2b-card-alert">
              <div className="b2b-card-icon">🔒</div>
              <h3>The Dead Asset Trap</h3>
              <p>Sub-15 MW solar and energy upgrades generate no carbon income because solo registry validation costs more than the returns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE MATH & VALUE ARCHITECTURE FLOW */}
      <section id="the-math" className="b2b-section bg-white">
        <div className="b2b-container text-center">
          <div className="b2b-pill">The Financial Law</div>
          <h2 className="b2b-section-title">The Math: Sustainability That Pays for Itself</h2>
          <p className="b2b-section-desc">
            No consulting jargon. Power reductions and carbon revenue offset your baseline compliance fee.
          </p>

          {/* STAR FORMULA BANNER */}
          <div className="roi-hero-banner">
            <div className="roi-formula-box">
              <span className="roi-formula-term text-profit">Net Profit</span>
              <span className="roi-formula-op">=</span>
              <span className="roi-formula-group">
                [ <strong className="text-gain">Power Savings</strong> + <strong className="text-gain">Carbon Revenue</strong> ]
              </span>
              <span className="roi-formula-op">−</span>
              <span className="roi-formula-term text-cost">₹45,000 Annual Outflow</span>
            </div>
            <div className="roi-formula-tagline">
              A single-window integration: one flat setup fee unlocks recurring utility savings and 75% net carbon credit sales.
            </div>
          </div>

          {/* ASCII ARCHITECTURE VISUAL CARD */}
          <div className="arch-diagram-wrapper">
            <span className="arch-diagram-title">System Execution Hierarchy</span>
            <pre className="arch-diagram-pre">
{`                  ENVIRONMENTAL SELF-RELIANCE
                               │
                               ↓
              SUSTAINABILITY THAT PAYS FOR ITSELF
                               │
                   ┌───────────┴───────────┐
                   ↓                       ↓
              RESOURCE SAVINGS        CARBON REVENUE
                   │                       │
                   └───────────┬───────────┘
                               ↓
                          NET PROFIT
                               │
                               ↓
                 ONLINE ECF VALUE ARCHITECTURE
                               │
        ┌──────────┬───────────┼──────────┬──────────┬───────────┐
        ↓          ↓           ↓          ↓          ↓           ↓
    COMPLIANCE  RESOURCE    CARBON     BOARD-     REDUCED     MARKET
    & DISCLOSE  OPTIMISE    MONETISE   READY      3RD-PARTY   VALUE
                                    DECISIONS   DEPENDENCY`}
            </pre>
          </div>

          {/* 6 OPERATIONAL OUTCOMES */}
          <div id="outcomes" className="b2b-grid-3 text-left" style={{ marginTop: '45px' }}>
            <div className="b2b-card b2b-card-solution">
              <div className="b2b-card-icon">⚡</div>
              <h3>Resource Optimization</h3>
              <p>On-site walkthroughs identify electrical/thermal waste, slashing monthly power and fuel bills against grid tariffs.</p>
            </div>

            <div className="b2b-card b2b-card-solution">
              <div className="b2b-card-icon">🌱</div>
              <h3>Revenue Generation</h3>
              <p>Aggregate sub-15 MW assets at ₹0 upfront registry fees. Receive 75% net payouts directly to your plant on verified credit sales.</p>
            </div>

            <div className="b2b-card b2b-card-solution">
              <div className="b2b-card-icon">📋</div>
              <h3>Flawless Compliance</h3>
              <p>Live Scope 1 & 2 tracking in a continuous digital vault. 1-click documentation for EU CBAM, BRSR Core, and CDP.</p>
            </div>

            <div className="b2b-card b2b-card-solution">
              <div className="b2b-card-icon">🛡️</div>
              <h3>Reduced Dependency</h3>
              <p>Fractional senior practitioners replace full-time hires. All calculations remain secure in your plant’s private, owned vault.</p>
            </div>

            <div className="b2b-card b2b-card-solution">
              <div className="b2b-card-icon">📊</div>
              <h3>Board-Ready Decisions</h3>
              <p>Live ROI modeling compares solar and boiler upgrade paybacks in real time, providing defensible engineering data for fast CFO buy-in.</p>
            </div>

            <div className="b2b-card b2b-card-solution">
              <div className="b2b-card-icon">📈</div>
              <h3>Market Value & Trust</h3>
              <p>Effortlessly meet global Tier-1 OEM supply chain procurement hurdles and showcase verified contributions to national Net Zero targets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRICING & DIRECT CONTRAST */}
      <section id="pricing" className="b2b-section bg-light">
        <div className="b2b-container text-center">
          <div className="b2b-pill">Direct Contrast & Investment</div>
          <h2 className="b2b-section-title">Transparent, Unbundled Pricing</h2>
          <p className="b2b-section-desc">
            Simple structure. Your ₹45,000 base engagement unlocks compliance, the data vault, and carbon pooling.
          </p>

          {/* MODEL COMPARISON TABLE */}
          <div className="roi-table-wrap">
            <h3 className="roi-table-title">Why the Hybrid Model Wins</h3>
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
                    <td>₹6L – ₹9L / yr</td>
                    <td>Junior / Mid</td>
                    <td>❌ None (Excel)</td>
                    <td>0% (In-house burden)</td>
                  </tr>
                  <tr>
                    <td><strong>Traditional Agency</strong></td>
                    <td>₹1.5L – ₹3L</td>
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

          {/* 3 PRICING TIERS */}
          <div className="b2b-grid-3 text-left" style={{ marginTop: '50px' }}>
            <div className="b2b-price-card b2b-price-featured">
              <div>
                <div className="b2b-price-header">
                  <h3>1. Turnkey Setup (The Formula Base)</h3>
                  <div className="b2b-price-val">₹44,999 <small>one-time</small></div>
                  <div className="b2b-price-sub">₹19,999 Platform Vault + ₹25,000 Scope 1 & 2 Audit</div>
                </div>
                <ul className="b2b-price-list">
                  <li>✓ Digital facility vault setup</li>
                  <li>✓ Verified Scope 1 & 2 baseline calculation</li>
                  <li>✓ On-site walkthrough & plant boundary calibration</li>
                  <li>✓ Senior GHG practitioner review</li>
                </ul>
              </div>
              <button className="b2b-btn-primary w-full" onClick={() => openExternal(LINKS.cal)}>
                Book Free Gap Analysis ↗
              </button>
            </div>

            <div className="b2b-price-card">
              <div>
                <div className="b2b-price-header">
                  <h3>2. Reporting Add-Ons</h3>
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
                <small className="b2b-note">*100% advance payment per selected reporting module.</small>
              </div>
              <a href="#contact" className="b2b-btn-outline w-full text-center" style={{ display: 'block', textDecoration: 'none' }}>
                Select in Form Below ↓
              </a>
            </div>

            <div className="b2b-price-card b2b-price-monetize">
              <div>
                <div className="b2b-price-header">
                  <h3 className="text-white">3. PoA Carbon Pooling (The Unlock)</h3>
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

      {/* 6. FOUNDER QUOTE */}
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

      {/* 7. FAQ */}
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
              <p>We aggregate your verified, sub-15 MW clean energy assets into our Programme of Activities (PoA) pool. We cover all registry validation costs, and upon successful sale to institutional buyers, your plant receives 75% of the net revenue.</p>
            </details>
            <details className="b2b-faq-item">
              <summary>What happens during the Free Half-Day Gap Analysis?</summary>
              <p>A senior practitioner reviews your recent utility bills, walks your shop floor to identify obvious thermal/power leakages, and maps out exactly which compliance modules and carbon pooling options apply to your facility.</p>
            </details>
            <details className="b2b-faq-item">
              <summary>Are these reports accepted for EU CBAM and SEBI BRSR compliance?</summary>
              <p>Yes. Our methodologies are explicitly aligned with the GHG Protocol, MoEF&CC guidelines, and Verra/Gold Standard, ensuring your data is audit-ready for both domestic and international regulatory bodies.</p>
            </details>
          </div>
        </div>
      </section>

      {/* 8. CONTACT & LEAD CAPTURE */}
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
                      <option value="BRSR Core / CDP Support">BRSR Core / CDP Support</option>
                      <option value="CBAM Export Readiness">CBAM Export Readiness</option>
                      <option value="PoA Carbon Pooling">PoA Carbon Pooling (₹0 Upfront)</option>
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

      {/* 9. FOOTER */}
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