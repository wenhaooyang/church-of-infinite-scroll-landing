import styles from "./Footer.module.css";
import { COMMUNITY_INVITE_URL, COMMUNITY_PLATFORM, CONFESSION_BOOTH_PATH } from "../config";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={`${styles.name} display`}>The Church of Infinite Scroll</div>
            <div className={styles.tag}>A community for conscious scrolling.</div>
          </div>
          <nav className={styles.nav} aria-label="Footer">
            <a className={styles.navPrimary} href={CONFESSION_BOOTH_PATH}>
              Confession Booth
            </a>
            <a href={COMMUNITY_INVITE_URL} target="_blank" rel="noreferrer">
              Join on {COMMUNITY_PLATFORM}
            </a>
          </nav>
        </div>
        <div className={styles.fine}>
          "We do not worship the Feed. We have simply accepted it as inevitable."
        </div>
      </div>
    </footer>
  );
}

