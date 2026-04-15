"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./RevealSection.module.css";

type Props = {
  children: React.ReactNode;
};

export function RevealSection({ children }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`${styles.revealSection} ${visible ? styles.revealVisible : ""}`}
    >
      {children}
    </section>
  );
}

