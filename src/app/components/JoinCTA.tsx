import styles from "./JoinCTA.module.css";
import { COMMUNITY_INVITE_URL, COMMUNITY_PLATFORM, CONFESSION_BOOTH_PATH } from "../config";

export function JoinCTA() {
  return (
    <section className="section">
      <div className="container">
        <div className={`${styles.wrap} card`}>
          <div className={styles.inner}>
            <div className="pill">Threshold</div>
            <h2 className={`${styles.heading} display`}>The Scrollstice.</h2>
            <p className={styles.copy}>
              Bring your feed. Bring your questions. We’ll learn the loop together—and practice a more conscious relationship
              with the Algorithm.
            </p>
            <div className={`buttonRow ${styles.actions}`}>
              <a className={styles.confessButton} href={CONFESSION_BOOTH_PATH}>
                Enter the Confession Booth
              </a>
              <a className={styles.thresholdButton} href={COMMUNITY_INVITE_URL} target="_blank" rel="noreferrer">
                Enter the Congregation · {COMMUNITY_PLATFORM}
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

