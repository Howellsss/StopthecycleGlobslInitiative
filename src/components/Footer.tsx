import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { organization, footerNavItems } from '@/data/organization';

const links = [...footerNavItems, { label: 'Get Involved', path: '/get-involved' }];

export function Footer() {
  const socialLinks = [
    { Icon: Instagram, href: organization.social.instagram, label: 'Instagram' },
    { Icon: Facebook, href: organization.social.facebook, label: 'Facebook' },
    { Icon: Linkedin, href: organization.social.linkedin, label: 'LinkedIn' },
    { Icon: Youtube, href: organization.social.youtube, label: 'YouTube' },
  ].filter((link) => link.href);

  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1.5fr_1.2fr] lg:gap-12">
          {/* Brand */}
          <div className="flex items-start justify-between gap-4 lg:flex-col lg:justify-start">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <img src="/images/logo.webp" alt="" width={40} height={40} className="h-10 w-10 rounded-lg bg-white object-contain" />
                <span className="text-base font-extrabold tracking-tight">{organization.name}</span>
              </div>
              <p className="text-sm leading-relaxed text-white/75">{organization.tagline}</p>
            </div>
            {socialLinks.length > 0 && (
              <div className="flex shrink-0 items-center gap-2">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${organization.name} on ${label}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-300 hover:border-brand-lime hover:text-brand-lime"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Navigation: wraps across the width on phones, two columns on desktop */}
          <nav aria-label="Footer" className="flex flex-col gap-3">
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-white/75">Explore</h2>
            <ul className="flex flex-wrap gap-x-5 gap-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
              {links.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="inline-block py-1.5 text-sm text-white/85 transition-colors hover:text-brand-lime">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-white/75">Contact</h2>
            <div className="flex items-start gap-2.5">
              <Phone className="mt-2 h-4 w-4 flex-shrink-0 text-brand-lime" />
              <ul className="flex flex-wrap gap-x-4">
                {organization.phones.map((phone) => (
                  <li key={phone.tel}>
                    <a href={`tel:${phone.tel}`} className="inline-block py-1.5 text-sm text-white/85 transition-colors hover:text-brand-lime">
                      {phone.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-start gap-2.5">
              <Mail className="mt-2 h-4 w-4 flex-shrink-0 text-brand-lime" />
              <a href={`mailto:${organization.email}`} className="inline-block break-all py-1.5 text-sm text-white/85 transition-colors hover:text-brand-lime">
                {organization.email}
              </a>
            </div>
            <div className="flex items-start gap-2.5 text-sm text-white/85">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-lime" />
              <p>{organization.city}, {organization.country}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-1 border-t border-white/10 pt-5 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {organization.fullName}. Powered by {organization.parentOrg}.</p>
          <p>{organization.brandStatement}</p>
        </div>
      </div>
    </footer>
  );
}
