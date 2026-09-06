import React, { useState } from 'react';
import './App.css';

const LINKS = {
  cal: 'https://cal.com/amit-sinh-earth-carbon-wbfdu4',
  whatsapp: 'https://wa.me/919824025431'
};

const SERVICES_DATA = {
  '01': {
    code: '01',
    title: 'GHG / Carbon Accounting',
    subtitle: 'Scope 1 & Scope 2 corporate boundary inventories & verification.',
    specimen: 'Audit-ready GHG Inventory Dossier + Independent Verification Statement (GHG Protocol & ISO 14064 aligned).',
    standard: {
      price: '₹24,999',
      scope: 'Standard Corporate Boundary (Scope 1 & 2)',
      delivery: '5 Business Days',
      cta: 'Buy Standard Audit'
    },
    tailorMade: {
      price: 'Custom Quote',
      scope: 'Scope 1, 2 & relevant Scope 3 categories across multi-site facilities.',
      delivery: 'Defined by scope',
      cta: 'Request Custom Proposal'
    },
    practitioner: {
      action: 'Help Me Decide',
      desc: 'Connect with a certified GHG Practitioner to establish organizational boundaries and emission calculation factors.'
    }
  },
  '02': {
    code: '02',
    title: 'ESG / BRSR / SDG Reporting',
    subtitle: 'SEBI BRSR Core indicators, investor disclosures, and SDG impact mapping.',
    specimen: 'BRSR Core KPI Reporting Package + SDG Alignment Matrix for Tier-1 supply chains.',
    standard: {
      price: '₹39,999',
      scope: 'SEBI BRSR Core Essential Indicators (Pillar 1 to 9)',
      delivery: '7 Business Days',
      cta: 'Order BRSR Package'
    },
    tailorMade: {
      price: 'Custom Quote',
      scope: 'Comprehensive ESG materiality assessment, CDP submission & stakeholder narrative.',
      delivery: 'Defined by scope',
      cta: 'Request ESG Scope'
    },
    practitioner: {
      action: 'Consult Practitioner',
      desc: 'Review domestic supply chain compliance requirements and disclosure formats with our sector lead.'
    }
  },
  '03': {
    code: '03',
    title: 'Export / Environmental Compliance',
    subtitle: 'EU CBAM embedded emissions calculations and product carbon footprints.',
    specimen: 'Customs-ready CBAM Communication Template + Embedded Emissions Calculation Sheet.',
    standard: {
      price: '₹64,999',
      scope: 'Single HS Code Product Carbon Footprint (PCF) for EU border declarations',
      delivery: '10 Business Days',
      cta: 'Order CBAM Package'
    },
    tailorMade: {
      price: 'Custom Quote',
      scope: 'Multi-product export portfolios, supplier upstream data aggregation, and factory defense.',
      delivery: 'Defined by scope',
      cta: 'Request Export Review'
    },
    practitioner: {
      action: 'Speak to Trade Lead',
      desc: 'Verify applicable EU/US customs border rules to prevent port clearances and export disqualifications.'
    }
  },
  '04': {
    code: '04',
    title: 'Decarbonisation / Improvement',
    subtitle: 'Physical shop-floor walkthroughs, thermal efficiency, and power tariff reduction.',
    specimen: 'Prioritized Decarbonization Action Plan with verified Capex ROI and payback intervals.',
    standard: {
      price: '₹29,999',
      scope: 'Virtual Utility Bill Analysis + Top 3 Thermal/Electrical Leak Hotspot Audit',
      delivery: '5 Business Days',
      cta: 'Start Leak Audit'
    },
    tailorMade: {
      price: 'Custom Quote',
      scope: 'Comprehensive on-site shop-floor engineering audit, sub-meter calibration, and heat recovery roadmap.',
      delivery: 'On-site scheduled',
      cta: 'Request On-Site Audit'
    },
    practitioner: {
      action: 'Book Engineering Review',
      desc: 'Walk through plant billing data and sub-meter setups with an industrial energy specialist.'
    }
  },
  '05': {
    code: '05',
    title: 'Carbon Value / Credit Pathway',
    subtitle: 'Monetization pathway for sub-15 MW clean tech and solar installations.',
    specimen: 'Carbon Asset Qualification Memo + Issuance Forecast (Verra / Gold Standard aligned).',
    standard: {
      price: '₹0 Upfront',
      scope: 'Eligibility screening and aggregation onboarding into pooled issuance',
      delivery: 'Immediate',
      cta: 'Check Pooling Eligibility'
    },
    tailorMade: {
      price: 'Success-Share',
      scope: 'Full registration, validation, monitoring report preparation, and institutional buyer off-take.',
      delivery: 'Performance-based',
      cta: 'Apply for Monetization'
    },
    practitioner: {
      action: 'Assess Monetization',
      desc: 'Determine if your rooftop solar, bio-fuel, or waste-heat setups meet international registry benchmarks.'
    }
  },
  '06': {
    code: '06',
    title: 'Atmanirbhar Assessment',
    subtitle: 'Measure resource self-reliance, local grid independence, and operational resilience.',
    specimen: 'Official Atmanirbhar Index Certificate + Digital Badge for verified public disclosure.',
    standard: {
      price: '₹9,999',
      scope: 'Self-reliance benchmark, verified index scoring, and official shareable certificate',
      delivery: 'Instant upon intake',
      cta: 'Get Atmanirbhar Score'
    },
    tailorMade: {
      price: 'Custom Assessment',
      scope: 'Facility-wide multi-plant benchmark with board-level resilience strategy.',
      delivery: 'Defined by scope',
      cta: 'Request Plant Audit'
    },
    practitioner: {
      action: 'Learn About Index',
      desc: 'Understand how self-reliance scoring helps win OEM supply contracts and tenders.'
    }
  }
};

export default function App() {
  const [selectedService, setSelectedService] = useState('01');
  const [activeTier, setActiveTier] = useState('standard');
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [atmanirbharInputs, setAtmanirbharInputs] = useState({
    plantName: '',
    solarPct: 30,
    waterRecyclePct: 40,
    wasteDivertedPct: 50
  });
  const [calculatedScore, setCalculatedScore] = useState(null);

  const activeServiceData = SERVICES_DATA[selectedService];

  const openExternal = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppAction = (message) => {
    const encoded = encodeURIComponent(message);
    window.open(`${LINKS.whatsapp}?text=${encoded}`, '_blank');
  };

  const calculateScore = (e) => {
    e.preventDefault();
    const score = Math.round(
      (Number(atmanirbharInputs.solarPct) * 0.4) +
      (Number(atmanirbharInputs.waterRecyclePct) * 0.3) +
      (Number(atmanirbharInputs.wasteDivertedPct) * 0.3)
    );
    setCalculatedScore(score);
  };

  const shareOnSocial = (platform) => {
    const plant = atmanirbharInputs.plantName.trim() || 'Our Plant';
    const text = `${plant} achieved an Atmanirbhar Self-Reliance Score of ${calculatedScore}/100 with Earth Carbon Foundation! What is your score?`;
    if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://earthcarbonfoundation.org')}&summary=${encodeURIComponent(text)}`, '_blank');
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(text + ' https://earthcarbonfoundation.org')}`, '_blank');
    }
  };

  return (
    <div className="b2b-page">
      {/* 1. NAVIGATION */}
      <nav className="b2b-nav">
        <div className="b2b-container b2b-nav-inner">
          <div className="b2b-logo">
            <span className="b2b-logo-bold">ECF</span>
            <span className="b2b-logo-sub">Earth Carbon Foundation</span>
          </div>
          <div className="b2b-nav-links">
            <a href="#requirements">What You Need</a>
            <a href="#how-it-works">How ECF Works</a>
            <button className="nav-link-btn" onClick={() => setDashboardOpen(true)}>Your Dashboard</button>
            <a href="#about">About</a>
            <a href="#resources">Resources</a>
          </div>
          <div className="b2b-nav-actions">
            <a href="#atmanirbhar" className="b2b-btn-primary">
              Join ECF ↗
            </a>
          </div>
        </div>
      </nav>

      {/* 2. HERO */}
      <section className="b2b-hero" id="top">
        <div className="b2b-container text-center">
          <div className="b2b-pill">One Earth. Shared Resources. Measurable Action.</div>
          <h1 className="b2b-hero-title">Requirement-Led Commercial Sustainability.</h1>
          <p className="b2b-hero-subtitle">
            Turn statutory compliance, carbon disclosure, and operational efficiency into verifiable balance sheet value. Select your operational requirement below to access standard deliverables, fixed pricing, or practitioner support.
          </p>
          <div className="b2b-hero-cta">
            <a href="#requirements" className="b2b-btn-primary b2b-btn-lg">
              Select Your Requirement ↓
            </a>
            <a href="#atmanirbhar" className="b2b-btn-outline b2b-btn-lg">
              Get Atmanirbhar Score
            </a>
          </div>
          <div className="b2b-trust-row">
            <span className="b2b-trust-item">✓ GHG Protocol Standard</span>
            <span>•</span>
            <span className="b2b-trust-item">✓ SEBI BRSR Core Aligned</span>
            <span>•</span>
            <span className="b2b-trust-item">✓ EU CBAM Audit Ready</span>
          </div>
        </div>
      </section>

      {/* 3. THE 6 SERVICE REQUIREMENTS */}
      <section id="requirements" className="b2b-section bg-light">
        <div className="b2b-container text-center">
          <div className="b2b-pill">Service Catalog</div>
          <h2 className="b2b-section-title">What Do You Need to Do?</h2>
          <p className="b2b-section-desc">Select an operational requirement to configure scope, view specimen output, and lock pricing.</p>

          <div className="b2b-grid-3 text-left">
            {Object.keys(SERVICES_DATA).map((key) => {
              const item = SERVICES_DATA[key];
              const isSelected = selectedService === key;
              return (
                <div
                  key={key}
                  onClick={() => {
                    setSelectedService(key);
                    const el = document.getElementById('service-delivery-engine');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`b2b-card ${isSelected ? 'b2b-price-featured' : 'b2b-card-solution'}`}
                  style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '13px', fontWeight: 800, color: '#16a34a' }}>[{item.code}]</span>
                    {isSelected && <span style={{ fontSize: '11px', background: '#16a34a', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>SELECTED</span>}
                  </div>
                  <h3 style={{ marginTop: '12px', fontSize: '18px' }}>{item.title}</h3>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.5 }}>{item.subtitle}</p>
                  <div style={{ marginTop: '14px', fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                    Configure Scope →
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SERVICE DELIVERY ROUTER */}
      <section id="service-delivery-engine" className="b2b-section bg-white">
        <div className="b2b-container">
          <div className="text-center" style={{ marginBottom: '35px' }}>
            <div className="b2b-pill">Delivery Engine</div>
            <h2 className="b2b-section-title">[{activeServiceData.code}] {activeServiceData.title}</h2>
            <p className="b2b-section-desc">{activeServiceData.subtitle}</p>
          </div>

          <div className="arch-diagram-wrapper" style={{ margin: '0 auto 35px', maxWidth: '780px' }}>
            <span className="arch-diagram-title">Specimen Output / What You Receive</span>
            <div style={{ padding: '16px 0', color: '#e2e8f0', fontSize: '14px', lineHeight: 1.6 }}>
              <strong>Verified Deliverable:</strong> {activeServiceData.specimen}
            </div>
            <div style={{ fontSize: '12px', color: '#94a3b8' }}>
              ✓ Aligned with accredited verification agencies • ✓ Audit-ready export • ✓ Backed by certified GHG practitioners
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '30px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTier('standard')}
              className={activeTier === 'standard' ? 'b2b-btn-primary' : 'b2b-btn-outline'}
            >
              Standard (Comply)
            </button>
            <button
              onClick={() => setActiveTier('tailorMade')}
              className={activeTier === 'tailorMade' ? 'b2b-btn-primary' : 'b2b-btn-outline'}
            >
              Tailor-Made (Communicate)
            </button>
            <button
              onClick={() => setActiveTier('practitioner')}
              className={activeTier === 'practitioner' ? 'b2b-btn-primary' : 'b2b-btn-outline'}
            >
              Practitioner (Help Me Decide)
            </button>
          </div>

          <div className="b2b-card" style={{ maxWidth: '750px', margin: '0 auto', padding: '32px', border: '1px solid #cbd5e1' }}>
            {activeTier === 'standard' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '20px' }}>Standard Prescribed Route</h3>
                    <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#64748b' }}>Defined scope, recognized format, online fixed price.</p>
                  </div>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a' }}>{activeServiceData.standard.price}</div>
                </div>
                <div style={{ margin: '20px 0' }}>
                  <p style={{ margin: '8px 0', fontSize: '14px' }}><strong>Scope:</strong> {activeServiceData.standard.scope}</p>
                  <p style={{ margin: '8px 0', fontSize: '14px' }}><strong>Turnaround:</strong> {activeServiceData.standard.delivery}</p>
                </div>
                <button
                  className="b2b-btn-primary w-full"
                  onClick={() => handleWhatsAppAction(`Hi ECF! I want to proceed with the Standard [${activeServiceData.code}] ${activeServiceData.title} package at ${activeServiceData.standard.price}.`)}
                >
                  {activeServiceData.standard.cta} →
                </button>
              </div>
            )}

            {activeTier === 'tailorMade' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid #e2e8f0', paddingBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '20px' }}>Tailor-Made Corporate Route</h3>
                    <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#64748b' }}>Multi-plant analysis, stakeholder communication, and custom roadmap.</p>
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a' }}>{activeServiceData.tailorMade.price}</div>
                </div>
                <div style={{ margin: '20px 0' }}>
                  <p style={{ margin: '8px 0', fontSize: '14px' }}><strong>Scope:</strong> {activeServiceData.tailorMade.scope}</p>
                  <p style={{ margin: '8px 0', fontSize: '14px' }}><strong>Timeline:</strong> {activeServiceData.tailorMade.delivery}</p>
                </div>
                <button
                  className="b2b-btn-outline w-full"
                  onClick={() => handleWhatsAppAction(`Hi ECF! I require a Tailor-Made proposal for [${activeServiceData.code}] ${activeServiceData.title}. Here are our facility requirements:`)}
                >
                  {activeServiceData.tailorMade.cta} →
                </button>
              </div>
            )}

            {activeTier === 'practitioner' && (
              <div>
                <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px' }}>
                  <h3 style={{ margin: 0, fontSize: '20px' }}>Practitioner-Led Route</h3>
                  <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#64748b' }}>Uncertain about applicability or data collection? Let an expert prescribe your scope.</p>
                </div>
                <div style={{ margin: '20px 0' }}>
                  <p style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6 }}>{activeServiceData.practitioner.desc}</p>
                </div>
                <button
                  className="b2b-btn-primary w-full"
                  onClick={() => openExternal(LINKS.cal)}
                >
                  Schedule 30-Min Technical Intake ↗
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. ATMANIRBHAR ASSESSMENT */}
      <section id="atmanirbhar" className="b2b-section bg-light">
        <div className="b2b-container">
          <div className="text-center" style={{ maxWidth: '780px', margin: '0 auto 40px' }}>
            <div className="b2b-pill">Foundation Membership</div>
            <h2 className="b2b-section-title">Join ECF: The Atmanirbhar Assessment</h2>
            <p className="b2b-section-desc">
              Calculate your facility's Resource Self-Reliance Score. Onboard as an authorized member and generate an auditable, shareable certificate for LinkedIn and Tier-1 buyers.
            </p>
          </div>

          <div className="b2b-card" style={{ maxWidth: '720px', margin: '0 auto', background: '#fff' }}>
            <form onSubmit={calculateScore}>
              <div className="b2b-form-group">
                <label>Plant / Corporate Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Industrial Solutions"
                  value={atmanirbharInputs.plantName}
                  onChange={(e) => setAtmanirbharInputs({ ...atmanirbharInputs, plantName: e.target.value })}
                />
              </div>

              <div className="b2b-form-group">
                <label>Clean Energy Share: {atmanirbharInputs.solarPct}% of total consumption</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={atmanirbharInputs.solarPct}
                  onChange={(e) => setAtmanirbharInputs({ ...atmanirbharInputs, solarPct: e.target.value })}
                  style={{ width: '100%' }}
                />
              </div>

              <div className="b2b-form-group">
                <label>Water Recycled / Harvested: {atmanirbharInputs.waterRecyclePct}%</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={atmanirbharInputs.waterRecyclePct}
                  onChange={(e) => setAtmanirbharInputs({ ...atmanirbharInputs, waterRecyclePct: e.target.value })}
                  style={{ width: '100%' }}
                />
              </div>

              <div className="b2b-form-group">
                <label>Waste Diverted from Landfills: {atmanirbharInputs.wasteDivertedPct}%</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={atmanirbharInputs.wasteDivertedPct}
                  onChange={(e) => setAtmanirbharInputs({ ...atmanirbharInputs, wasteDivertedPct: e.target.value })}
                  style={{ width: '100%' }}
                />
              </div>

              <button type="submit" className="b2b-btn-primary w-full" style={{ marginTop: '10px' }}>
                Calculate My Resource Self-Reliance Score →
              </button>
            </form>

            {calculatedScore !== null && (
              <div style={{ marginTop: '30px', padding: '24px', background: '#f0fdf4', borderRadius: '12px', border: '2px solid #16a34a', textAlign: 'center' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: '#166534' }}>
                  Verified Assessment Result
                </span>
                <div style={{ fontSize: '56px', fontWeight: 900, color: '#15803d', margin: '10px 0' }}>
                  {calculatedScore}<span style={{ fontSize: '24px', fontWeight: 600 }}>/100</span>
                </div>
                <h4 style={{ margin: '0 0 8px', color: '#0f172a' }}>
                  {atmanirbharInputs.plantName || 'Your Facility'} — Atmanirbhar Rating
                </h4>
                <p style={{ fontSize: '13px', color: '#475569', maxWidth: '520px', margin: '0 auto 20px' }}>
                  This score reflects your current degree of utility and resource independence. Higher scores qualify for accelerated carbon monetization pools and supply-chain preference.
                </p>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button className="b2b-btn-primary" onClick={() => shareOnSocial('linkedin')}>
                    Share on LinkedIn ↗
                  </button>
                  <button className="b2b-btn-outline" onClick={() => shareOnSocial('whatsapp')}>
                    Share on WhatsApp ↗
                  </button>
                  <button
                    className="b2b-btn-outline"
                    onClick={() => handleWhatsAppAction(`Hi ECF! We scored ${calculatedScore}/100 on our Atmanirbhar Assessment for ${atmanirbharInputs.plantName}. We want to claim our official certificate and plan our next steps.`)}
                  >
                    Claim Official Certificate (₹9,999) ↗
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. HOW ECF WORKS */}
      <section id="how-it-works" className="b2b-section bg-white">
        <div className="b2b-container text-center">
          <div className="b2b-pill">Operational Cycle</div>
          <h2 className="b2b-section-title">How ECF Works: The 7-Step Lifecycle</h2>
          <p className="b2b-section-desc">From initial organizational knowledge to recurring monetization.</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', margin: '40px 0 20px' }}>
            {['KNOW', 'MEASURE', 'ACT', 'DOCUMENT', 'REPORT', 'TRACK', 'VALUE'].map((step, idx) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  padding: '12px 18px',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '13px',
                  color: '#0f172a'
                }}>
                  <span style={{ color: '#16a34a', marginRight: '6px' }}>0{idx + 1}.</span> {step}
                </div>
                {idx < 6 && <span style={{ margin: '0 4px', color: '#94a3b8', fontWeight: 700 }}>→</span>}
              </div>
            ))}
          </div>

          <div className="roi-table-wrap" style={{ marginTop: '30px' }}>
            <table className="roi-table-v2">
              <thead>
                <tr>
                  <th>Phase</th>
                  <th>Key Milestone</th>
                  <th>Responsible Party</th>
                  <th>Deliverable</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>01. Know</strong></td>
                  <td>Boundary calibration & data intake</td>
                  <td>Plant Lead + ECF</td>
                  <td>Facility Scope Sheet</td>
                </tr>
                <tr>
                  <td><strong>02. Measure</strong></td>
                  <td>Scope 1 & 2 baseline computation</td>
                  <td>ECF Engine</td>
                  <td>Automated Baseline Ledger</td>
                </tr>
                <tr>
                  <td><strong>03. Act</strong></td>
                  <td>Thermal & electrical leak elimination</td>
                  <td>Plant Maintenance</td>
                  <td>Direct Utility Bill Reductions</td>
                </tr>
                <tr>
                  <td><strong>04. Document</strong></td>
                  <td>Evidence vault compilation</td>
                  <td>ECF Practitioner</td>
                  <td>Audit Defense Portfolio</td>
                </tr>
                <tr>
                  <td><strong>05. Report</strong></td>
                  <td>Prescribed statutory disclosure</td>
                  <td>ECF Lead</td>
                  <td>BRSR / CBAM Submissions</td>
                </tr>
                <tr>
                  <td><strong>06. Track</strong></td>
                  <td>Live dashboard & continuous metering</td>
                  <td>ECF Digital Vault</td>
                  <td>Quarterly Progress Review</td>
                </tr>
                <tr>
                  <td><strong>07. Value</strong></td>
                  <td>Pooled carbon aggregation & payout</td>
                  <td>ECF Carbon Desk</td>
                  <td>75% Net Carbon Inflow</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. ABOUT */}
      <section id="about" className="b2b-section bg-light">
        <div className="b2b-container-sm text-center">
          <div className="b2b-pill">Institutional Rigor</div>
          <h2 className="b2b-section-title">Fractional Architecture. Real Industrial Accountability.</h2>
          <p className="b2b-section-desc">
            Earth Carbon Foundation (ECF) delivers certified, multi-sector environmental architecture for MSMEs and corporate facilities across India.
          </p>
          <blockquote className="b2b-quote" style={{ marginTop: '25px' }}>
            “When properly engineered, environmental compliance is never a net cost. Reduced utility tariffs and pooled carbon credits turn the entire setup into a positive cashflow generator.”
          </blockquote>
          <div className="b2b-attribution">
            <strong>Amitsinh Vaghela</strong>
            <span>Founder & GHG Practitioner, Earth Carbon Foundation</span>
          </div>
        </div>
      </section>

      {/* 8. RESOURCES */}
      <section id="resources" className="b2b-section bg-white">
        <div className="b2b-container text-center">
          <div className="b2b-pill">Technical Resources</div>
          <h2 className="b2b-section-title">Specimens & Compliance Templates</h2>
          <p className="b2b-section-desc">Download blank intake sheets and sample verification letters.</p>

          <div className="b2b-grid-3 text-left" style={{ marginTop: '30px' }}>
            <div className="b2b-card b2b-card-solution">
              <h4>Scope 1 & 2 Data Intake Template</h4>
              <p style={{ fontSize: '13px', color: '#64748b' }}>Standardized Excel workbook formatted for GHG Protocol compliance.</p>
              <button className="b2b-btn-outline" onClick={() => handleWhatsAppAction('Hi ECF! Please share the Scope 1 & 2 Data Intake Template.')}>
                Request Template (XLS) ↗
              </button>
            </div>
            <div className="b2b-card b2b-card-solution">
              <h4>EU CBAM Exporter Checklist</h4>
              <p style={{ fontSize: '13px', color: '#64748b' }}>Essential data points required by European buyers for steel, aluminum, and manufacturing.</p>
              <button className="b2b-btn-outline" onClick={() => handleWhatsAppAction('Hi ECF! Please share the CBAM Exporter Checklist.')}>
                Request Checklist (PDF) ↗
              </button>
            </div>
            <div className="b2b-card b2b-card-solution">
              <h4>PoA Carbon Eligibility Guide</h4>
              <p style={{ fontSize: '13px', color: '#64748b' }}>Detailed criteria for sub-15 MW rooftop solar, bio-mass, and waste energy pooling.</p>
              <button className="b2b-btn-outline" onClick={() => handleWhatsAppAction('Hi ECF! Please share the PoA Carbon Eligibility Guide.')}>
                Request Guide (PDF) ↗
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ (UNBREAKABLE ACCORDION) */}
      <section id="faq" className="b2b-section bg-light">
        <div className="b2b-container-sm text-center">
          <div className="b2b-pill">Have Questions?</div>
          <h2 className="b2b-section-title">Frequently Asked Questions</h2>
          <p className="b2b-section-desc">Direct answers on fractional architecture, registry pooling, and onboarding.</p>

          <div className="b2b-faq-list text-left" style={{ marginTop: '30px' }}>
            <div className="b2b-faq-item">
              <summary>What is a "Fractional Sustainability Service"?</summary>
              <p>Instead of carrying a full-time ESG manager (₹6L–₹9L/year), you get senior certified GHG practitioners and digital vaults on-demand at a fraction of the cost, eliminating permanent payroll overhead.</p>
            </div>
            <div className="b2b-faq-item">
              <summary>What is the difference between Standard, Tailor-Made, and Practitioner?</summary>
              <p><strong>Standard:</strong> Fixed-price, prescribed regulatory format for immediate compliance.<br /><strong>Tailor-Made:</strong> Custom multi-plant corporate analysis designed for stakeholder communication and value generation.<br /><strong>Practitioner:</strong> Direct consultation to diagnose your exact regulatory exposure.</p>
            </div>
            <div className="b2b-faq-item">
              <summary>How does the Atmanirbhar Score work?</summary>
              <p>The Atmanirbhar Index measures your facility's degree of independence from external fossil grids, municipal freshwater networks, and landfill dependencies. It generates a verified certificate for public and buyer recognition.</p>
            </div>
            <div className="b2b-faq-item">
              <summary>How does the ₹0 Upfront Carbon Monetization work?</summary>
              <p>Small-to-mid clean energy installations (&lt;15 MW) cannot justify standalone registry audit fees. ECF aggregates your eligible assets under a Program of Activities (PoA). We manage the registry audits and retain a 25% success fee upon credit sale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CLIENT DASHBOARD PLACEHOLDER MODAL */}
      {dashboardOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '36px',
            maxWidth: '480px',
            width: '100%',
            position: 'relative',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <button
              onClick={() => setDashboardOpen(false)}
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}
            >
              ✕
            </button>
            <div className="b2b-pill">Client Portal</div>
            <h3 style={{ margin: '12px 0 8px' }}>Facility Vault Login</h3>
            <p style={{ fontSize: '13px', color: '#64748b' }}>Access real-time Scope 1 & 2 logs, audit portfolios, and carbon issuance status.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); alert('Demo Vault: Client access will be provisioned following your baseline intake.'); }}>
              <div className="b2b-form-group" style={{ textAlign: 'left', marginTop: '16px' }}>
                <label>Facility Identifier / Account Email</label>
                <input type="email" required placeholder="plant.manager@company.com" />
              </div>
              <div className="b2b-form-group" style={{ textAlign: 'left' }}>
                <label>Vault Access Key</label>
                <input type="password" required placeholder="••••••••" />
              </div>
              <button type="submit" className="b2b-btn-primary w-full" style={{ marginTop: '8px' }}>
                Log in to Facility Vault →
              </button>
            </form>
            <div style={{ marginTop: '16px', fontSize: '12px', color: '#94a3b8' }}>
              Need to initialize your vault? Complete your Atmanirbhar Assessment or order a Standard service.
            </div>
          </div>
        </div>
      )}

      {/* 11. FOOTER */}
      <footer className="b2b-footer">
        <div className="b2b-container b2b-footer-inner">
          <div>
            <strong>Earth Carbon Foundation</strong> © 2026. All rights reserved.
            <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>
              CIN: U85300GJ2019NPL106818 · Gujarat, India
            </div>
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