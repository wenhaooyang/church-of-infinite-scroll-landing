import styles from "./FAQ.module.css";
import { faq } from "../content";

export function FAQ() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <h2 className={`${styles.heading} serif`}>FAQ</h2>
          <p className={styles.subheading}>A few clarifications before you descend.</p>
        </div>

        <div className={styles.list}>
          {faq.map((item) => (
            <details key={item.q} className={`card ${styles.item}`}>
              <summary className={styles.summary}>
                <span>{item.q}</span>
                <span className={styles.chev} aria-hidden="true">
                  ↴
                </span>
              </summary>
              <div className={styles.answer}>{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

