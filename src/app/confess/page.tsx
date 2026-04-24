import type { Metadata } from "next";
import Link from "next/link";
import styles from "./confess.module.css";

export const metadata: Metadata = {
  title: "Confession Booth",
  description: "The booth is open. Speak plainly.",
};

export default function ConfessPage() {
  return (
    <main className={styles.main}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>Session</p>
        <h1 className={`display ${styles.title}`}>Confession Booth</h1>
        <p className={styles.lead}>
          The screen records. The ritual begins when you name what the feed already knows.
        </p>
        <div className={styles.rule} aria-hidden />
        <p className={styles.terminal}>
          <span className={styles.prompt}>›</span> Awaiting your module. Wire the booth UI here.
        </p>
        <p className={styles.muted}>
          <Link href="/">← Return to the nave</Link>
        </p>
      </div>
    </main>
  );
}
