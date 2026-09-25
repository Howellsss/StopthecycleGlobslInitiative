import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import { currentSummit, isSummitUpcoming } from '@/data/summits';

const DISMISS_KEY = 'stc-summit-bar-dismissed';

function readDismissed() {
  try {
    return window.sessionStorage.getItem(DISMISS_KEY) === '1';
  } catch {
    return false;
  }
}

/** Sticky summit registration bar for phones and tablets, shown until summit day ends. */
export function SummitBar() {
  const location = useLocation();
  const [dismissed, setDismissed] = useState(readDismissed);
  // Stay out of the way until the visitor scrolls past the first screen (the hero already has a Register button).
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolledPastHero(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (dismissed || !isSummitUpcoming() || location.pathname === '/events/register') return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      window.sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      // Storage can be unavailable (private mode); dismissing still works for this page view.
    }
  };

  return (
    <>
      {/* Spacer so the fixed bar never covers the end of the page */}
      <div className="h-[4.5rem] lg:hidden" aria-hidden="true" />
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-brand-navy/95 px-4 py-3 text-white backdrop-blur-md transition-[transform,visibility] duration-300 lg:hidden ${
          scrolledPastHero ? 'visible translate-y-0' : 'invisible translate-y-full'
        }`}
      >
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-lime">Global Summit 2026</p>
            <p className="truncate text-sm font-semibold">{currentSummit.shortDate} · {currentSummit.time} · {currentSummit.venue}</p>
          </div>
          <Link
            to="/events/register"
            className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full bg-brand-lime px-4 text-sm font-bold text-brand-navy"
          >
            Register
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Hide summit banner"
            className="flex h-11 w-9 shrink-0 items-center justify-center text-white/70 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  );
}
