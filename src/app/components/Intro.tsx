import styles from "./Intro.module.css";
import { intro } from "../content";

export function Intro() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h2 className={`${styles.heading} serif`}>{intro.heading}</h2>
            <div className={styles.copy}>
              {intro.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <div className={`${styles.motif} card`} aria-hidden="true">
            <div className={styles.motifInner}>
              <div className={styles.motifTitle}>The Infinite Loop</div>
              <div className={styles.motifLine} />
              <div className={styles.motifItems}>
                <div>Behavior</div>
                <div>Data</div>
                <div>Recommendation</div>
                <div>Reinforcement</div>
              </div>
              <div className={styles.motifHint}>
                Not divine. Still powerful. Learn the shape of the mirror.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

