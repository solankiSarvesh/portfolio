"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], threshold = 0.3) {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-20% 0px -60% 0px", // Focus observe on the upper middle portion
          threshold,
        }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, [sectionIds, threshold]);

  return activeSection;
}
