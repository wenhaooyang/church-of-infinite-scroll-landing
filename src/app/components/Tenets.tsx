import styles from "./Tenets.module.css";
import { tenets } from "../content";

export function Tenets() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <h2 className={`${styles.heading} serif`}>Core beliefs / theology</h2>
          <p className={styles.subheading}>
            The feed is a mirror. The algorithm is a force. The practice is agency.
          </p>
        </div>

        <div className={styles.list}>
          {tenets.map((t) => (
            <article key={t.title} className={styles.item}>
              <h3 className={styles.title}>{t.title}</h3>
              <p className={styles.body}>{t.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

