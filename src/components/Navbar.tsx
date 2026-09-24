import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navItems, organization } from '@/data/organization';

const logoSrc = '/images/47c2f69a-b252-4c2e-bb50-56d78b142dd3.png';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkSection, setDarkSection] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const dark = document.querySelector('[data-nav-dark="true"]');
      if (dark) {
        const rect = dark.getBoundingClientRect();
        setDarkSection(rect.top <= 60 && rect.bottom > 60);
      } else {
        setDarkSection(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isDark = darkSection && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm'
            : isDark
            ? 'bg-transparent'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-18 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logoSrc} alt="Stop The Cycle" className="h-10 w-10 rounded-lg object-contain" />
            <span className={`text-base font-extrabold tracking-tight transition-colors ${
              isDark && !scrolled ? 'text-white' : 'text-brand-navy'
            }`}>
              {organization.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    active
                      ? isDark && !scrolled ? 'text-white' : 'text-brand-emerald'
                      : isDark && !scrolled
                      ? 'text-white/70 hover:text-white'
                      : 'text-brand-navy/60 hover:text-brand-navy'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-brand-emerald" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/get-involved"
              className="hidden items-center gap-1.5 rounded-full bg-brand-emerald px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-emerald-light hover:shadow-lg hover:shadow-brand-emerald/20 sm:inline-flex"
            >
              Get Involved
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden ${
                isDark && !scrolled ? 'text-white' : 'text-brand-navy'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden">
          <div className="flex h-full flex-col px-6 pt-20 pb-8">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`rounded-xl px-4 py-4 text-lg font-semibold transition-colors ${
                      active ? 'bg-brand-cream-warm text-brand-emerald' : 'text-brand-navy/70 hover:text-brand-navy'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              to="/get-involved"
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-brand-emerald px-6 py-4 text-base font-semibold text-white"
            >
              Get Involved
              <ArrowRight className="h-5 w-5" />
            </Link>
            <div className="mt-auto pt-8">
              <p className="text-sm text-brand-navy/40">{organization.tagline}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
