export default function Hero({ onBuy, onSell, onGenerate }) {
  return (
    <section id="top" className="ecf-hero">
      <div className="ecf-hero-inner">

        <span className="ecf-eyebrow">
          EARTH CARBON FOUNDATION
        </span>

        <h1 className="ecf-hero-title">
          ENVIRONMENTAL CREDITS
        </h1>

        <p className="ecf-hero-sub">
          Measure it. Generate it. Trade it.
        </p>

        <div className="ecf-hero-cards">

          {/* BUY */}
          <article className="ecf-action-card">
            <div className="ecf-card-icon">↗</div>

            <h2>BUY</h2>

            <p>
              Find credits for your environmental
              requirements.
            </p>

            <button
              className="btn btn-primary"
              onClick={onBuy}
            >
              EXPLORE CREDITS
            </button>
          </article>

          {/* SELL */}
          <article className="ecf-action-card">
            <div className="ecf-card-icon">↙</div>

            <h2>SELL</h2>

            <p>
              List your credits and connect
              with potential buyers.
            </p>

            <button
              className="btn btn-secondary"
              onClick={onSell}
            >
              LIST CREDITS
            </button>
          </article>

          {/* GENERATE */}
          <article className="ecf-action-card">
            <div className="ecf-card-icon">＋</div>

            <h2>GENERATE</h2>

            <p>
              Turn eligible environmental actions
              into measurable credits.
            </p>

            <button
              className="btn btn-secondary"
              onClick={onGenerate}
            >
              START ASSESSMENT
            </button>
          </article>

        </div>

        <div className="ecf-hero-note">
          <strong>One platform.</strong>
          <span> Buy · Sell · Generate</span>
        </div>

      </div>
    </section>
  );
}