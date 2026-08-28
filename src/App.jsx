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
  const [flow, setFlow] = useState(null) // 'buy' | 'sell' | null

  const openBuy = useCallback(() => setFlow('buy'), [])
  const openSell = useCallback(() => setFlow('sell'), [])
  const closeFlow = useCallback(() => setFlow(null), [])

  const handleFooterNav = useCallback((id) => {
    if (id === 'buy') return openBuy()
    if (id === 'sell') return openSell()
    // 'login' and future resources handled later
  }, [openBuy, openSell])

  return (
    <>
      <Header onNav={handleFooterNav} />
      <Hero onBuy={openBuy} onSell={openSell} />
      <Calculator />
      <Progress />
      <Trust />
      <Mission />
      <Footer onNav={handleFooterNav} />

      <FlowModal kind={flow} onClose={closeFlow} />
    </>
  )
}
