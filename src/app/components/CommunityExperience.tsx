import styles from "./CommunityExperience.module.css";
import { commandments, creedLines, rituals, roles } from "../content";

export function CommunityExperience() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <h2 className={`${styles.heading} display`}>What happens inside</h2>
          <p className={styles.subheading}>
            Concrete practices. Shared language. Small experiments that turn doomscrolling into self‑study.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.blockHeader}>
              <div className="pill">Practices & rituals</div>
            </div>
            <div className={styles.cards}>
              {rituals.map((r) => (
                <div key={r.title} className={styles.card}>
                  <div className={styles.cardTitle}>{r.title}</div>
                  <div className={styles.cardBody}>{r.body}</div>
                </div>
              ))}
            </div>

            <div className={styles.rolesHeader}>
              <div className="pill">Roles</div>
              <span className={styles.rolesNote}>A playful hierarchy for practice.</span>
            </div>
            <div className={styles.rolesGrid}>
              {roles.map((r) => (
                <div key={r.title} className={styles.roleCard}>
                  <div className={styles.cardTitle}>{r.title}</div>
                  <div className={styles.cardBody}>{r.body}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className={`${styles.right} card`}>
            <div className={styles.asideInner}>
              <h3 className={styles.asideTitle}>Commandments</h3>
              <ol className={styles.list}>
                {commandments.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ol>

              <div className={styles.divider} />

              <h3 className={styles.asideTitle}>Creed (for recitation)</h3>
              <blockquote className={styles.creed}>
                {creedLines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </blockquote>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

