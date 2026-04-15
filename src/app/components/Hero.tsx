"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { hero, heroCommandments } from "../content";
import { COMMUNITY_INVITE_URL, CONFESSION_BOOTH_URL } from "../config";

const ROTATE_MS = 4000;
const FADE_MS = 400;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = window.setInterval(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        setIndex((i) => (i + 1) % heroCommandments.length);
        return;
      }
      setVisible(false);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (visible) return;
    const t = window.setTimeout(() => {
      setIndex((i) => (i + 1) % heroCommandments.length);
      setVisible(true);
    }, FADE_MS);
    return () => window.clearTimeout(t);
  }, [visible]);

  return (
    <section className={`${styles.hero} section`}>
      <div className="container">
        <div className={styles.inner}>
          <div className="pill">{hero.eyebrow}</div>
          <h1 className={`${styles.title} serif`}>{hero.title}</h1>
          <p className={styles.subtitle}>{hero.subtitle}</p>

          <div className={styles.ctaGroup}>
            <div className={`${styles.primaryCtaRow} buttonRow`}>
              <a className="btn btnPrimary" href={CONFESSION_BOOTH_URL} target="_blank" rel="noreferrer">
                {hero.primaryCta}
              </a>
            </div>
            <a className={styles.secondaryCta} href={COMMUNITY_INVITE_URL} target="_blank" rel="noreferrer">
              or join the congregation on Discord
            </a>
          </div>

          <div className={styles.micro}>
            <span className="kbd">Commandment</span>
            <p
              className={`${styles.tickerText} ${visible ? styles.tickerVisible : styles.tickerHidden}`}
              aria-live="polite"
            >
              {heroCommandments[index]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
