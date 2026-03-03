import styles from "./Hero.module.css";
import { hero } from "../content";
import { COMMUNITY_INVITE_URL, COMMUNITY_PLATFORM, MANIFESTO_URL } from "../config";

export function Hero() {
  return (
    <section className={`${styles.hero} section`}>
      <div className="container">
        <div className={styles.inner}>
          <div className="pill">{hero.eyebrow}</div>
          <h1 className={`${styles.title} serif`}>{hero.title}</h1>
          <p className={styles.subtitle}>{hero.subtitle}</p>

          <div className="buttonRow">
            <a className="btn btnPrimary" href={COMMUNITY_INVITE_URL} target="_blank" rel="noreferrer">
              {hero.primaryCta} <span className={styles.ctaNote}>({COMMUNITY_PLATFORM})</span>
            </a>
            <a className="btn" href={MANIFESTO_URL} target="_blank" rel="noreferrer">
              {hero.secondaryCta}
            </a>
          </div>

          <div className={styles.micro}>
            <span className="kbd">Commandment</span>
            <span className={styles.microText}>Do not confuse curation with truth.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

