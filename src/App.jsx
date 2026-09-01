import React, { useState } from 'react';
import './App.css';

// Active Direct Links
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
    // Pre-fills a WhatsApp message or handles submission
    const msg = `Gap Analysis Request:%0A- Name: ${formData.fullName}%0A- Company: ${formData.companyName}%0A- Email: ${formData.workEmail}%0A- Phone: ${formData.phone}%0A- Focus: ${formData.interest}`;
    window.open(`https://wa.me/919824025431?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="b2b-page">
      {/* STICKY HEADER */}
      <nav className="b2b-nav">
        <div className="b2b-container b2b-nav-inner">
          <div className="b2b-logo">
            <span className="b2b-logo-bold">Earth Carbon</span>
            <span className="b2b-logo-sub">Foundation</span>
          </div>
          <div className="b2b-nav-links">
            <a href="#how-it-works">How It Works</a>
            <a href="#journey">The Journey</a>
            <a href="#pricing">Pricing</a>
            <a href="#roi">About Us</a>
          </div>
          <div className="b2b-nav-actions">
            <button className="b2b-btn-primary" onClick={() => openExternal(LINKS.cal)}>
              Book Free Gap Analysis ↗
            </button>
          </div>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="b2b-hero">
        <div className="b2b-container text-center">
          <div className="b2b-pill">Fractional Sustainability for Industry</div>
          <h1 className="b2b-hero-title">Turn Sustainability Compliance into Revenue.</h1>
          <p className="b2b-hero-subtitle">
            The Hybrid Fractional Sustainability Service for Indian Manufacturers. Get senior expert guidance, audit-ready reporting, and carbon credit monetization—for less than the cost of a single junior hire.
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
            <span>✓ Aligned with GHG Protocol</span>
            <span>•</span>
            <span>✓ MoEF&CC Methodology Under Validation</span>
            <span>•</span>
            <span>✓ Verra Standards</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM */}
      <section className="b2b-section bg-light">
        <div className="b2b-container text-center">
          <h2 className="b2b-section-title">Sustainability Shouldn’t Be a Cost Center.</h2>
          <p className="b2b-section-desc">Evolving regulatory pressures shouldn't stall your shop-floor profitability.</p>
          
          <div className="b2b-grid-3">
            <div className="b2b-card b2b-card-alert">
              <div className="b2b-card-icon">📋</div>
              <h3>The Compliance Squeeze</h3>
              <p>OEMs and EU markets (CBAM) are demanding BRSR and Scope 3 data now. Missing deadlines puts international contracts and supply chain status at immediate risk.</p>
            </div>
            <div className="b2b-card b2b-card-alert">
              <div className="b2b-card-icon">💼</div>
              <h3>The Hiring Dilemma</h3>
              <p>A full-time Sustainability Manager costs ₹6L–₹9L/year and is often underutilized or lacks multi-registry architecture experience in evolving MSMEs.</p>
            </div>
            <div className="b2b-card b2b-card-alert">
              <div className="b2b-card-icon">🏢</div>
              <h3>The Consultant Gap</h3>
              <p>Remote ESG consultants deliver generic static PDFs without ever setting foot on your shop-floor, missing physical data validation and actual operational savings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE SOLUTION */}
      <section id="how-it-works" className="b2b-section bg-white">
        <div className="b2b-container text-center">
          <div className="b2b-pill">The Earth Carbon Hybrid Model</div>
          <h2 className="b2b-section-title">Tech + Senior Expert + On-Site Validation</h2>
          <p className="b2b-section-desc">Practical, hands-on implementation directly connected to global carbon market architecture.</p>

          <div className="b2b-grid-3 text-left">
            <div className="b2b-card b2b-card-solution">
              <div className="b2b-card-icon">🖥️</div>
              <h3>Tech-Enabled Registry</h3>
              <p>Automated, audit-ready data vault for Scope 1, 2, and 3 emissions. Eliminate messy, error-prone spreadsheets with structured compliance vaults.</p>
            </div>
            <div className="b2b-card b2b-card-solution">
              <div className="b2b-card-icon">👨‍💼</div>
              <h3>Fractional Senior Expert</h3>
              <p>Direct leadership from verified GHG practitioners (NAMA/LEAP frameworks) for regulatory defense, methodology alignment, and buyer negotiations.</p>
            </div>
            <div className="b2b-card b2b-card-solution">
              <div className="b2b-card-icon">🏭</div>
              <h3>On-Site Shop-Floor Presence</h3>
              <p>Regular physical facility walkthroughs for boundary calibration, sub-meter validation, operator training, and executive review meetings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE JOURNEY */}
      <section id="journey" className="b2b-section bg-light">
        <div className="b2b-container text-center">
          <h2 className="b2b-section-title">Your Cradle-to-Grave Sustainability Journey</h2>
          <p className="b2b-section-desc">A structured 4-phase execution timeline from initial baseline to revenue monetization.</p>

          <div className="b2b-journey-grid">
            <div className="b2b-journey-step">
              <div className="b2b-step-num">01</div>
              <h4>Cradle (Baseline)</h4>
              <p>Digitize raw energy logs, calibrate meter boundaries, and establish Scope 1 & 2 baseline.</p>
            </div>
            <div className="b2b-journey-step">
              <div className="b2b-step-num">02</div>
              <h4>Infancy (Compliance)</h4>
              <p>Generate third-party audit-ready BRSR, CDP, and GHG Protocol compliant documentation.</p>
            </div>
            <div className="b2b-journey-step">
              <div className="b2b-step-num">03</div>
              <h4>Adolescence (Optimization)</h4>
              <p>Identify energy-saving hotspots, process efficiency interventions, and CBAM export readiness.</p>
            </div>
            <div className="b2b-journey-step b2b-journey-highlight">
              <div className="b2b-step-num text-mint">04</div>
              <h4 className="text-white">Maturity (Monetization)</h4>
              <p className="text-white-80">Aggregate sub-15 MW solar, waste, and EE actions into verified environmental credit pools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PRICING */}
      <section id="pricing" className="b2b-section bg-white">
        <div className="b2b-container text-center">
          <div className="b2b-pill">Transparent Pricing</div>
          <h2 className="b2b-section-title">Modular Pricing. Pay Only for What You Need.</h2>
          <p className="b2b-section-desc">No mandatory long-term lock-ins. 100% transparent execution modules.</p>

          <div className="b2b-grid-3 text-left">
            {/* CARD 1: FOUNDATION */}
            <div className="b2b-price-card b2b-price-featured">
              <div className="b2b-price-header">
                <h3>The Foundation</h3>
                <div className="b2b-price-val">₹19,999 <small>one-time onboarding</small></div>
                <div className="b2b-price-sub">+ ₹10,000/year renewal</div>
              </div>
              <ul className="b2b-price-list">
                <li>✓ Platform setup & secure vault</li>
                <li>✓ Scope 1 & 2 baseline calculation</li>
                <li>✓ Senior GHG expert consultation</li>
                <li>✓ Shop-floor boundary calibration</li>
              </ul>
              <button className="b2b-btn-primary w-full" onClick={() => openExternal(LINKS.development)}>
                Get Started ↗
              </button>
            </div>

            {/* CARD 2: ADD-ONS */}
            <div className="b2b-price-card">
              <div className="b2b-price-header">
                <h3>Compliance Add-Ons</h3>
                <div className="b2b-price-sub">Select as per buyer/export mandates</div>
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
              <small className="b2b-note">*100% advance payment per module selected.</small>
              <button className="b2b-btn-outline w-full" onClick={() => openExternal(LINKS.cal)}>
                Add to Plan ↗
              </button>
            </div>

            {/* CARD 3: MONETIZATION */}
            <div className="b2b-price-card b2b-price-monetize">
              <div className="b2b-price-header">
                <h3 className="text-white">Monetization (The Unlock)</h3>
                <div className="b2b-price-val text-mint">₹0 <small className="text-white">Upfront</small></div>
                <div className="b2b-price-sub text-white-80">Carbon Credit Aggregation</div>
              </div>
              <p className="b2b-monetize-desc">
                We only win when you win: <strong>25% success fee</strong> on actual generated credit revenue. <strong>You keep 75%.</strong>
              </p>
              <ul className="b2b-price-list text-white-80">
                <li>✓ PoA Aggregation under 15 MW pool</li>
                <li>✓ Registry issuance & verification</li>
                <li>✓ Direct institutional buyer routing</li>
              </ul>
              <button className="b2b-btn-mint w-full" onClick={() => openExternal(LINKS.sale)}>
                Qualify My Facility ↗
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: THE ROI HOOK */}
      <section id="roi" className="b2b-roi-section">
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

      {/* SECTION 7: FINAL CTA & LEAD CAPTURE */}
      <section id="contact" className="b2b-section bg-white">
        <div className="b2b-container">
          <div className="b2b-contact-grid">
            {/* Left Column */}
            <div className="b2b-contact-info">
              <h2>Ready to Make Your Sustainability Data Work for You?</h2>
              <p>Stop guessing. Let’s map your facility’s exact carbon and compliance baseline with an actionable, shop-floor assessment.</p>
              
              <div className="b2b-contact-details">
                <div>📧 <a href="mailto:info@earthcarbonfoundation.org">info@earthcarbonfoundation.org</a></div>
                <div>📱 <a href="https://wa.me/919824025431" target="_blank" rel="noreferrer">+91-9824025431</a></div>
                <div>📍 Gujarat, India</div>
              </div>

              <div className="b2b-direct-cal-box">
                <h4>Prefer an Instant Booking?</h4>
                <p>Pick a convenient 30-minute discovery slot on our calendar directly:</p>
                <button className="b2b-btn-outline" onClick={() => openExternal(LINKS.cal)}>
                  📅 Open Live Booking Calendar ↗
                </button>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="b2b-form-card">
              <h3>Request Free Gap Analysis</h3>
              {submitted ? (
                <div className="b2b-success-msg">
                  <h4>✓ Request Dispatched!</h4>
                  <p>Our team has received your information and will reach out within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="b2b-lead-form">
                  <div className="b2b-form-group">
                    <label>Full Name</label>
                    <input type="text" name="fullName" required placeholder="e.g. Rajesh Shah" onChange={handleInputChange} />
                  </div>
                  <div className="b2b-form-group">
                    <label>Company / Plant Name</label>
                    <input type="text" name="companyName" required placeholder="e.g. Apex Precision Pvt Ltd" onChange={handleInputChange} />
                  </div>
                  <div className="b2b-form-row">
                    <div className="b2b-form-group">
                      <label>Work Email</label>
                      <input type="email" name="workEmail" required placeholder="name@company.com" onChange={handleInputChange} />
                    </div>
                    <div className="b2b-form-group">
                      <label>Phone Number</label>
                      <input type="tel" name="phone" required placeholder="+91 98765 43210" onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="b2b-form-group">
                    <label>I'm primarily interested in:</label>
                    <select name="interest" onChange={handleInputChange}>
                      <option value="Baseline Setup">Baseline Setup (Scope 1 & 2)</option>
                      <option value="BRSR/CDP">BRSR Core / CDP Support</option>
                      <option value="CBAM">CBAM Export Readiness</option>
                      <option value="Carbon Credit Monetization">Carbon Credit Monetization (₹0 Upfront)</option>
                    </select>
                  </div>
                  <button type="submit" className="b2b-btn-primary w-full">
                    Request My Free Gap Analysis →
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
            <div style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>CIN: U85300GJ2019NPL106818 · Gujarat, India</div>
          </div>
          <div className="b2b-footer-links">
            <a href="https://drive.google.com/file/d/1Kf7iX6x33_UceGFR4ZCLCP7TfDoYynZE/view?usp=sharing" target="_blank" rel="noreferrer">Terms of Service</a>
            <a href="https://wa.me/919824025431" target="_blank" rel="noreferrer">WhatsApp Desk</a>
            <a href={LINKS.cal} target="_blank" rel="noreferrer">Discovery Call</a>
          </div>
        </div>
      </footer>
    </div>
  );
}