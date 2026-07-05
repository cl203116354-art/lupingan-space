import SplitText from './SplitText'
import Ribbons from './Ribbons'

const HERO_RIBBON_COLORS = ['#fffdf9', '#f6c453', '#e76f2e']

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="assets/lupingan-web-hero.png"
        aria-hidden="true"
      >
        <source
          src="assets/097243b8e47208a7b96e8d35423e7992.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-poster" aria-hidden="true" />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="hero-ribbons" aria-hidden="true">
        <Ribbons
          colors={HERO_RIBBON_COLORS}
          baseSpring={0.028}
          baseFriction={0.91}
          baseThickness={18}
          offsetFactor={0.035}
          maxAge={650}
          pointCount={42}
          speedMultiplier={0.48}
          enableFade
          enableShaderEffect
          effectAmplitude={1.1}
        />
      </div>

      <div className="hero-content shell">
        <SplitText
          text="西湖旅游公安 IP"
          className="hero-kicker"
          delay={35}
          duration={0.7}
          from={{ opacity: 0, y: 22 }}
          to={{ opacity: 1, y: 0 }}
          rootMargin="0px"
        />
        <div
          className="hero-title split-heading"
          id="hero-title"
          role="heading"
          aria-level="1"
        >
          <SplitText
            tag="span"
            text="鹭平安"
            className="hero-title-cn"
            delay={90}
            duration={0.85}
            from={{ opacity: 0, y: 64, rotateX: -38 }}
            to={{ opacity: 1, y: 0, rotateX: 0 }}
            rootMargin="0px"
          />
          <SplitText
            tag="strong"
            text="Lupingan Space"
            className="hero-title-en"
            delay={110}
            duration={0.75}
            splitType="words"
            from={{ opacity: 0, y: 34 }}
            to={{ opacity: 1, y: 0 }}
            rootMargin="0px"
          />
        </div>
        <SplitText
          text="昼夜巡护西湖，把平安说得更亲切，也更容易被记住。"
          className="hero-copy"
          delay={42}
          duration={0.65}
          splitType="words"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          rootMargin="0px"
        />
        <a className="primary-action" href="#works">
          查看作品
        </a>
      </div>
    </section>
  )
}
