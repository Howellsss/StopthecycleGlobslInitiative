import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Youtube, MapPin } from 'lucide-react';
import { organization, navItems } from '@/data/organization';

export function Footer() {
  const socialLinks = [
    { Icon: Instagram, href: organization.social.instagram, label: 'Instagram' },
    { Icon: Facebook, href: organization.social.facebook, label: 'Facebook' },
    { Icon: Linkedin, href: organization.social.linkedin, label: 'LinkedIn' },
    { Icon: Youtube, href: organization.social.youtube, label: 'YouTube' },
  ];

  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-5 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <img src="/images/47c2f69a-b252-4c2e-bb50-56d78b142dd3.png" alt="Stop The Cycle" className="h-10 w-10 rounded-lg object-contain" />
              <span className="text-base font-extrabold tracking-tight">{organization.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              {organization.tagline}
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:border-brand-emerald hover:text-brand-emerald"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Explore</h4>
            <ul className="flex flex-col gap-2.5">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-white/60 transition-colors hover:text-brand-emerald">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Get Involved</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Join a Program', path: '/get-involved' },
                { label: 'Attend an Event', path: '/events' },
                { label: 'Volunteer', path: '/get-involved' },
                { label: 'Collaborate', path: '/get-involved' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-sm text-white/60 transition-colors hover:text-brand-emerald">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Based In</h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-emerald" />
              <div>
                <p className="text-sm text-white/60">{organization.city}</p>
                <p className="text-sm text-white/60">{organization.country}</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-white/30">
              The Life Class Community gathers every Thursday at 5:30 PM. Come ready for real issues and real answers.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} {organization.name}. {organization.parentOrg}.
          </p>
          <p className="text-xs text-white/30">It Starts With You.</p>
        </div>
      </div>
    </footer>
  );
}
