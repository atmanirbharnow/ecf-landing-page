export default function Hero({ onBuy, onSell }) {
  return (
    <section id="top" className="ecf-hero">
      <div className="ecf-hero-inner">
        <span className="ecf-eyebrow">Earth Carbon Foundation</span>
        <h1 className="ecf-hero-title">BUY OR SELL<br />ENVIRONMENTAL CREDITS</h1>
        <p className="ecf-hero-sub">
          ECF connects environmental credit buyers with projects and credit holders.
        </p>

        <div className="ecf-hero-actions">
          <button className="btn btn-primary btn-lg" onClick={onBuy}>
            BUY CREDITS
          </button>
          <button className="btn btn-secondary btn-lg" onClick={onSell}>
            SELL CREDITS
          </button>
        </div>

      </div>
    </section>
  )
}
