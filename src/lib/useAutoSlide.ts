import { useEffect, type RefObject } from 'react';

interface AutoSlideOptions {
  /** Time on each slide, in milliseconds. */
  interval?: number;
  /** Only auto-advance while this media query matches (e.g. phones only). */
  media?: string;
  /** How long to wait after the visitor touches or swipes before moving again. */
  resumeAfter?: number;
}

/**
 * Moves a horizontal scroll-snap carousel through its slides by itself,
 * back and forth: 1 → 2 → 3 → 4 → 3 → 2 → 1 → 2 …
 * Stops while the visitor is interacting, while the carousel is off screen or
 * the tab is hidden, and never runs for people who prefer reduced motion.
 */
export function useAutoSlide(
  ref: RefObject<HTMLElement>,
  { interval = 4000, media = '(max-width: 767px)', resumeAfter = 6000 }: AutoSlideOptions = {}
) {
  useEffect(() => {
    const scroller = ref.current;
    if (!scroller || typeof window.matchMedia !== 'function') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const mq = window.matchMedia(media);
    let direction = 1;
    let pausedUntil = 0;
    let onScreen = false;

    const slides = () => Array.from(scroller.children) as HTMLElement[];
    const paddingLeft = () => parseFloat(getComputedStyle(scroller).paddingLeft) || 0;
    // Slide positions are measured from the scroller's own left edge, so manual swipes are respected.
    const slideLeft = (slide: HTMLElement) =>
      slide.getBoundingClientRect().left - scroller.getBoundingClientRect().left + scroller.scrollLeft - paddingLeft();

    const currentIndex = () => {
      const items = slides();
      let best = 0;
      let bestDistance = Infinity;
      items.forEach((slide, i) => {
        const distance = Math.abs(slideLeft(slide) - scroller.scrollLeft);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = i;
        }
      });
      return best;
    };

    const tick = () => {
      if (!mq.matches || !onScreen || document.hidden || Date.now() < pausedUntil) return;
      const items = slides();
      if (items.length < 2) return;
      const index = currentIndex();
      if (index >= items.length - 1) direction = -1;
      else if (index <= 0) direction = 1;
      const next = items[index + direction];
      scroller.scrollTo({ left: slideLeft(next), behavior: 'smooth' });
    };

    const pause = () => {
      pausedUntil = Date.now() + resumeAfter;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
      },
      { threshold: 0.5 }
    );
    observer.observe(scroller);

    scroller.addEventListener('pointerdown', pause, { passive: true });
    scroller.addEventListener('touchstart', pause, { passive: true });
    scroller.addEventListener('wheel', pause, { passive: true });
    scroller.addEventListener('focusin', pause);
    const timer = window.setInterval(tick, interval);

    return () => {
      window.clearInterval(timer);
      observer.disconnect();
      scroller.removeEventListener('pointerdown', pause);
      scroller.removeEventListener('touchstart', pause);
      scroller.removeEventListener('wheel', pause);
      scroller.removeEventListener('focusin', pause);
    };
  }, [ref, interval, media, resumeAfter]);
}
