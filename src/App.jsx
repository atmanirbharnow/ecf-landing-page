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
            <span>FROM ACTION TO VALUE</span>
          </div>

          <div className="ecf-flow-steps">

            <div className="ecf-flow-step">
              <strong>YOUR ACTIONS</strong>
              <small>Low-carbon actions</small>
            </div>

            <div className="ecf-flow-arrow">→</div>

            <div className="ecf-flow-step">
              <strong>ASSESS</strong>
              <small>Get assessed</small>
            </div>

            <div className="ecf-flow-arrow">→</div>

            <div className="ecf-flow-step">
              <strong>PROJECT</strong>
              <small>Convert into a project</small>
            </div>

            <div className="ecf-flow-arrow">→</div>

            <div className="ecf-flow-step">
              <strong>REGISTRY</strong>
              <small>Submit &amp; process</small>
            </div>

            <div className="ecf-flow-arrow">→</div>

            <div className="ecf-flow-step">
              <strong>CREDITS</strong>
              <small>Credits issued</small>
            </div>

            <div className="ecf-flow-arrow">→</div>

            <div className="ecf-flow-step">
              <strong>MARKET</strong>
              <small>Trade credits</small>
            </div>

            <div className="ecf-flow-arrow">→</div>

            <div className="ecf-flow-step ecf-flow-income">
              <strong>INCOME</strong>
              <small>Unlock additional income</small>
            </div>

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