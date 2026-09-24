import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Summits', path: '/summits' },
  { label: 'Partnerships', path: '/partnerships' },
  { label: 'Intake', path: '/intake' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'border-canvas-border bg-black/80 backdrop-blur-md'
          : 'border-transparent bg-black/40 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-18 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/images/47c2f69a-b252-4c2e-bb50-56d78b142dd3.png" alt="Stop The Cycle" className="h-10 w-10 rounded-lg object-contain" />
          <div className="hidden sm:block">
            <div className="text-sm font-bold leading-tight text-white">Stop The Cycle</div>
            <div className="text-[10px] uppercase tracking-wider text-slate-muted">Uche Juan Augustine Foundation</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  active ? 'text-white' : 'text-slate-muted hover:text-white'
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-brand" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/intake"
            className="hidden items-center gap-1.5 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-deep hover:shadow-[0_0_25px_rgba(0,168,89,0.3)] sm:inline-flex"
          >
            Secure Free Summit Pass
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-canvas-border text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-canvas-border bg-black/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    active ? 'bg-canvas-surface text-white' : 'text-slate-muted hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/intake"
              className="mt-2 flex items-center justify-center gap-1.5 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white"
            >
              Secure Free Summit Pass
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
