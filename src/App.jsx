import React, { useState, useEffect } from 'react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(1); // 1: Tracker, 2: Checkout, 3: Confirmation, 4: Waitlist/Perks
  const [currency, setCurrency] = useState('INR');
  const [selectedTier, setSelectedTier] = useState('micro');
  const [selectedRail, setSelectedRail] = useState('upi');
  const [metricVal, setMetricVal] = useState(120);
  const [actionType, setActionType] = useState('ev');
  const [queuePosition, setQueuePosition] = useState(412);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [copied, setCopied] = useState(false);

  // Constants & Multipliers
  const factors = { ev: 0.14, solar: 0.82, waste: 0.55, bio: 1.20 };
  const tierPrices = {
    micro: { inr: '₹2,100', usd: '\$25.00', tco2e: '1.00 tCO2e' },
    enterprise: { inr: '₹21,000', usd: '\$250.00', tco2e: '10.00 tCO2e' },
    custom: { inr: 'OTC Desk', usd: 'Custom Quote', tco2e: '50+ tCO2e' }
  };

  const avoidedTons = ((metricVal * (factors[actionType] || 0.14)) / 1000).toFixed(4);
  const inrSavings = Math.round(avoidedTons * 8000);
  const usdSavings = (avoidedTons * 96.3).toFixed(2);

  const handleCopy = (text, type = 'code') => {
    navigator.clipboard.writeText(text);
    if (type === 'code') {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      alert('Copied to clipboard!');
    }
  };

  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] antialiased min-h-screen flex flex-col items-center selection:bg-[#6cf8bb] selection:text-[#00714d] font-sans">
      
      {/* Top Application Bar */}
      <header className="bg-white/90 backdrop-blur-md w-full max-w-[480px] sticky top-0 z-50 border-b border-[#c2c8c4]/30 shadow-sm flex justify-between items-center px-4 h-14">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentScreen(1)}>
          <div className="w-8 h-8 rounded-lg bg-[#0f241d] text-[#6ffbbe] flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-[20px]">eco</span>
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-[#000b07]">CarboDex</span>
            <div className="flex items-center space-x-1 -mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#006c49] animate-pulse"></span>
              <span className="text-[10px] text-[#727875] font-mono">Action Vault • v2.4</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* Currency Switcher */}
          <div className="inline-flex p-0.5 bg-[#e5eeff] rounded-lg border border-[#c2c8c4]/40">
            <button 
              onClick={() => setCurrency('INR')}
              className={`px-2 py-0.5 rounded text-xs font-bold transition-all ${currency === 'INR' ? 'bg-white text-[#000b07] shadow-xs' : 'text-[#727875]'}`}
            >
              ₹ INR
            </button>
            <button 
              onClick={() => setCurrency('USD')}
              className={`px-2 py-0.5 rounded text-xs font-bold transition-all ${currency === 'USD' ? 'bg-white text-[#000b07] shadow-xs' : 'text-[#727875]'}`}
            >
              \$ USD
            </button>
          </div>
          <button className="w-8 h-8 rounded-lg bg-[#eff4ff] hover:bg-[#e5eeff] flex items-center justify-center text-[#000b07] relative">
            <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#006c49] border-2 border-white"></span>
          </button>
        </div>
      </header>

      {/* Mobile Screen Container (480px max width for precise responsive rendering) */}
      <main className="w-full max-w-[480px] flex-1 pb-28 px-4 pt-4 space-y-6">

        {/* ---------------- PAGE 1: ACTION TRACKER ---------------- */}
        {currentScreen === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between px-3 py-2 bg-[#0f241d] text-white rounded-lg shadow-sm">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-[#6ffbbe] text-[16px]">verified_user</span>
                <span className="text-xs font-mono text-[#d0e8dd]">Node #IN-BLR-892 (Sentinel v4 Active)</span>
              </div>
              <span className="text-[10px] bg-[#006c49]/40 text-[#6ffbbe] px-2 py-0.5 rounded-full font-semibold">100% Audit Ready</span>
            </div>

            {/* KPI Executive Abatement */}
            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#000b07]">Executive Abatement</h2>
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-2 bg-white p-4 rounded-xl border border-[#c2c8c4]/40 shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#727875]">Net Abatement vs. Baseline</span>
                    <div className="flex items-baseline space-x-1.5 mt-1">
                      <span className="text-2xl font-extrabold text-[#000b07]">34.8%</span>
                      <span className="text-xs text-[#006c49] font-bold">▲ +4.2% MoM</span>
                    </div>
                    <p className="text-[11px] text-[#727875] mt-0.5">Target: 40% reduction for Carbon Neutrality Tier A</p>
                  </div>
                  <div className="relative w-14 h-14 flex items-center justify-center font-bold text-xs text-[#006c49]">35%</div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-[#c2c8c4]/40 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-[#727875]">Total Value Saved</span>
                    <div className="text-lg font-extrabold text-[#000b07] mt-1">
                      {currency === 'INR' ? '₹1,42,850' : '\$1,720.00'}
                    </div>
                  </div>
                  <div className="mt-2 text-[11px] text-[#006c49] flex items-center">
                    <span className="material-symbols-outlined text-[14px] mr-1">savings</span> Tax & OPEX Arbitrage
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-[#c2c8c4]/40 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-[#727875]">Verified Avoided Units</span>
                    <div className="text-lg font-extrabold text-[#000b07] mt-1">18.42 <span className="text-xs font-normal">tCO2e</span></div>
                  </div>
                  <div className="mt-2 text-[11px] text-[#006c49] font-semibold">Verra VCS Serialized</div>
                </div>
              </div>
            </section>

            {/* Climate Action Logger */}
            <section className="bg-white p-4 rounded-xl border border-[#c2c8c4]/40 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-[#c2c8c4]/30 pb-2">
                <div>
                  <h2 className="text-base font-bold text-[#000b07]">Log Climate Action</h2>
                  <p className="text-xs text-[#727875]">Select protocol and enter metrics for instant verification</p>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#006c49]/15 text-[#006c49]">Live Oracle</span>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'ev', label: 'EV Commute', icon: 'electric_car', sub: '0.14 kg/km' },
                  { id: 'solar', label: 'Solar Yield', icon: 'solar_power', sub: '0.82 kg/kWh' },
                  { id: 'waste', label: 'Circular Waste', icon: 'recycling', sub: '0.55 kg/kg' },
                  { id: 'bio', label: 'Soil / Biochar', icon: 'forest', sub: '1.20 kg/unit' }
                ].map((act) => (
                  <button
                    key={act.id}
                    onClick={() => setActionType(act.id)}
                    className={`p-2.5 rounded-lg border text-left transition-all flex items-center space-x-2 ${actionType === act.id ? 'border-2 border-[#006c49] bg-[#eff4ff]' : 'border-[#c2c8c4]/60 bg-white'}`}
                  >
                    <div className="w-7 h-7 rounded-md bg-[#6cf8bb]/30 text-[#006c49] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">{act.icon}</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#000b07]">{act.label}</p>
                      <p className="text-[10px] text-[#727875]">{act.sub}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Metric Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#000b07]">Metric Input Value</label>
                <div className="relative flex items-center">
                  <input 
                    type="number" 
                    value={metricVal} 
                    onChange={(e) => setMetricVal(Number(e.target.value))}
                    className="w-full h-11 pl-3 pr-16 bg-white border border-[#c2c8c4] rounded-lg text-lg font-bold text-[#000b07] focus:border-[#006c49] outline-none" 
                  />
                  <span className="absolute right-3 text-xs font-bold text-[#727875] uppercase">Units</span>
                </div>
              </div>

              {/* Oracle Yield Preview */}
              <div className="p-3 bg-[#eff4ff] rounded-lg border border-[#c2c8c4]/40 flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#727875]">Calculated Carbon Yield</span>
                  <div className="text-base font-bold text-[#006c49]">{avoidedTons} tCO2e avoided</div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#727875]">Equivalent Saving</span>
                  <div className="text-sm font-bold text-[#000b07]">{currency === 'INR' ? `₹${inrSavings}` : `$${usdSavings}`}</div>
                </div>
              </div>

              <button 
                onClick={() => alert(`Action successfully certified & logged: ${avoidedTons} tCO2e!`)}
                className="w-full h-11 bg-[#0f241d] hover:bg-[#002618] text-white font-semibold rounded-lg text-sm flex items-center justify-center space-x-2 shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">fingerprint</span>
                <span>Log & Certify Action</span>
              </button>
            </section>

            {/* Token Booking Presale Section */}
            <section className="bg-white p-4 rounded-xl border border-[#c2c8c4]/40 shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-base font-bold text-[#000b07]">Book Forward Tokens</span>
                  <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#6cf8bb]/40 text-[#00714d]">Phase 1 Presale</span>
                </div>
                <span className="text-xs font-bold text-[#000b07]">{currency === 'INR' ? '₹2,100 / tCO2e' : '\$25.00 / tCO2e'}</span>
              </div>

              <div className="space-y-2">
                {[
                  { id: 'micro', name: 'Micro Tier (1 tCO2e)', price: currency === 'INR' ? '₹2,100' : '\$25' },
                  { id: 'enterprise', name: 'Enterprise (10 tCO2e)', price: currency === 'INR' ? '₹21,000' : '\$250' }
                ].map((tier) => (
                  <div 
                    key={tier.id}
                    onClick={() => setSelectedTier(tier.id)}
                    className={`p-3 rounded-lg border cursor-pointer flex items-center justify-between transition-all ${selectedTier === tier.id ? 'border-2 border-[#006c49] bg-[#eff4ff]' : 'border-[#c2c8c4]/60 bg-white'}`}
                  >
                    <div className="flex items-center space-x-3">
                      <input type="radio" checked={selectedTier === tier.id} readOnly className="text-[#006c49]" />
                      <div>
                        <p className="text-xs font-bold text-[#000b07]">{tier.name}</p>
                        <p className="text-[10px] text-[#727875]">Verified Forward Retirement</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-[#000b07]">{tier.price}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setCurrentScreen(2)}
                className="w-full h-12 bg-[#006c49] hover:bg-[#059669] text-white font-bold rounded-lg flex items-center justify-center space-x-2 shadow-sm transition-all"
              >
                <span>Proceed to Checkout Rails →</span>
              </button>
            </section>
          </div>
        )}

        {/* ---------------- PAGE 2: CHECKOUT & DUAL RAILS ---------------- */}
        {currentScreen === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <button onClick={() => setCurrentScreen(1)} className="text-xs text-[#006c49] font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">arrow_back</span> Back to Tracker
              </button>
              <span className="text-xs font-mono bg-[#6cf8bb]/30 px-2 py-0.5 rounded text-[#00714d] font-bold">SSL Secured 256-bit</span>
            </div>

            <div className="space-y-1">
              <h1 className="text-xl font-bold text-[#000b07]">Forward Token Checkout</h1>
              <p className="text-xs text-[#424845]">Select your institutional settlement rail below.</p>
            </div>

            {/* Order Summary Card */}
            <div className="bg-white rounded-xl border border-[#c2c8c4]/60 p-4 shadow-sm space-y-3">
              <div className="flex justify-between items-center text-xs text-[#727875]">
                <span>Selected Allocation</span>
                <span className="text-[#006c49] font-bold">Verra / Puro Certified</span>
              </div>
              <div className="flex justify-between items-center text-sm font-bold text-[#000b07] border-t border-b border-[#c2c8c4]/20 py-2">
                <span>{tierPrices[selectedTier].tco2e} Genesis Token</span>
                <span>{currency === 'INR' ? tierPrices[selectedTier].inr : tierPrices[selectedTier].usd}</span>
              </div>
            </div>

            {/* Rail Selector Tabs */}
            <div className="grid grid-cols-3 p-1 bg-[#e5eeff] rounded-xl gap-1">
              {[
                { id: 'upi', label: 'UPI / QR', sub: '₹ INR' },
                { id: 'card', label: 'Card / Stripe', sub: '\$ USD' },
                { id: 'web3', label: 'Polygon USDC', sub: 'Gasless' }
              ].map((rail) => (
                <button
                  key={rail.id}
                  onClick={() => setSelectedRail(rail.id)}
                  className={`py-2 px-1 rounded-lg text-center transition-all ${selectedRail === rail.id ? 'bg-white text-[#000b07] shadow-sm font-bold border border-[#c2c8c4]/40' : 'text-[#424845]'}`}
                >
                  <span className="text-xs block">{rail.label}</span>
                  <span className="text-[10px] text-[#006c49] font-semibold">{rail.sub}</span>
                </button>
              ))}
            </div>

            {/* Rail Content Panels */}
            <div className="bg-white border border-[#c2c8c4]/50 rounded-xl p-4 space-y-4">
              {selectedRail === 'upi' && (
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-40 h-40 bg-white p-2 border-2 border-[#0f241d] rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-[#006c49]">qr_code_2</span>
                  </div>
                  <p className="text-xs text-[#727875]">Scan with any GPay, PhonePe, Paytm or BHIM UPI app.</p>
                  <div className="w-full text-left space-y-1">
                    <label className="text-xs font-semibold text-[#000b07]">Virtual Payment Address (VPA)</label>
                    <input type="text" defaultValue="carboclearing@icici" className="w-full h-10 px-3 bg-[#eff4ff] rounded-lg text-xs font-mono text-[#000b07]" />
                  </div>
                </div>
              )}

              {selectedRail === 'card' && (
                <div className="space-y-3 text-xs">
                  <div>
                    <label className="font-semibold">Card Number</label>
                    <input type="text" defaultValue="4829 8812 9014 4102" className="w-full h-10 px-3 border rounded-lg mt-1" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" defaultValue="09 / 28" className="h-10 px-3 border rounded-lg" />
                    <input type="password" defaultValue="888" className="h-10 px-3 border rounded-lg" />
                  </div>
                </div>
              )}

              {selectedRail === 'web3' && (
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-[#eff4ff] rounded-lg text-[#006c49] font-semibold flex items-center gap-2">
                    <span className="material-symbols-outlined">bolt</span> Gasless Meta-Transaction Active via Biconomy
                  </div>
                  <div className="p-2 bg-slate-100 rounded font-mono text-[11px] truncate">
                    Escrow: 0x91cA8f4D92c1048b29E
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => {
                setIsConfirmed(true);
                setCurrentScreen(3);
              }}
              className="w-full h-14 bg-[#0f241d] text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:bg-black transition-all"
            >
              <span className="material-symbols-outlined text-[#6ffbbe]">fingerprint</span>
              <span>Authorize & Secure Spot #412</span>