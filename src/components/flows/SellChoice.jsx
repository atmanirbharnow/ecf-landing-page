export default function SellChoice({ onCertified, onAsset }) {
  return (
    <div className="ecf-sell-choice">
      <p className="ecf-sell-q">Do you already have certified credits?</p>
      <button className="btn btn-primary btn-block ecf-choice" onClick={onCertified}>
        YES — I HAVE CERTIFIED CREDITS
      </button>
      <button className="btn btn-secondary btn-block ecf-choice" onClick={onAsset}>
        NO — I HAVE A PROJECT / ENVIRONMENTAL ASSET
      </button>
    </div>
  )
}
