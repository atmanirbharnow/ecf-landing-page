import { useCallback, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Calculator from './components/Calculator.jsx'
import Progress from './components/Progress.jsx'
import Trust from './components/Trust.jsx'
import Mission from './components/Mission.jsx'
import Footer from './components/Footer.jsx'
import FlowModal from './components/FlowModal.jsx'
import './App.css'

export default function App() {
  const [flow, setFlow] = useState(null)

  const openBuy = useCallback(() => setFlow('buy'), [])
  const openSell = useCallback(() => setFlow('sell'), [])
  const openGenerate = useCallback(() => setFlow('generate'), [])
  const closeFlow = useCallback(() => setFlow(null), [])

  const handleFooterNav = useCallback((id) => {
    if (id === 'buy') return openBuy()
    if (id === 'sell') return openSell()
    if (id === 'generate') return openGenerate()
  }, [openBuy, openSell, openGenerate])

  return (
    <>
      <Header onNav={handleFooterNav} />

      {/* HERO */}
      <Hero
        onBuy={openBuy}
        onSell={openSell}
        onGenerate={openGenerate}
      />

      {/* ECF VALUE FLOW */}
      <section className="ecf-value-flow" id="how-it-works">
        <div className="ecf-value-flow-inner">

          <div className="ecf-value-flow-heading">
            <span>FROM LOW-CARBON ACTION TO VALUE</span>

            <h2>
              Turn what you already do into measurable value.
            </h2>

            <p>
              ECF helps assess your low-carbon actions, develop eligible
              projects, progress them through the appropriate registry pathway,
              generate credits and connect them with the market.
            </p>
          </div>

          <div className="ecf-flow-steps">

            {/* 01 — ASSESS */}
            <div className="ecf-flow-step">
              <span className="ecf-flow-number">01</span>

              <strong>ASSESS</strong>

              <small>
                Get your low-carbon actions assessed
              </small>
            </div>

            <div className="ecf-flow-arrow">→</div>

            {/* 02 — DEVELOP */}
            <div className="ecf-flow-step">
              <span className="ecf-flow-number">02</span>

              <strong>DEVELOP</strong>

              <small>
                Develop your eligible action into a project
              </small>
            </div>

            <div className="ecf-flow-arrow">→</div>

            {/* 03 — REGISTER */}
            <div className="ecf-flow-step">
              <span className="ecf-flow-number">03</span>

              <strong>REGISTER</strong>

              <small>
                Process the project through the appropriate registry pathway
              </small>
            </div>

            <div className="ecf-flow-arrow">→</div>

            {/* 04 — GENERATE */}
            <div className="ecf-flow-step">
              <span className="ecf-flow-number">04</span>

              <strong>GENERATE</strong>

              <small>
                Generate measurable environmental credits
              </small>
            </div>

            <div className="ecf-flow-arrow">→</div>

            {/* 05 — TRADE */}
            <div className="ecf-flow-step ecf-flow-income">
              <span className="ecf-flow-number">05</span>

              <strong>TRADE</strong>

              <small>
                Connect credits with buyers and unlock additional value
              </small>
            </div>

          </div>

          <div className="ecf-value-flow-bottom">
            <strong>Your action</strong>

            <span>→</span>

            <strong>Measurable impact</strong>

            <span>→</span>

            <strong>Environmental credits</strong>

            <span>→</span>

            <strong>Market value</strong>
          </div>

        </div>
      </section>

      {/* CALCULATOR */}
      <Calculator />

      {/* PROGRESS */}
      <Progress />

      {/* WHY ECF */}
      <Trust />

      {/* MISSION */}
      <Mission />

      {/* FOOTER */}
      <Footer onNav={handleFooterNav} />

      {/* BUY / SELL / GENERATE MODAL */}
      <FlowModal
        kind={flow}
        onClose={closeFlow}
      />
    </>
  )
}