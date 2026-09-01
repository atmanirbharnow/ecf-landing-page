import React, { useState } from 'react';
import './App.css';

// Active Google Forms Configuration (Using direct embed endpoints)
const FORM_URLS = {
  buy: 'https://docs.google.com/forms/d/e/1FAIpQLSdXyAQt3DvyaNZ06T69Dog9o4MzxE2AoxWJT1XjbE-ggMzFdQ/viewform?embedded=true',
  sale: 'https://docs.google.com/forms/d/e/1FAIpQLSfwC8mF3gXl9_wM6c47X-59QQtZFJKitpQfAy9/viewform?embedded=true',
  development: 'https://docs.google.com/forms/d/e/1FAIpQLSfVb5qNhhgMKgRMqjV7Stv3khqA5Zv6ANKy7/viewform?embedded=true'
};

const DIRECT_FORM_LINKS = {
  buy: 'https://forms.gle/1SSxSGfyjrHfNtJQ9',
  sale: 'https://forms.gle/59QQtZFJKitpQfAy9',
  development: 'https://forms.gle/Stv3khqA5Zv6ANKy7'
};

const factors = {
  solar: { factor: 0.82, label: "Capacity / Volume / Area (kW)", unit: "kW", min: 500, max: 10000, step: 500, defaultVal: 500 },
  water: { factor: 0.0012, label: "Volume Recycled (KL/yr)", unit: "KL", min: 10000, max: 500000, step: 10000, defaultVal: 50000 },
  waste: { factor: 0.75, label: "Waste Processed (Tons/yr)", unit: "Tons", min: 100, max: 5000, step: 100, defaultVal: 500 },
  forest: { factor: 10.0, label: "Area (Hectares)", unit: "Ha", min: 10, max: 500, step: 10, defaultVal: 20 },
  ee: { factor: 0.71, label: "Electricity Saved (MWh/yr)", unit: "MWh", min: 100, max: 5000, step: 100, defaultVal: 500 }
};

export default function App() {
  const [assetType, setAssetType] = useState('solar');
  const [capacity, setCapacity] = useState(500);
  const [activeModal, setActiveModal] = useState(null); // 'buy', 'sale', 'development', 'login'
  const [showEmailInput, setShowEmailInput] = useState(false);

  const activeFactor = factors[assetType];
  const annualTons = Math.round(capacity * activeFactor.factor);
  const lifetimeUSD = annualTons * 10 * 10;
  const inrLakhs = ((lifetimeUSD * 84) / 100000).toFixed(1);

  const handleAssetSwitch = (key) => {
    setAssetType(key);
    setCapacity(factors[key].defaultVal);
  };

  return (
    <div className="ecf-page">
      {/* Navigation */}
      <nav className="ecf-nav">
        <div className="ecf-container ecf-nav-inner">
          <div className="ecf-logo">
            <span className="ecf-logo-text">Earth Carbon Foundation</span>
            <span className="ecf-badge">Asset Registry</span>
          </div>
          <div className="ecf-nav-links">
            <a href="#about">About</a>
            <a href="#value-flow">How It Works</a>
            <a href="#calculator">Calculator</a>
            <a href="#progress">Progress</a>
            <a href="#why-ecf">Why ECF</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="ecf-nav-actions">
            <button className="ecf-btn-secondary" onClick={() => setActiveModal('login')}>Login</button>
            <button className="ecf-btn-primary" onClick={() => setActiveModal('development')}>
              Start Assessment <span className="ecf-tag">₹4,999</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero: Buy · Sell · Generate */}
      <section id="about" className="ecf-hero">
        <div className="ecf-container text-center">
          <div className="ecf-pill">Earth Carbon Foundation</div>
          <h1 className="ecf-hero-title">ENVIRONMENTAL CREDITS</h1>
          <p className="ecf-hero-subtitle">Measure it. Generate it. Trade it.</p>
          <p className="ecf-hero-tagline">One platform. Buy · Sell · Generate</p>

          <div className="ecf-grid-3">
            {/* BUY CTA */}
            <div className="ecf-card">
              <div className="ecf-arrow">↗ BUY</div>
              <h3>Environment Credit Buying</h3>
              <p>Find and procure verified carbon and environmental credits for institutional compliance and net-zero targets.</p>
              <button className="ecf-btn-outline" onClick={() => setActiveModal('buy')}>
                Buy Credits Mandate →
              </button>
            </div>

            {/* SELL CTA */}
            <div className="ecf-card">
              <div className="ecf-arrow">↙ SELL</div>
              <h3>Environment Credit Sale</h3>
              <p>List your issued credits, registry serials, or pipeline projects to connect directly with institutional buyers.</p>
              <button className="ecf-btn-outline" onClick={() => setActiveModal('sale')}>
                Sale Mandate →
              </button>
            </div>

            {/* GENERATE / DEVELOP CTA */}
            <div className="ecf-card ecf-card-highlight">
              <div className="ecf-arrow text-mint">＋ GENERATE</div>
              <h3 className="text-white">Environmental Asset Development</h3>
              <p>Onboard operating solar, water, waste, or efficiency assets into the 15 MW Aggregation Pool.</p>
              <button className="ecf-btn-mint" onClick={() => setActiveModal('development')}>
                Development Mandate (₹4,999) →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* From Low-Carbon Action to Value */}
      <section id="value-flow" className="ecf-section bg-white">
        <div className="ecf-container text-center">
          <div className="ecf-pill">Execution Architecture</div>
          <h2 className="ecf-section-title">From Low-Carbon Action to Value</h2>
          <p className="ecf-section-desc">
            Turn what you already do into measurable value. ECF helps assess your low-carbon actions, develop eligible projects, progress them through the appropriate registry pathway, generate credits, and connect them with the market.
          </p>

          <div className="ecf-flow-steps">
            <div className="ecf-flow-step">
              <span className="ecf-step-num">01</span>
              <h4>ASSESS</h4>
              <p>Get your low-carbon actions assessed</p>
            </div>
            <div className="ecf-flow-step">
              <span className="ecf-step-num">02</span>
              <h4>DEVELOP</h4>
              <p>Develop eligible action into a project</p>
            </div>
            <div className="ecf-flow-step">
              <span className="ecf-step-num">03</span>
              <h4>REGISTER</h4>
              <p>Process project through registry pathway</p>
            </div>
            <div className="ecf-flow-step">
              <span className="ecf-step-num">04</span>
              <h4>GENERATE</h4>
              <p>Generate measurable credits</p>
            </div>
            <div className="ecf-flow-step ecf-flow-highlight">
              <span className="ecf-step-num text-mint">05</span>
              <h4 className="text-white">TRADE</h4>
              <p className="text-white-80">Connect credits with buyers</p>
            </div>
          </div>

          <div className="ecf-value-flow-bottom">
            <span>Your action</span> → <span>Measurable impact</span> → <span>Environmental credits</span> → <span>Market value</span>
          </div>
        </div>
      </section>

      {/* Free Calculator */}
      <section id="calculator" className="ecf-section bg-light">
        <div className="ecf-container-sm text-center">
          <div className="ecf-pill">Free Calculator</div>
          <h2 className="ecf-section-title">Want a Quick Indication?</h2>
          <p className="ecf-section-desc">Estimate the potential environmental value of your operating asset.</p>

          <div className="ecf-calc-box">
            <div className="ecf-calc-tabs">
              {['solar', 'water', 'waste', 'forest', 'ee'].map((key) => (
                <button
                  key={key}
                  className={`ecf-tab-btn ${assetType === key ? 'active' : ''}`}
                  onClick={() => handleAssetSwitch(key)}
                >
                  {key === 'solar' ? 'Solar PV' : key === 'water' ? 'Water' : key === 'waste' ? 'Waste' : key === 'forest' ? 'Forestry' : 'Efficiency'}
                </button>
              ))}
            </div>

            <div className="ecf-slider-group">
              <div className="ecf-slider-label">
                <span>{activeFactor.label}</span>
                <strong>{capacity.toLocaleString()} {activeFactor.unit}</strong>
              </div>
              <input
                type="range"
                min={activeFactor.min}
                max={activeFactor.max}
                step={activeFactor.step}
                value={capacity}
                onChange={(e) => setCapacity(Number(e.target.value))}
              />
            </div>

            <div className="ecf-calc-results">
              <div className="ecf-res-col">
                <small>Estimated Impact</small>
                <h3>{annualTons.toLocaleString()} tCO₂e/yr</h3>
              </div>
              <div className="ecf-res-col">
                <small>Indicative Value (10-Yr)*</small>
                <h3 className="text-mint">${lifetimeUSD.toLocaleString()} (~₹{inrLakhs}L)</h3>
              </div>
            </div>

            <small className="ecf-disclaimer">
              *Illustrative only. Estimates use placeholder assumptions and are not a formal valuation or offer.
            </small>

            <div className="ecf-calc-cta">
              <button className="ecf-btn-primary" onClick={() => setActiveModal('development')}>
                Start Assessment (₹4,999)
              </button>
              <button className="ecf-btn-secondary" onClick={() => setShowEmailInput(!showEmailInput)}>
                📧 Email Estimate
              </button>
            </div>

            {showEmailInput && (
              <form className="ecf-inline-email" onSubmit={(e) => { e.preventDefault(); alert('Estimate dispatched to your email!'); setShowEmailInput(false); }}>
                <input type="email" placeholder="Enter work email" required />
                <button type="submit" className="ecf-btn-primary">Send</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section id="progress" className="ecf-section bg-white">
        <div className="ecf-container text-center">
          <div className="ecf-pill">ECF Progress</div>
          <h2 className="ecf-section-title">Progress at a Glance</h2>
          <p className="ecf-section-desc">Example figures shown as placeholders until connected to live data.</p>

          <div className="ecf-kpi-grid">
            <div className="ecf-kpi-card"><h3>128</h3><p>Projects assessed</p></div>
            <div className="ecf-kpi-card"><h3>42</h3><p>Under development</p></div>
            <div className="ecf-kpi-card"><h3>680 MW+</h3><p>Under assessment</p></div>
            <div className="ecf-kpi-card"><h3>57</h3><p>Buyers registered</p></div>
            <div className="ecf-kpi-card"><h3 className="text-mint">1.2M</h3><p>Credits available</p></div>
          </div>

          <div className="ecf-breakdown-box">
            <h4>Programme Breakdown</h4>
            <div className="ecf-breakdown-grid">
              <div><span>Solar</span><strong>46%</strong></div>
              <div><span>Water</span><strong>22%</strong></div>
              <div><span>Waste</span><strong>18%</strong></div>
              <div><span>Nature</span><strong>14%</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why ECF */}
      <section id="why-ecf" className="ecf-section bg-light">
        <div className="ecf-container text-center">
          <div className="ecf-pill">Why ECF?</div>
          <h2 className="ecf-section-title">A Marketplace, Not a Textbook</h2>
          <p className="ecf-section-desc">Everything you need to turn environmental value into credits — and credits into outcomes.</p>

          <div className="ecf-grid-3 text-left">
            <div className="ecf-card"><h4>Environmental Asset Assessment</h4><p>Independent evaluation of your project’s credit potential.</p></div>
            <div className="ecf-card"><h4>Registry & Methodology Expertise</h4><p>Navigation of standards and methodologies without jargon.</p></div>
            <div className="ecf-card"><h4>Project Development</h4><p>From concept note to registered, credit-bearing project.</p></div>
            <div className="ecf-card"><h4>Credit Market Access</h4><p>Route your verified credits to institutional buyers.</p></div>
            <div className="ecf-card"><h4>Buyer / Seller Matching</h4><p>Connecting requirements with the right supply pipeline.</p></div>
            <div className="ecf-card ecf-card-highlight"><h4>Aggregated Value</h4><p className="text-white-80">Shared development costs to unlock viable economics for sub-15 MW sites.</p></div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="ecf-mission-section">
        <div className="ecf-container-sm text-center">
          <div className="ecf-pill">Our Mission</div>
          <blockquote className="ecf-quote">
            “To make environmental value accessible to every project that creates it — and connect that value with organisations willing to buy it.”
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="ecf-section bg-light">
        <div className="ecf-container-sm">
          <h2 className="ecf-section-title text-center">Frequently Asked Questions</h2>
          <div className="ecf-faq-list">
            <details>
              <summary>Do I need an existing carbon credit project?</summary>
              <p>No. We begin with your operating asset (solar rooftop, energy efficiency retrofit, or water recycling facility) and assess its potential for aggregation into a registered programme.</p>
            </details>
            <details>
              <summary>What does the ₹4,999 assessment fee cover?</summary>
              <p>It covers primary data eligibility screening, technical emission calculations, marketability modeling, and generation of your custom Programme Proposal and live portal dashboard.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ecf-footer">
        <div className="ecf-container ecf-footer-grid">
          <div>
            <h4 className="text-mint">ECF</h4>
            <p>Connecting environmental projects and credits with buyers. Section 8 institutional non-profit in Gujarat, India.</p>
            <small>CIN: U85300GJ2019NPL106818</small>
          </div>
          <div>
            <h4>Mandate Links</h4>
            <a href="#about" onClick={(e) => { e.preventDefault(); setActiveModal('buy'); }}>Environment Credit Buying</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); setActiveModal('sale'); }}>Environment Credit Sale</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); setActiveModal('development'); }}>Asset Development Mandate</a>
          </div>
          <div>
            <h4>Resources</h4>
            <a href="https://drive.google.com/file/d/1s_K5aatZV16fOD9NGilgl1KJ7OwplOTo/view?usp=sharing" target="_blank" rel="noreferrer">Asset Playbook ↗</a>
            <a href="https://drive.google.com/file/d/1AhAuqwLHXprsz8jGPdArHdIHnLmYM6cv/view?usp=sharing" target="_blank" rel="noreferrer">Readiness Snapshot ↗</a>
            <a href="https://drive.google.com/file/d/1FLOn7KRThW67ECnFmGfdtqHm5EyZcyR5/view?usp=sharing" target="_blank" rel="noreferrer">Corporate Profile ↗</a>
          </div>
          <div>
            <h4>Legal & Contact</h4>
            <a href="https://drive.google.com/file/d/1Kf7iX6x33_UceGFR4ZCLCP7TfDoYynZE/view?usp=sharing" target="_blank" rel="noreferrer">Terms</a>
            <a href="mailto:info@earthcarbonfoundation.org">info@earthcarbonfoundation.org</a>
            <a href="https://wa.me/919824025431" target="_blank" rel="noreferrer">+91-9824025431</a>
          </div>
        </div>
        <div className="ecf-footer-bottom">
          &copy; 2026 Earth Carbon Foundation. Prototype — figures are illustrative.
        </div>
      </footer>

      {/* MODAL 1: ENVIRONMENT CREDIT BUYING MANDATE */}
      {activeModal === 'buy' && (
        <div className="ecf-modal-backdrop">
          <div className="ecf-modal-body">
            <div className="ecf-modal-header">
              <span>Environment Credit Buying Mandate</span>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <a href={DIRECT_FORM_LINKS.buy} target="_blank" rel="noreferrer" style={{ color: '#fff', fontSize: '12px', textDecoration: 'underline' }}>
                  Open in new tab ↗
                </a>
                <button onClick={() => setActiveModal(null)}>✕</button>
              </div>
            </div>
            <iframe src={FORM_URLS.buy} title="Environment Credit Buying Mandate Form" />
          </div>
        </div>
      )}

      {/* MODAL 2: ENVIRONMENT CREDIT SALE MANDATE */}
      {activeModal === 'sale' && (
        <div className="ecf-modal-backdrop">
          <div className="ecf-modal-body">
            <div className="ecf-modal-header">
              <span>Environment Credit Sale Mandate</span>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <a href={DIRECT_FORM_LINKS.sale} target="_blank" rel="noreferrer" style={{ color: '#fff', fontSize: '12px', textDecoration: 'underline' }}>
                  Open in new tab ↗
                </a>
                <button onClick={() => setActiveModal(null)}>✕</button>
              </div>
            </div>
            <iframe src={FORM_URLS.sale} title="Environment Credit Sale Mandate Form" />
          </div>
        </div>
      )}

      {/* MODAL 3: ENVIRONMENTAL ASSET DEVELOPMENT MANDATE */}
      {activeModal === 'development' && (
        <div className="ecf-modal-backdrop">
          <div className="ecf-modal-body">
            <div className="ecf-modal-header">
              <span>Environmental Asset Development Mandate (₹4,999)</span>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <a href={DIRECT_FORM_LINKS.development} target="_blank" rel="noreferrer" style={{ color: '#fff', fontSize: '12px', textDecoration: 'underline' }}>
                  Open in new tab ↗
                </a>
                <button onClick={() => setActiveModal(null)}>✕</button>
              </div>
            </div>
            <iframe src={FORM_URLS.development} title="Environmental Asset Development Mandate Form" />
          </div>
        </div>
      )}

      {/* LOGIN MODAL */}
      {activeModal === 'login' && (
        <div className="ecf-modal-backdrop">
          <div className="ecf-modal-small">
            <div className="ecf-modal-header">
              <span>Client Portal Login</span>
              <button onClick={() => setActiveModal(null)}>✕</button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Redirecting to Portal...'); setActiveModal(null); }} className="ecf-login-form">
              <input type="email" placeholder="Work Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="ecf-btn-primary w-full">Login</button>
            </form>
          </div>
        </div>
      )}

      {/* WhatsApp Float */}
      <a href="https://wa.me/919824025431?text=Hi%20ECF!%20Exploring%20environmental%20credits." target="_blank" rel="noreferrer" className="ecf-whatsapp-btn">
        💬
      </a>
    </div>
  );
}