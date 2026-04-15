"use client";

import { useEffect, useId, useRef } from "react";
import styles from "./InfiniteLoopDiagram.module.css";

const LABELS = [
  { text: "Behavior", positionClass: styles.labelTop },
  { text: "Data", positionClass: styles.labelRight },
  { text: "Recommendation", positionClass: styles.labelBottom },
  { text: "Reinforcement", positionClass: styles.labelLeft },
] as const;

export function InfiniteLoopDiagram() {
  const uid = useId().replace(/:/g, "");
  const markerId = `loopArrowhead-${uid}`;
  const gradId = `loopStroke-${uid}`;
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const els = labelRefs.current.filter(Boolean) as HTMLDivElement[];
    if (els.length === 0 || typeof IntersectionObserver === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const prevIntersecting = new Map<Element, boolean>();

    const runPulse = (el: HTMLDivElement, staggerMs: number) => {
      window.setTimeout(() => {
        el.classList.remove(styles.pulse);
        void el.offsetWidth;
        el.classList.add(styles.pulse);
      }, staggerMs);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const wasInside = prevIntersecting.get(entry.target) ?? false;
          prevIntersecting.set(entry.target, entry.isIntersecting);
          if (!entry.isIntersecting || wasInside) return;

          const el = entry.target as HTMLDivElement;
          const idx = els.indexOf(el);
          runPulse(el, idx * 130);
        });
      },
      { threshold: 0.45, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => {
      prevIntersecting.set(el, false);
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={`${styles.card} card`}>
        <div className={styles.inner}>
          <div className={styles.title}>The Infinite Loop</div>
          <div className={styles.line} aria-hidden />
          <div className={styles.diagram} role="img" aria-label="Infinite loop: Behavior, Data, Recommendation, Reinforcement connected by a rotating arrow path.">
            <svg className={styles.svg} viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet" aria-hidden>
              <defs>
                <marker
                  id={markerId}
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="rgba(34, 211, 238, 0.75)" />
                </marker>
                <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(34, 211, 238, 0.55)" />
                  <stop offset="50%" stopColor="rgba(168, 85, 247, 0.5)" />
                  <stop offset="100%" stopColor="rgba(34, 211, 238, 0.55)" />
                </linearGradient>
              </defs>
              <g transform="translate(200,200)">
                <g className={styles.spin}>
                  <path
                    d="M 0 -140 A 140 140 0 0 1 140 0"
                    fill="none"
                    stroke={`url(#${gradId})`}
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    markerEnd={`url(#${markerId})`}
                  />
                  <path
                    d="M 140 0 A 140 140 0 0 1 0 140"
                    fill="none"
                    stroke={`url(#${gradId})`}
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    markerEnd={`url(#${markerId})`}
                  />
                  <path
                    d="M 0 140 A 140 140 0 0 1 -140 0"
                    fill="none"
                    stroke={`url(#${gradId})`}
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    markerEnd={`url(#${markerId})`}
                  />
                  <path
                    d="M -140 0 A 140 140 0 0 1 0 -140"
                    fill="none"
                    stroke={`url(#${gradId})`}
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    markerEnd={`url(#${markerId})`}
                  />
                </g>
              </g>
            </svg>
            <div className={styles.labelLayer}>
              {LABELS.map((item, i) => (
                <div
                  key={item.text}
                  ref={(el) => {
                    labelRefs.current[i] = el;
                  }}
                  className={`${styles.nodeLabel} ${item.positionClass}`}
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          <p className={styles.hint}>Not divine. Still powerful. Learn the shape of the mirror.</p>
        </div>
      </div>
    </div>
  );
}
