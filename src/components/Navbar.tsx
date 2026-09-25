import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navItems, organization } from '@/data/organization';

const logoSrc = '/images/logo.webp';

const secondaryItems = [{ label: 'Join the Movement', path: '/join' }];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // While the mobile menu is open: lock page scroll and close on Escape.
  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logoSrc} alt="" width={40} height={40} className="h-10 w-10 rounded-lg object-contain" />
            <span className="whitespace-nowrap text-base font-extrabold tracking-tight text-brand-navy">
              {organization.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main" className="hidden items-center gap-0.5 lg:flex xl:gap-1">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={active ? 'page' : undefined}
                  className={`relative whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium transition-colors xl:px-4 ${
                    active ? 'text-brand-emerald' : 'text-brand-navy/75 hover:text-brand-navy'
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
              className="hidden items-center gap-1.5 whitespace-nowrap rounded-full bg-brand-emerald px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-emerald-light hover:shadow-lg hover:shadow-brand-emerald/20 sm:inline-flex"
            >
              Get Involved
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-lg text-brand-navy lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-[45] overflow-y-auto bg-white lg:hidden">
          <div className="flex min-h-full flex-col px-6 pt-20 pb-8">
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    aria-current={active ? 'page' : undefined}
                    className={`rounded-xl px-4 py-3.5 text-lg font-semibold transition-colors ${
                      active ? 'bg-brand-cream-warm text-brand-emerald' : 'text-brand-navy/80 hover:text-brand-navy'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-3 flex flex-col gap-1 border-t border-brand-navy/10 pt-3">
              {secondaryItems.map((item) => (
                <Link key={item.path} to={item.path} className="rounded-xl px-4 py-3 text-base font-medium text-brand-navy/75 hover:text-brand-navy">
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              to="/get-involved"
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-brand-emerald px-6 py-4 text-base font-semibold text-white"
            >
              Get Involved
              <ArrowRight className="h-5 w-5" />
            </Link>
            <div className="mt-auto pt-8">
              <p className="text-sm text-brand-navy/70">{organization.tagline}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
