import React, { useState } from 'react';
import './App.css';

const LINKS = {
  cal: 'https://cal.com/amit-sinh-earth-carbon-wbfdu4',
  buy: 'https://forms.gle/1SSxSGfyjrHfNtJQ9',
  sale: 'https://forms.gle/59QQtZFJKitpQfAy9',
  development: 'https://forms.gle/Stv3khqA5Zv6ANKy7',
  whatsapp: 'https://wa.me/919824025431?text=Hi%20ECF!%20I%20am%20interested%20in%20a%20Free%20Gap%20Analysis.'
};

export default function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phone: '',
    interest: 'Baseline Setup'
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
      {/* NAVIGATION */}
      <nav className="b2b-nav">
        <div className="b2b-container b2b-nav-inner">
          <div className="b2b-logo">
            <span className="b2b-logo-bold">Earth Carbon Foundation</span>
            <span className="b2b-logo-sub">Fractional Sustainability</span>
          </div>
          <div className="b2b-nav-links">
            <a href="#how-it-works">How It Works</a>
            <a href="#journey">The Journey</a>
            <a href="#pricing">Pricing</a>
            <a href="#roi-case">ROI Case</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="b2b-nav-actions">
            <button className="b2b-btn-primary" onClick={() => openExternal(LINKS.cal)}>
              Book Free Gap Analysis ↗
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="b2b-hero">
        <div className="b2b-container text-center">
          <div className="b2b-pill">⚡ B2B Fractional Environmental Architecture</div>
          <h1 className="b2b-hero-title">Turn Sustainability Compliance into Revenue.</h1>
          <p className="b2b-hero-subtitle">
            The Hybrid Fractional Sustainability Service for Indian Manufacturers. Senior expert guidance, audit-ready reporting, and carbon credit monetization—for less than the cost of a single junior hire.
          </p>
          <div className="b2b-hero-cta">
            <button className="b2b-btn-primary b2b-btn-lg" onClick={() => openExternal(LINKS.cal)}>
              Book a Free Half-Day Gap Analysis ↗
            </button>
            <a href="#pricing" className="b2b-btn-outline b2b-btn-lg">
              View Transparent Pricing
            </a>
          </div>
          <div className="b2b-trust-row">
            <span className="b2b-trust-item">✓ Aligned with GHG Protocol</span>
            <span>•</span>
            <span className="b2b-trust-item">✓ MoEF&CC Methodology Aligned</span>
            <span>•</span>
            <span className="b2b-trust-item">✓ Verra & GS Standards</span>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="b2b-section bg-light">
        <div className="b2b-container text-center">
          <h2 className="b2b-section-title">Sustainability Shouldn’t Be a Cost Center.</h2>
          <p className="b2b-section-desc">Evolving regulatory pressures shouldn't stall your shop-floor profitability.</p>
          
          <div className="b2b-grid-3">
            <div className="b2b-card b2b-card-alert">
              <div className="b2b-card-icon">📋</div>
              <h3>The Compliance Squeeze</h3>
              <p>OEMs and EU export markets (CBAM) require verified Scope 1, 2 & 3 emissions. Missing deadlines risks buyer qualification and vendor contracts.</p>
            </div>
            <div className="b2b-card b2b-card-alert">
              <div className="b2b-card-icon">💼</div>
              <h3>The Hiring Dilemma</h3>
              <p>A full-time Sustainability Manager costs ₹6L–₹9L/year and is often underutilized in evolving MSMEs that need strategic technical guidance, not overhead.</p>
            </div>
            <div className="b2b-card b2b-card-alert">
              <div className="b2b-card-icon">🏢</div>
              <h3>The Consultant Gap</h3>
              <p>Remote ESG consultants deliver generic PDFs but lack the shop-floor calibration to find real energy savings and monetizable carbon credit assets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section id="how-it-works" className="b2b-section bg-white">
        <div className="b2b-container text-center">
          <div className="b2b-pill">The ECF Hybrid Architecture</div>
          <h2 className="b2b-section-title">Tech + Senior Expert + On-Site Validation</h2>
          <p className="b2b-section-desc">Hands-on industrial implementation connected directly with institutional carbon markets.</p>

          <div className="b2b-grid-3 text-left">
            <div className="b2b-card b2b-card-solution">
              <div className="b2b-card-icon">🖥️</div>
              <h3>Tech-Enabled Registry</h3>
              <p>Audit-ready automated data vault for Scope 1, 2, and 3. Replace messy Excel sheets with institutional grade data verification.</p>
            </div>
            <div className="b2b-card b2b-card-solution">
              <div className="b2b-card-icon">👨‍💼</div>
              <h3>Fractional Senior Expert</h3>
              <p>Direct leadership from certified GHG practitioners for regulatory defense, methodology modeling, and buyer negotiations.</p>
            </div>
            <div className="b2b-card b2b-card-solution">
              <div className="b2b-card-icon">🏭</div>
              <h3>On-Site Shop-Floor Walkthroughs</h3>
              <p>Physical plant visits to calibrate sub-meters, inspect rooftop solar and waste flows, and conduct leadership reviews.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE JOURNEY */}
      <section id="journey" className="b2b-section bg-light">
        <div className="b2b-container text-center">
          <h2 className="b2b-section-title">Your Cradle-to-Grave Sustainability Journey</h2>
          <p className="b2b-section-desc">A structured 4-phase execution roadmap from initial baseline to revenue monetization.</p>

          <div className="b2b-journey-grid">
            <div className="b2b-journey-step">
              <div className="b2b-step-num">PHASE 01</div>
              <h4>Cradle (Baseline)</h4>
              <p>Digitize raw energy logs, set boundary limits, and establish verifiable Scope 1 & 2 baseline data.</p>
            </div>
            <div className="b2b-journey-step">
              <div className="b2b-step-num">PHASE 02</div>
              <h4>Infancy (Compliance)</h4>
              <p>Generate third-party audit-ready BRSR Core, CDP, and GHG Protocol compliance portfolios.</p>
            </div>
            <div className="b2b-journey-step">
              <div className="b2b-step-num">PHASE 03</div>
              <h4>Adolescence (Optimization)</h4>
              <p>Pinpoint high-impact energy efficiency savings and prepare facility for CBAM export tax readiness.</p>
            </div>
            <div className="b2b-journey-step b2b-journey-highlight">
              <div className="b2b-step-num text-mint">PHASE 04</div>
              <h4 className="text-white">Maturity (Monetization)</h4>
              <p className="text-white-80">Aggregate solar and energy assets into our 15 MW Aggregation Pool to generate verified carbon credit revenue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="b2b-section bg-white">
        <div className="b2b-container text-center">
          <div className="b2b-pill">Transparent Industrial Pricing</div>
          <h2 className="b2b-section-title">Modular Pricing. Pay Only for What You Need.</h2>
          <p className="b2b-section-desc">No mandatory multi-year retainer bundles. 100% transparent and actionable modules.</p>

          <div className="b2b-grid-3 text-left">
            {/* The Foundation */}
            <div className="b2b-price-card b2b-price-featured">
              <div>
                <div className="b2b-price-header">
                  <h3>The Foundation</h3>
                  <div className="b2b-price-val">₹19,999 <small>one-time</small></div>
                  <div className="b2b-price-sub">+ ₹10,000/yr annual vault renewal</div>
                </div>
                <ul className="b2b-price-list">
                  <li>✓ Digital platform setup & vault</li>
                  <li>✓ Scope 1 & 2 baseline calculation</li>
                  <li>✓ Senior GHG practitioner review</li>
                  <li>✓ Plant boundary calibration</li>
                </ul>
              </div>
              <button className="b2b-btn-primary w-full" onClick={() => openExternal(LINKS.development)}>
                Get Started ↗
              </button>
            </div>

            {/* Compliance Add-Ons */}
            <div className="b2b-price-card">
              <div>
                <div className="b2b-price-header">
                  <h3>Compliance Add-Ons</h3>
                  <div className="b2b-price-sub">Select as per OEM / Export requirements</div>
                </div>
                <div className="b2b-addon-list">
                  <div className="b2b-addon-item">
                    <span>Carbon Footprint (Scope 1 & 2)</span>
                    <strong>₹25,000</strong>
                  </div>
                  <div className="b2b-addon-item">
                    <span>BRSR Core / CDP Support</span>
                    <strong>₹40,000</strong>
                  </div>
                  <div className="b2b-addon-item">
                    <span>CBAM Export Readiness</span>
                    <strong>₹65,000</strong>
                  </div>
                </div>
                <small className="b2b-note">*100% advance payment per selected module.</small>
              </div>
              <button className="b2b-btn-outline w-full" onClick={() => openExternal(LINKS.cal)}>
                Add to Plan ↗
              </button>
            </div>

            {/* Monetization */}
            <div className="b2b-price-card b2b-price-monetize">
              <div>
                <div className="b2b-price-header">
                  <h3 className="text-white">Monetization (The Unlock)</h3>
                  <div className="b2b-price-val text-mint">₹0 <small className="text-white">Upfront</small></div>
                  <div className="b2b-price-sub text-white-80">Carbon Credit Aggregation</div>
                </div>
                <p className="b2b-monetize-desc">
                  Success-based model: <strong>25% success fee</strong> on verified credit sales. <strong>Your plant retains 75%.</strong>
                </p>
                <ul className="b2b-price-list text-white-80">
                  <li>✓ 15 MW Aggregation Pool entry</li>
                  <li>✓ Zero registration/validation cost</li>
                  <li>✓ Direct institutional buyer off-take</li>
                </ul>
              </div>
              <button className="b2b-btn-mint w-full" onClick={() => openExternal(LINKS.sale)}>
                Qualify My Facility ↗
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: 1-GLANCE ROI & BUSINESS CASE */}
      <section id="roi-case" className="b2b-section bg-light">
        <div className="b2b-container text-center">
          <div className="b2b-pill">Year 1 Financial Math</div>
          <h2 className="b2b-section-title">The Business Case: Positive ROI from Day 1</h2>
          <p className="b2b-section-desc">How compliance and energy savings turn sustainability into a net profit center.</p>

          {/* 3-STEP VISUAL EQUATION */}
          <div className="roi-flow-grid">
            {/* Step 1: Input */}
            <div className="roi-flow-card">
              <span className="roi-card-tag">1. You Invest</span>
              <div className="roi-card-amount">₹44,999</div>
              <h4>Year 1 Foundation</h4>
              <p>Platform vault (₹19,999) + Scope 1 & 2 audit report (₹25,000).</p>
              <div className="roi-footnote">Less than 1 month of junior engineer salary</div>
            </div>

            <div className="roi-arrow">→</div>

            {/* Step 2: Output */}
            <div className="roi-flow-card">
              <span className="roi-card-tag tag-green">2. You Recover</span>
              <div className="roi-card-amount text-primary">₹2,00,000+</div>
              <h4>Direct Returns</h4>
              <p>⚡ Energy savings: ₹50k–₹1L<br />🌱 Carbon credit revenue: ₹1.5L+</p>
              <div className="roi-footnote">From optimizing just 1 thermal/power hotspot</div>
            </div>

            <div className="roi-arrow">═</div>

            {/* Step 3: Net Profit */}
            <div className="roi-flow-card roi-card-profit">
              <span className="roi-card-tag tag-mint">3. Net Impact</span>
              <div className="roi-card-amount text-mint">₹1,55,001</div>
              <h4 className="text-white">Net Cash Profit</h4>
              <div className="roi-badge-roi">~344% Year 1 ROI</div>
              <div className="roi-footnote text-white-80">Sustainability pays for itself</div>
            </div>
          </div>

          {/* CLEAN COMPARISON TABLE */}
          <div className="roi-table-wrap">
            <h3 className="roi-table-title">Why the Hybrid Model Wins</h3>
            <div className="roi-table-scroll">
              <table className="roi-table-v2">
                <thead>
                  <tr>
                    <th>Approach</th>
                    <th>Annual Cost</th>
                    <th>Expertise</th>
                    <th>Platform</th>
                    <th>Carbon Share</th>
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
                    <td><strong>Traditional Consultant</strong></td>
                    <td>₹1.5–3 Lakhs</td>
                    <td>Senior (Remote)</td>
                    <td>❌ None</td>
                    <td>0% (Static PDF only)</td>
                  </tr>
                  <tr className="roi-winner-row">
                    <td><strong>ECF Hybrid Model</strong></td>
                    <td><strong className="text-primary">₹44,999 base</strong></td>
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

      {/* ROI QUOTE */}
      <section className="b2b-roi-section">
        <div className="b2b-container-sm text-center">
          <blockquote className="b2b-quote">
            “Frankly, if properly planned and executed, this environmental journey makes the net input cost nearly zero. Your compliance investment pays for itself through energy savings and new carbon revenue.”
          </blockquote>
          <div className="b2b-attribution">
            <strong>Amitsinh Vaghela</strong>
            <span>Founder & GHG Practitioner, Earth Carbon Foundation</span>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="b2b-section bg-light">
        <div className="b2b-container-sm text-center">
          <div className="b2b-pill">Have Questions?</div>
          <h2 className="b2b-section-title">Frequently Asked Questions</h2>
          <p className="b2b-section-desc">Clear answers on fractional sustainability, registry aggregation, and onboarding.</p>

          <div className="b2b-faq-list">
            <details className="b2b-faq-item" open>
              <summary>What is a "Fractional Sustainability Service"?</summary>
              <p>Instead of hiring an expensive full-time ESG manager (₹6L–₹9L/year), you get fractional access to senior GHG practitioners, digital baseline vaults, and physical on-site audit calibration at a fraction of the cost.</p>
            </details>
            <details className="b2b-faq-item">
              <summary>How does the ₹0 Upfront Carbon Monetization work?</summary>
              <p>Small-scale installations (&lt;15 MW) typically fail carbon registry economics due to validation fees. ECF aggregates your rooftop solar, energy efficiency, and waste interventions under a Program of Activities (PoA). We handle verification and take only a 25% success fee when credits are sold.</p>
            </details>
            <details className="b2b-faq-item">
              <summary>What does the Free Half-Day Gap Analysis include?</summary>
              <p>Our senior practitioners review your current electricity bills, fuel consumption logs, and solar generation to benchmark your Scope 1 & 2 baseline and calculate your indicative carbon credit potential.</p>
            </details>
            <details className="b2b-faq-item">
              <summary>Are these reports accepted for EU CBAM and SEBI BRSR compliance?</summary>
              <p>Yes. All calculations follow GHG Protocol Corporate Standards and are structured for seamless integration into SEBI BRSR Core filings, CDP responses, and CBAM declaration templates.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CONTACT & LEAD CAPTURE */}
      <section id="contact" className="b2b-section bg-white">
        <div className="b2b-container">
          <div className="b2b-contact-grid">
            {/* Left Contact Info */}
            <div className="b2b-contact-info">
              <h2>Ready to Turn Carbon Data into Revenue?</h2>
              <p>Stop guessing. Let’s map your facility’s exact carbon baseline and compliance readiness today.</p>
              
              <div className="b2b-contact-details">
                <div>📧 <a href="mailto:info@earthcarbonfoundation.org">info@earthcarbonfoundation.org</a></div>
                <div>📱 <a href="https://wa.me/919824025431" target="_blank" rel="noreferrer">+91-9824025431</a></div>
                <div>📍 Gujarat, India</div>
              </div>

              <div className="b2b-direct-cal-box">
                <h4>Prefer an Immediate Video Call?</h4>
                <p>Pick a convenient 30-minute discovery call directly on our team calendar:</p>
                <button className="b2b-btn-outline" onClick={() => openExternal(LINKS.cal)}>
                  📅 Open Live Booking Calendar ↗
                </button>
              </div>
            </div>

            {/* Right Lead Capture Form */}
            <div className="b2b-form-card">
              <h3>Request Free Gap Analysis</h3>
              {submitted ? (
                <div style={{ background: '#e8f5e9', border: '1px solid #2e7d32', padding: '24px', borderRadius: '10px', color: '#1b5e20' }}>
                  <h4>✓ Request Received</h4>
                  <p style={{ marginTop: '8px', fontSize: '14px' }}>Our technical team will review your details and contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="b2b-form-group">
                    <label>Full Name</label>
                    <input type="text" name="fullName" required placeholder="e.g. Rajesh Shah" onChange={handleInputChange} />
                  </div>
                  <div className="b2b-form-group">
                    <label>Company / Plant Name</label>
                    <input type="text" name="companyName" required placeholder="e.g. Apex Industrial Solutions" onChange={handleInputChange} />
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
                    <label>Primary Focus Area</label>
                    <select name="interest" onChange={handleInputChange}>
                      <option value="Baseline Setup">Baseline Setup (Scope 1 & 2)</option>
                      <option value="BRSR/CDP">BRSR Core / CDP Support</option>
                      <option value="CBAM">CBAM Export Tax Readiness</option>
                      <option value="Carbon Credit Monetization">Carbon Credit Monetization (₹0 Upfront)</option>
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

      {/* FOOTER */}
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