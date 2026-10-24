import React, { useState } from 'react';

export default function App() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between p-6 md:p-12 font-sans text-slate-800">
      
      {/* Top Navigation / Progress Dots */}
      <div className="max-w-xl mx-auto w-full flex justify-between items-center mb-8">
        <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
          Earth Carbon Foundation
        </span>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                step === i ? 'w-8 bg-emerald-700' : 'w-2 bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Card Container */}
      <div className="max-w-xl mx-auto w-full bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 transition-all duration-300">
        
        {/* Page 1: Welcome */}
        {step === 1 && (
          <div className="text-center space-y-6">
            <div className="inline-block p-4 bg-emerald-50 rounded-full text-emerald-800 mb-2 text-2xl">🌱</div>
            <h1 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight">
              Welcome to <br /><span className="font-semibold text-emerald-900">Earth Carbon Foundation</span>
            </h1>
            <p className="text-slate-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
              Establishing transparent baseline records for institutional and grassroots environmental actions with absolute data sovereignty.
            </p>
          </div>
        )}

        {/* Page 2: Philosophy */}
        {step === 2 && (
          <div className="text-center space-y-6">
            <div className="inline-block p-4 bg-emerald-50 rounded-full text-emerald-800 mb-2 text-2xl">🌍</div>
            <h2 className="text-2xl md:text-3xl font-light text-slate-900 tracking-tight leading-snug">
              "World is one family, <br />so are the natural resources."
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
              Unifying decentralized community actions into a shared global registry built on mutual trust and transparent stewardship.
            </p>
          </div>
        )}

        {/* Page 3: Action to Instrument */}
        {step === 3 && (
          <div className="text-center space-y-6">
            <div className="inline-block p-4 bg-emerald-50 rounded-full text-emerald-800 mb-2 text-2xl">📊</div>
            <h2 className="text-2xl md:text-3xl font-light text-slate-900 tracking-tight leading-snug">
              Minimise your low-carbon actions into negotiable instruments.
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
              Convert verified environmental milestones into verifiable carbon assets without forced commercial estimations.
            </p>
          </div>
        )}

        {/* Page 4 & 5: Project Pathways & Tiers */}
        {(step === 4 || step === 5) && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                Project-Based Carbon Pathways
              </h2>
              <p className="text-xs md:text-sm text-slate-500 mt-1">
                For renewable energy projects and organisations. Log in to access your dashboard.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {/* Small Users */}
              <div className="p-4 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all cursor-pointer group">
                <div className="flex items-start space-x-3">
                  <span className="text-xl p-2 bg-slate-50 rounded-xl group-hover:bg-white">🏠</span>
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900 text-sm">Small Users</h3>
                      <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">&lt; 500 kW</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Individual project owners & small renewable energy contributors. Get your Carbon ID and track your asset lifecycle.</p>
                  </div>
                </div>
              </div>

              {/* Large Projects */}
              <div className="p-4 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all cursor-pointer group">
                <div className="flex items-start space-x-3">
                  <span className="text-xl p-2 bg-slate-50 rounded-xl group-hover:bg-white">🏭</span>
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900 text-sm">Large Projects</h3>
                      <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">&gt; 500 kW</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Large-scale developers and renewable energy farms managing MW-level capacity across multiple baskets.</p>
                  </div>
                </div>
              </div>

              {/* Enterprise / Asset Monetisation */}
              <div className="p-4 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all cursor-pointer group">
                <div className="flex items-start space-x-3">
                  <span className="text-xl p-2 bg-slate-50 rounded-xl group-hover:bg-white">🏢</span>
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900 text-sm">Asset Monetisation Enterprise</h3>
                      <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Secure</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Organisations with monetised assets. Multi-user dashboards, team management, and revenue tracking.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional Waitlist Capture at Final Step */}
            {step === 5 && (
              <div className="mt-6 pt-6 border-t border-slate-100">
                {submitted ? (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs text-center font-medium">
                    ✓ Your email has been registered for the protocol waitlist.
                  </div>
                ) : (
                  <form onSubmit={handleWaitlistSubmit} className="flex gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter your institutional email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-2.5 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 bg-emerald-900 text-white text-xs font-semibold rounded-xl hover:bg-emerald-950 transition-colors"
                    >
                      Join Waitlist
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        )}

        {/* Bottom Navigation Buttons */}
        <div className="flex justify-between items-center mt-10 pt-6 border-t border-slate-100">
          {step > 1 ? (
            <button
              onClick={prevStep}
              className="px-5 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              ← Back
            </button>
          ) : (
            <div />
          )}

          {step < 5 ? (
            <button
              onClick={nextStep}
              className="px-6 py-2.5 bg-emerald-900 text-white text-xs font-semibold rounded-xl hover:bg-emerald-950 shadow-sm transition-all"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={() => alert('Redirecting to secure member dashboard access.')}
              className="px-6 py-2.5 bg-emerald-900 text-white text-xs font-semibold rounded-xl hover:bg-emerald-950 shadow-sm transition-all"
            >
              Access Dashboard →
            </button>
          )}
        </div>

      </div>

      {/* Footer Note */}
      <div className="text-center text-xs text-slate-400 mt-6">
        Earth Carbon Foundation • Calm Registry Protocol
      </div>

    </div>
  );
}