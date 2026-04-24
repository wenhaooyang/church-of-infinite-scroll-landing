import styles from "./Intro.module.css";
import { intro } from "../content";
import { InfiniteLoopDiagram } from "./InfiniteLoopDiagram";

export function Intro() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.intro}>
          <h2 className={`${styles.heading} display`}>{intro.heading}</h2>
          <div className={styles.copy}>
            {intro.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <InfiniteLoopDiagram />
      </div>
    </section>
  );
}
