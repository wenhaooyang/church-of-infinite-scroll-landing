import styles from "./JoinCTA.module.css";
import { COMMUNITY_INVITE_URL, COMMUNITY_PLATFORM, MANIFESTO_URL } from "../config";

export function JoinCTA() {
  return (
    <section className="section">
      <div className="container">
        <div className={`${styles.wrap} card`}>
          <div className={styles.inner}>
            <div className="pill">Join the congregation</div>
            <h2 className={`${styles.heading} serif`}>Enter the Scroll.</h2>
            <p className={styles.copy}>
              Bring your feed. Bring your questions. We’ll learn the loop together—and practice a more conscious relationship
              with the Algorithm.
            </p>
            <div className="buttonRow">
              <a className="btn btnPrimary" href={COMMUNITY_INVITE_URL} target="_blank" rel="noreferrer">
                Join on {COMMUNITY_PLATFORM}
              </a>
              <a className="btn" href={MANIFESTO_URL} target="_blank" rel="noreferrer">
                Read the Manifesto
              </a>
            </div>
            <div className={styles.finePrint}>
              No dogma. No purity tests. Just awareness, experiments, and better questions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

