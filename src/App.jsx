import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('portfolio');
  const [formData, setFormData] = useState({
    entity: '',
    email: '',
    volume: '',
    custody: 'Fireblocks / Institutional Multi-Sig (EVM)'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] antialiased selection:bg-[#6cf8bb] selection:text-[#002113] min-h-screen flex flex-col font-sans">
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-[#0f241d] flex items-center justify-center text-[#6ffbbe] transition-transform group-hover:scale-105">
              <span className="material-symbols-outlined">eco</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-[#000b07]">CarboDex</span>
              <span className="text-xs text-[#424845] font-medium -mt-1 hidden sm:inline">Cooperative Clearinghouse</span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#cooperative-model" className="text-sm text-[#424845] hover:text-[#006c49]">Cooperative Model</a>
            <a href="#protocol-specs" className="text-sm text-[#424845] hover:text-[#006c49]">Protocol Specs</a>
            <a href="#pilot" className="text-sm text-[#424845] hover:text-[#006c49]">Enterprise Pilot</a>
            <a href="#roadmap" className="text-sm text-[#424845] hover:text-[#006c49]">Governance Council</a>
            <a href="#orderbook" className="text-sm text-[#006c49] font-semibold flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#6cf8bb]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#006c49] animate-pulse"></span>
              Live Orderbook
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#pilot" className="hidden sm:inline-flex items-center justify-center text-sm text-[#000b07] bg-white border border-[#c2c8c4] rounded-lg px-3.5 py-2 hover:bg-[#eff4ff]">
              Join Pilot Consortium
            </a>
            <a href="#prototype" className="inline-flex items-center gap-1.5 justify-center text-sm text-white bg-[#0f241d] rounded-lg px-4 py-2 hover:bg-[#000b07] shadow-sm">
              <span className="material-symbols-outlined text-[16px]">deployed_code</span>
              Launch Prototype v4.2
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="relative pt-8 sm:pt-16 pb-12 sm:pb-20 px-4 lg:px-8 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#c2c8c4] shadow-sm mb-6">
            <span className="w-4 h-4 rounded-full bg-[#6cf8bb] text-[#006c49] flex items-center justify-center text-[10px] font-bold">✓</span>
            <span className="text-xs font-semibold text-[#000b07]">ISDA-COMPLIANT CLEARINGHOUSE COOPERATIVE | ZERO OTC SPREAD</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#000b07] tracking-tight">
                The Open-Source, Cooperative Financial Clearinghouse for Verified Carbon Removal
              </h1>
              <p className="text-base md:text-lg text-[#424845] max-w-3xl leading-relaxed">
                Transitioning institutional carbon procurement from opaque, predatory OTC brokers into a transparent, low-fee multi-stakeholder cooperative governed by enterprise buyers, project originators, and scientific auditors.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a href="#pilot" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-[#0f241d] text-white font-semibold shadow-md hover:bg-[#000b07]">
                  <span className="material-symbols-outlined text-[18px]">corporate_fare</span>
                  Request Institutional Onboarding
                </a>
                <a href="#prototype" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-white border border-[#c2c8c4] text-[#000b07] font-semibold hover:bg-[#eff4ff]">
                  <span className="material-symbols-outlined text-[#006c49] text-[18px]">dashboard_customize</span>
                  Explore 20-Screen Master Prototype
                </a>
              </div>
            </div>

            {/* Atmospheric Widget Feed */}
            <div className="lg:col-span-4 bg-white rounded-xl border border-[#c2c8c4] shadow-sm p-5 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#c2c8c4]/40">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#006c49] animate-ping"></span>
                  <span className="text-xs font-bold text-[#000b07]">SYNCHRONIZED AUDIT ENGINE</span>
                </div>
                <span className="text-xs text-[#727875] font-mono">NODE #774-EU</span>
              </div>
              <div className="p-3 rounded-lg bg-[#eff4ff]/70 border border-[#c2c8c4]/30 space-y-1">
                <div className="flex justify-between items-center text-xs font-bold text-[#006c49]">
                  <span>Kenia Biochar Basin IX</span>
                  <span className="px-2 py-0.5 rounded bg-[#6cf8bb]/30">Tier AAA</span>
                </div>
                <div className="flex justify-between items-baseline text-xs text-[#424845]">
                  <span>Spectral Index: NDVI 0.82</span>
                  <span className="text-sm font-bold text-[#000b07]">14,250 tCO2e</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-[#eff4ff]/70 border border-[#c2c8c4]/30 space-y-1">
                <div className="flex justify-between items-center text-xs font-bold text-[#006c49]">
                  <span>Climeworks Mammoth DAC</span>
                  <span className="px-2 py-0.5 rounded bg-[#6cf8bb]/30">Tier AAA</span>
                </div>
                <div className="flex justify-between items-baseline text-xs text-[#424845]">
                  <span>Basaltic Geostorage</span>
                  <span className="text-sm font-bold text-[#000b07]">3,600 tCO2e</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: TRI-PARTITE ARCHITECTURE */}
        <section id="cooperative-model" className="py-16 bg-[#eff4ff]/50 border-y border-[#c2c8c4]/30 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-12">
              <span className="px-3 py-1 rounded-full bg-[#6cf8bb]/20 text-[#006c49] text-xs font-semibold">Tripartite Governance Structure</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000b07] mt-3">The Multi-Stakeholder Cooperative Architecture</h2>
              <p className="text-base text-[#424845] mt-2">Engineered to dissolve structural broker conflicts with equal voting distribution across enterprise buyers, originators, and audit nodes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-[#c2c8c4] p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#000b07] mb-2">Enterprise Offtakers</h3>
                  <p className="text-sm text-[#424845] mb-4">Direct forward price-fixing without predatory intermediary markups.</p>
                  <ul className="space-y-2 text-xs text-[#424845]">
                    <li>✓ Direct Bilateral Offtake Agreements</li>
                    <li>✓ Patronage Surplus Dividends</li>
                    <li>✓ Instant EU CSRD & SEC Reports</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-xl border-2 border-[#006c49] p-6 shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#000b07] mb-2">Project Originators</h3>
                  <p className="text-sm text-[#424845] mb-4">99.85% capital delivery straight into field deployment operations.</p>
                  <ul className="space-y-2 text-xs text-[#424845]">
                    <li>✓ Zero Broker Gouging</li>
                    <li>✓ IoT & Spectral MRV Minting</li>
                    <li>✓ Community FPIC Escrow Protection</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-[#c2c8c4] p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#000b07] mb-2">Independent Auditors & VVBs</h3>
                  <p className="text-sm text-[#424845] mb-4">Continuous decentralized cryptographic verification nodes.</p>
                  <ul className="space-y-2 text-xs text-[#424845]">
                    <li>✓ Satellite Anomaly Feeds</li>
                    <li>✓ Algorithmic Double-Counting Check</li>
                    <li>✓ Reputation-Staked Slash Guarantees</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: PILOT INTAKE & FORM */}
        <section id="pilot" className="py-16 px-4 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#c2c8c4] p-8 shadow-sm max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#000b07] mb-2">Apply for Institutional Pilot Consortium</h2>
            <p className="text-sm text-[#424845] mb-6">Zero clearing fees throughout the testnet phase. Access bilateral forward contracts with sovereign buffer pool guarantees.</p>
            
            {submitted ? (
              <div className="p-6 bg-[#6cf8bb]/20 border border-[#006c49] rounded-xl text-center">
                <h3 className="text-lg font-bold text-[#006c49]">Dossier Received Successfully!</h3>
                <p className="text-sm text-[#424845] mt-1">Our Governance Council secretariat will review your entity credentials within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#000b07] mb-1">Legal Corporate / Originator Entity</label>
                  <input 
                    type="text" 
                    required
                    value={formData.entity}
                    onChange={(e) => setFormData({...formData, entity: e.target.value})}
                    placeholder="e.g. Novartis Treasury AG" 
                    className="w-full h-11 px-3 rounded-lg border border-[#c2c8c4] text-sm focus:ring-2 focus:ring-[#006c49]"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#000b07] mb-1">Treasury Lead Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="treasury@corporation.com" 
                      className="w-full h-11 px-3 rounded-lg border border-[#c2c8c4] text-sm focus:ring-2 focus:ring-[#006c49]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#000b07] mb-1">Target Annual Volume (tCO2e)</label>
                    <input 
                      type="text" 
                      required
                      value={formData.volume}
                      onChange={(e) => setFormData({...formData, volume: e.target.value})}
                      placeholder="e.g. 50,000 tCO2e/yr" 
                      className="w-full h-11 px-3 rounded-lg border border-[#c2c8c4] text-sm focus:ring-2 focus:ring-[#006c49]"
                    />
                  </div>
                </div>
                <button type="submit" className="w-full h-12 rounded-lg bg-[#0f241d] text-white font-semibold hover:bg-[#000b07] transition-all shadow-md">
                  Submit Consortium Intake Dossier
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#000b07] text-white pt-12 pb-8 px-4 lg:px-8 border-t border-[#0f241d]">
        <div className="max-w-7xl mx-auto text-center text-xs text-[#727875]">
          © 2025 CarboDex Multi-Stakeholder Cooperative Society. Registered under Institutional Non-Profit Utility Framework.
        </div>
      </footer>
    </div>
  );
}