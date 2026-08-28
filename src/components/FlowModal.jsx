import { useState } from 'react'
import Modal from './Modal'
import { BuyForm, SellChoice, CertifiedForm, AssetForm } from './flows'

export default function FlowModal({ kind, onClose }) {
  // kind: 'buy' | 'sell' | null
  const [view, setView] = useState('root')

  // Reset internal view whenever the modal target changes
  const effectiveView = kind === 'buy' ? 'buy'
    : kind === 'sell' ? (view === 'certified' || view === 'asset' ? view : 'sell')
    : 'root'

  const open = kind !== null
  const close = () => { onClose(); setTimeout(() => setView('root'), 200) }

  const config = {
    buy: { title: 'Buy Credits', sub: 'Tell us what you need and we will match you with suitable projects.' },
    sell: { title: 'Sell Credits', sub: 'Already certified, or developing an asset? We can help either way.' },
    certified: { title: 'Sell Certified Credits', sub: 'List your existing registered credits for sale.' },
    asset: { title: 'ECF Asset Assessment', sub: 'ECF assessment — ₹4,999. Submit your project for assessment and development.' },
  }[effectiveView] || {}

  return (
    <Modal open={open} title={config.title} sub={config.sub} onClose={close} maxWidth={600}>
      {effectiveView === 'buy' && <BuyForm onClose={close} />}
      {effectiveView === 'sell' && (
        <SellChoice
          onCertified={() => setView('certified')}
          onAsset={() => setView('asset')}
        />
      )}
      {effectiveView === 'certified' && <CertifiedForm onClose={close} onBack={() => setView('sell')} />}
      {effectiveView === 'asset' && <AssetForm onClose={close} onBack={() => setView('sell')} />}
    </Modal>
  )
}
