import React, { useState } from 'react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0); // 0: Welcome, 1: Registry Portal Dashboard, 2: Checkout, 3: Confirmation, 4: Perks
  const [currency, setCurrency] = useState('INR');
  const [selectedRail, setSelectedRail] = useState('upi');
  const [metricVal, setMetricVal] = useState(120);
  const [actionType, setActionType] = useState('ev');
  const [queuePosition] = useState(412);
  const [copied, setCopied] = useState(false);

  const factors = { ev: 0.14, solar: 0.82, waste: 0.55, bio: 1.20 };
  const avoidedTons = ((metricVal * (factors[actionType] || 0.14)) / 1000).toFixed(4);
  const inrSavings = Math.round(avoidedTons * 8000);
  const usdSavings = (avoidedTons * 96.3).toFixed(2);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] antialiased min-h-screen flex flex-col justify-between selection:bg-[#6cf8bb] selection:text-[#00714d] font-sans">
      
      {/* Institutional Header */}
      <header className="bg-white border-b border-[#c2c8c4]/40 sticky top-0 z-50 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentScreen(0)}>
            <div className="w-10 h-10 rounded-lg bg-[#0f241d] text-[#6ffbbe] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[24px]">eco</span>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-[#000b07]">Earth Carbon Foundation</span>
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-[#006c49]"></span>
                <span className="text-xs text-[#727875] font-mono">Sovereign Environmental Data Registry</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="inline-flex p-1 bg-[#e5eeff] rounded-lg border border-[#c2c8c4]/40">
              <button 
                onClick={() => setCurrency('INR')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all ${currency === 'INR' ? 'bg-white text-[#000b07] shadow-xs' : 'text-[#727875]'}`}
              >
                ₹ INR
              </button>
              <button 
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all ${currency === 'USD' ? 'bg-white text-[#000b07] shadow-xs' : 'text-[#727875]'}`}
              >
                $ USD
              </button>
            </div>
            <button 
              onClick={() => setCurrentScreen(1)} 
              className="hidden sm:inline-flex items-center text-sm font-semibold bg-[#0f241d] text-white px-5 py-2.5 rounded-lg hover:bg-black transition-all cursor-pointer"
            >
              Member Access
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-10 space-y-12 flex flex-col justify-center">

        {/* SCREEN 0: WELCOME PRINCIPLES */}
        {currentScreen === 0 && (
          <div className="max-w-2xl mx-auto text-center space-y-8 bg-white border border-[#c2c8c4]/60 rounded-3xl p-10 sm:p-14 shadow-sm animate-fadeIn">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-[#0f241d] text-[#6ffbbe] flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[40px]">eco</span>
            </div>

            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#eff4ff] text-[#006c49] border border-[#c2c8c4]/40">
                Environmental Registry
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#000b07] tracking-tight">
                Welcome to Earth Carbon Foundation
              </h1>

              <div className="py-2 space-y-2">
                <p className="text-xl font-semibold text-[#006c49] italic">
                  "The World Is One Family"
                </p>
                <p className="text-xs text-[#727875] font-mono uppercase tracking-widest">
                  — Vasudhaiva Kutumbakam —
                </p>
              </div>

              <div className="pt-2 max-w-md mx-auto">
                <div className="bg-[#eff4ff] py-4 px-6 rounded-2xl border border-[#c2c8c4]/40 shadow-xs">
                  <p className="text-base font-bold text-[#000b07]">
                    Natural resources belong to us all.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={() => setCurrentScreen(1)}
                className="px-8 h-14 bg-[#0f241d] hover:bg-black text-white font-bold rounded-xl text-base flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>Enter the Registry Portal</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <button 
                onClick={() => setCurrentScreen(1)}
                className="px-6 h-14 bg-[#eff4ff] hover:bg-[#dce9ff] text-[#000b07] font-bold rounded-xl text-base border border-[#c2c8c4]/40 transition-all cursor-pointer"
              >
                Member Login
              </button>
            </div>
          </div>
        )}

        {/* SCREEN 1: SIMPLIFIED REGISTRY DASHBOARD */}
        {currentScreen === 1 && (
          <div className="space-y-12 animate-fadeIn">
            <div className="flex items-center justify-between">
              <button onClick={() => setCurrentScreen(0)} className="text-xs text-[#006c49] font-bold flex items-center gap-1 cursor-pointer">
                <span className="material-symbols-outlined text-[16px]">arrow_back</span> Return to Welcome
              </button>
            </div>

            <section className="bg-white border border-[#c2c8c4]/60 rounded-2xl p-8 sm:p-12 shadow-xs space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff4ff] text-[#006c49] text-xs font-bold border border-[#c2c8c4]/40">
                <span className="w-2 h-2 rounded-full bg-[#006c49] animate-pulse"></span>
                Official Public Registry Protocol
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#000b07] tracking-tight leading-tight">
                Transparent Baseline Records for Institutional & Grassroots Actions
              </h1>
              <p className="text-base sm:text-lg text-[#424845] max-w-3xl leading-relaxed">
                Establishing verifiable environmental records across Ahmedabad, Gujarat, and nationwide—maintaining absolute data sovereignty without forced commercial estimations.
              </p>
              <div className="pt-2">
                <button 
                  onClick={() => setCurrentScreen(2)}
                  className="px-6 py-3.5 bg-[#006c49] hover:bg-[#059669] text-white font-bold rounded-xl shadow-sm transition-all text-sm flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Forward Token Checkout</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </section>

            {/* Metrics Grid */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-[#c2c8c4]/60 shadow-xs space-y-2">
                <span className="text-xs font-bold text-[#727875] uppercase tracking-wider">Net Abatement Progress</span>
                <div className="text-3xl font-extrabold text-[#000b07]">34.8%</div>
                <p className="text-xs text-[#006c49] font-semibold">Verified against baseline targets</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-[#c2c8c4]/60 shadow-xs space-y-2">
                <span className="text-xs font-bold text-[#727875] uppercase tracking-wider">Total Value Arbitrage</span>
                <div className="text-3xl font-extrabold text-[#000b07]">
                  {currency === 'INR' ? '₹1,42,850' : '$1,720.00'}
                </div>
                <p className="text-xs text-[#006c49] font-semibold">Tax & OPEX savings captured</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-[#c2c8c4]/60 shadow-xs space-y-2">
                <span className="text-xs font-bold text-[#727875] uppercase tracking-wider">Verified Avoided Units</span>
                <div className="text-3xl font-extrabold text-[#000b07]">18.42 <span className="text-lg font-normal text-[#727875]">tCO2e</span></div>
                <p className="text-xs text-[#006c49] font-semibold">Verra VCS Serialized</p>
              </div>
            </section>

            {/* Climate Action Logger */}
            <section className="bg-white border border-[#c2c8c4]/60 rounded-2xl p-8 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#c2c8c4]/30 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-[#000b07]">Log Climate Action</h2>
                  <p className="text-sm text-[#424845]">Select your protocol and enter metrics for instant verification.</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#006c49]/15 text-[#006c49]">Live Oracle Active</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'ev', label: 'EV Commute', icon: 'electric_car', sub: '0.14 kg/km' },
                  { id: 'solar', label: 'Solar Yield', icon: 'solar_power', sub: '0.82 kg/kWh' },
                  { id: 'waste', label: 'Circular Waste', icon: 'recycling', sub: '0.55 kg/kg' },
                  { id: 'bio', label: 'Soil / Biochar', icon: 'forest', sub: '1.20 kg/unit' }
                ].map((act) => (
                  <button
                    key={act.id}
                    onClick={() => setActionType(act.id)}
                    className={`p-3 rounded-xl border text-left transition-all flex items-center space-x-3 cursor-pointer ${actionType === act.id ? 'border-2 border-[#006c49] bg-[#eff4ff]' : 'border-[#c2c8c4]/60 bg-white hover:bg-slate-50'}`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#6cf8bb]/30 text-[#006c49] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">{act.icon}</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#000b07]">{act.label}</p>
                      <p className="text-[10px] text-[#727875]">{act.sub}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center pt-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#000b07] uppercase tracking-wider">Metric Input Value</label>
                  <div className="relative flex items-center">
                    <input 
                      type="number" 
                      value={metricVal} 
                      onChange={(e) => setMetricVal(Number(e.target.value))}
                      className="w-full h-12 pl-4 pr-20 bg-white border border-[#c2c8c4] rounded-xl text-lg font-bold text-[#000b07] focus:border-[#006c49] outline-none" 
                    />
                    <span className="absolute right-4 text-xs font-bold text-[#727875] uppercase">Units</span>
                  </div>
                </div>

                <div className="p-4 bg-[#eff4ff] rounded-xl border border-[#c2c8c4]/40 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#727875] block">Calculated Carbon Yield</span>
                    <div className="text-lg font-extrabold text-[#006c49]">{avoidedTons} tCO2e avoided</div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#727875] block">Equivalent Saving</span>
                    <div className="text-base font-bold text-[#000b07]">{currency === 'INR' ? `₹${inrSavings}` : `$${usdSavings}`}</div>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setCurrentScreen(2)}
                className="w-full h-14 bg-[#0f241d] hover:bg-black text-white font-bold rounded-xl text-sm flex items-center justify-center space-x-2 shadow-sm transition-all cursor-pointer"
              >
                <span>Proceed to Forward Token Checkout →</span>
              </button>
            </section>
          </div>
        )}

        {/* SCREEN 2: CHECKOUT */}
        {currentScreen === 2 && (
          <div className="max-w-xl mx-auto space-y-6 bg-white border border-[#c2c8c4]/60 rounded-2xl p-8 shadow-xs animate-fadeIn">
            <div className="flex justify-between items-center">
              <button onClick={() => setCurrentScreen(1)} className="text-xs text-[#006c49] font-bold flex items-center gap-1 cursor-pointer">
                <span className="material-symbols-outlined text-[16px]">arrow_back</span> Back to Dashboard
              </button>
              <span className="text-xs font-mono bg-[#6cf8bb]/30 px-2.5 py-1 rounded text-[#00714d] font-bold">256-bit SSL Secured</span>
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl font-extrabold text-[#000b07]">Forward Token Checkout</h1>
              <p className="text-xs text-[#424845]">Select your institutional settlement rail below.</p>
            </div>

            <div className="grid grid-cols-3 p-1.5 bg-[#e5eeff] rounded-xl gap-1">
              {[
                { id: 'upi', label: 'UPI / QR', sub: '₹ INR' },
                { id: 'card', label: 'Card / Stripe', sub: '$ USD' },
                { id: 'web3', label: 'Polygon USDC', sub: 'Gasless' }
              ].map((rail) => (
                <button
                  key={rail.id}
                  onClick={() => setSelectedRail(rail.id)}
                  className={`py-2.5 px-2 rounded-lg text-center transition-all cursor-pointer ${selectedRail === rail.id ? 'bg-white text-[#000b07] shadow-xs font-bold border border-[#c2c8c4]/40' : 'text-[#424845]'}`}
                >
                  <span className="text-xs block">{rail.label}</span>
                  <span className="text-[10px] text-[#006c49] font-semibold">{rail.sub}</span>
                </button>
              ))}
            </div>

            <div className="border border-[#c2c8c4]/50 rounded-xl p-6 space-y-4 bg-[#f8f9ff]">
              {selectedRail === 'upi' && (
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-40 h-40 bg-white p-3 border-2 border-[#0f241d] rounded-xl flex items-center justify-center shadow-xs">
                    <span className="material-symbols-outlined text-6xl text-[#006c49]">qr_code_2</span>
                  </div>
                  <p className="text-xs text-[#727875]">Scan with any GPay, PhonePe, Paytm or BHIM UPI app.</p>
                  <input type="text" defaultValue="carboclearing@icici" className="w-full h-11 px-3 bg-white border border-[#c2c8c4] rounded-lg text-xs font-mono text-[#000b07] text-center" readOnly />
                </div>
              )}

              {selectedRail === 'card' && (
                <div className="space-y-3 text-xs">
                  <div>
                    <label className="font-bold text-[#000b07]">Card Number</label>
                    <input type="text" defaultValue="4829 8812 9014 4102" className="w-full h-11 px-3 bg-white border border-[#c2c8c4] rounded-lg mt-1" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" defaultValue="09 / 28" className="h-11 px-3 bg-white border border-[#c2c8c4] rounded-lg" />
                    <input type="password" defaultValue="888" className="h-11 px-3 bg-white border border-[#c2c8c4] rounded-lg" />
                  </div>
                </div>
              )}

              {selectedRail === 'web3' && (
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-[#eff4ff] rounded-lg text-[#006c49] font-bold flex items-center gap-2 border border-[#006c49]/30">
                    <span className="material-symbols-outlined">bolt</span> Gasless Meta-Transaction Active
                  </div>
                  <div className="p-3 bg-white border border-[#c2c8c4] rounded-lg font-mono text-xs truncate">
                    Escrow: 0x91cA8f4D92c1048b29E
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => setCurrentScreen(3)}
              className="w-full h-14 bg-[#0f241d] hover:bg-black text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#6ffbbe]">fingerprint</span>
              <span>Authorize & Secure Spot #412</span>
            </button>
          </div>
        )}

        {/* SCREEN 3: CONFIRMATION */}
        {currentScreen === 3 && (
          <div className="max-w-xl mx-auto space-y-6 bg-white border border-[#c2c8c4]/60 rounded-2xl p-8 text-center shadow-xs animate-fadeIn">
            <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#6cf8bb]/30 animate-ping"></div>
              <div className="relative w-16 h-16 rounded-full bg-[#006c49] text-white flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-3xl">check_circle</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] bg-[#6cf8bb]/20 text-[#00714d] px-2.5 py-1 rounded-full font-bold">Priority Reservation Verified</span>
              <h1 className="text-xl font-bold text-[#000b07] mt-2">You're Booked on Batch #2 Genesis Queue!</h1>
              <p className="text-xs text-[#424845]">Deposit locked in institutional smart escrow. Priority queue position active.</p>
            </div>

            <div className="bg-[#f8f9ff] border border-[#c2c8c4]/60 rounded-xl p-4 shadow-xs flex items-center justify-between text-left">
              <div>
                <span className="text-[10px] text-[#727875] uppercase block">Priority Queue Index</span>
                <span className="text-2xl font-extrabold text-[#000b07]">#{queuePosition}</span>
              </div>
              <div className="bg-[#0f241d] text-white px-3 py-1.5 rounded-lg text-right">
                <span className="text-[10px] text-[#b4ccc1] block">Mint Window</span>
                <span className="text-xs font-bold">Q3 2025</span>
              </div>
            </div>

            <button 
              onClick={() => setCurrentScreen(4)}
              className="w-full h-12 bg-[#006c49] text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-sm hover:bg-[#059669] cursor-pointer"
            >
              <span>Explore Perks & Referral Boosts →</span>
            </button>
          </div>
        )}

        {/* SCREEN 4: PERKS & REFERRAL */}
        {currentScreen === 4 && (
          <div className="max-w-xl mx-auto space-y-6 bg-white border border-[#c2c8c4]/60 rounded-2xl p-8 shadow-xs animate-fadeIn">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0f241d] text-white text-[10px]">
                <span className="material-symbols-outlined text-[12px] text-[#6ffbbe]">bolt</span> Genesis Allocations Live
              </div>
              <h1 className="text-xl font-bold text-[#000b07]">Climb the Genesis Queue & Unlock Offsets</h1>
              <p className="text-xs text-[#424845]">Share your unique link to advance 50 spots per referral.</p>
            </div>

            <div className="p-4 rounded-xl border border-[#c2c8c4]/50 bg-[#f8f9ff] space-y-3">
              <h2 className="text-sm font-bold text-[#000b07]">Your Genesis Link</h2>
              <div className="flex items-center gap-2 p-1.5 rounded-lg bg-white border border-[#c2c8c4]/50">
                <span className="flex-1 font-mono text-xs font-bold text-[#000b07] px-2 select-all">CARBODEX-EARTH412</span>
                <button 
                  onClick={() => handleCopy('CARBODEX-EARTH412')}
                  className="px-3 py-1.5 rounded bg-[#0f241d] text-white text-xs font-semibold cursor-pointer"
                >
                  {copied ? 'Copied!' : 'Copy Code'}
                </button>
              </div>
            </div>

            <button 
              onClick={() => setCurrentScreen(1)}
              className="w-full h-12 bg-[#0f241d] text-white font-bold rounded-lg text-xs cursor-pointer shadow-sm hover:bg-black"
            >
              Return to Executive Tracker Home
            </button>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-[#000b07] text-white py-8 px-6 border-t border-[#0f241d]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-[#727875] gap-4">
          <p>© 2026 Earth Carbon Foundation. Ahmedabad, Gujarat, India. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Registry Master Terms</span>
            <span className="hover:text-white cursor-pointer">Privacy Framework</span>
            <span className="hover:text-white cursor-pointer">Contact Support</span>
          </div>
        </div>
      </footer>

    </div>
  );
}