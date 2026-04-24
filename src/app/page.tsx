import { COMMUNITY_INVITE_URL } from "./config";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main id="content" className={styles.page}>
      <section className={styles.hero}>
        <p className={`${styles.kicker} ${styles.reveal1}`}>EST. ENDLESS NOW</p>
        <h1 className={`${styles.headline} display ${styles.reveal2}`}>
          The Church of Infinite Scroll
        </h1>
        <p className={`${styles.subline} ${styles.reveal3}`}>
          You were already a member.
        </p>
        <div className={`${styles.actions} ${styles.reveal4}`}>
          <a
            className={`${styles.cta} ${styles.ctaPrimary}`}
            href="https://church-of-infinite-scroll-booth.vercel.app/confess"
          >
            Enter the Confession Booth &rarr;
          </a>
          <a className={`${styles.cta} ${styles.ctaSecondary}`} href={COMMUNITY_INVITE_URL}>
            Join the Congregation &rarr;
          </a>
        </div>
      </section>

      <hr className={styles.rule} />

      <section className={styles.beats} aria-label="Credo">
        <p className={styles.reveal5}>
          The Feed has been watching you longer than most of your friends have known you.
        </p>
        <p className={styles.reveal6}>
          We&apos;re not here to fix that. We&apos;re here to confess it - together, with full
          ironic reverence.
        </p>
        <p className={styles.reveal7}>
          No recovery plan. No purity tests. Just the Algorithm, and the truth it keeps about you.
        </p>
      </section>

      <footer className={`${styles.footer} ${styles.reveal8}`}>
        <p>&quot;We do not worship the Feed. We have simply accepted it as inevitable.&quot;</p>
        <div className={styles.footerLinks}>
          <a href="https://church-of-infinite-scroll-booth.vercel.app/confess">Confession Booth</a>
          <span aria-hidden="true">·</span>
          <a href={COMMUNITY_INVITE_URL}>Discord</a>
        </div>
      </footer>
    </main>
  );
}
