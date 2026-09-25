import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { organization, footerNavItems } from '@/data/organization';

const involvedLinks = [
  { label: 'Join a Program', path: '/programs' },
  { label: 'Attend an Event', path: '/events' },
  { label: 'Volunteer', path: '/get-involved' },
  { label: 'Partner With Us', path: '/get-involved' },
];

export function Footer() {
  const socialLinks = [
    { Icon: Instagram, href: organization.social.instagram, label: 'Instagram' },
    { Icon: Facebook, href: organization.social.facebook, label: 'Facebook' },
    { Icon: Linkedin, href: organization.social.linkedin, label: 'LinkedIn' },
    { Icon: Youtube, href: organization.social.youtube, label: 'YouTube' },
  ].filter((link) => link.href);

  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 flex flex-col gap-5 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <img src="/images/logo.webp" alt="" width={40} height={40} className="h-10 w-10 rounded-lg bg-white object-contain" />
              <span className="text-base font-extrabold tracking-tight">{organization.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-white/70">{organization.tagline}</p>
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-3 pt-1">
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

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-white/75">Explore</h2>
            <ul className="flex flex-col gap-1">
              {footerNavItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="inline-block py-1 text-sm text-white/80 transition-colors hover:text-brand-lime">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div className="flex flex-col gap-4">
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-white/75">Get Involved</h2>
            <ul className="flex flex-col gap-1">
              {involvedLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="inline-block py-1 text-sm text-white/80 transition-colors hover:text-brand-lime">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 flex flex-col gap-4 lg:col-span-1">
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-white/75">Contact</h2>
            <div className="flex items-start gap-2.5 text-sm text-white/80">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-lime" />
              <p>{organization.city}, {organization.country}</p>
            </div>
            <div className="flex items-start gap-2.5">
              <Phone className="mt-1.5 h-4 w-4 flex-shrink-0 text-brand-lime" />
              <ul className="flex flex-col">
                {organization.phones.map((phone) => (
                  <li key={phone.tel}>
                    <a href={`tel:${phone.tel}`} className="inline-block py-1 text-sm text-white/80 transition-colors hover:text-brand-lime">
                      {phone.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-start gap-2.5">
              <Mail className="mt-1.5 h-4 w-4 flex-shrink-0 text-brand-lime" />
              <a href={`mailto:${organization.email}`} className="inline-block break-all py-1 text-sm text-white/80 transition-colors hover:text-brand-lime">
                {organization.email}
              </a>
            </div>
            <p className="text-xs leading-relaxed text-white/70">
              The Life Class Community gathers every Thursday at 5:30 PM. Come ready for real issues and real answers.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-center text-xs text-white/70 sm:text-left">
            © {new Date().getFullYear()} {organization.fullName}. Powered by {organization.parentOrg}.
          </p>
          <p className="text-xs text-white/70">{organization.brandStatement}</p>
        </div>
      </div>
    </footer>
  );
}
