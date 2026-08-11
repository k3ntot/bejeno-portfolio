"use client";

import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver to all elements with the `.reveal` class,
 * adding `.visible` when they enter the viewport. Respects prefers-reduced-motion.
 */
export default function RevealObserver() {
  useEffect(() => {
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      // Just make everything visible immediately
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        el.classList.add("visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
