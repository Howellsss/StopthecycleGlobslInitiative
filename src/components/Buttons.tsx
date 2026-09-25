import { Link } from 'react-router-dom';
import { type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function Button({
  children,
  to,
  onClick,
  className = '',
  variant = 'primary',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-brand-emerald text-white hover:bg-brand-emerald-light hover:shadow-lg hover:shadow-brand-emerald/20',
    secondary: 'bg-brand-navy text-white hover:bg-brand-navy-deep',
    ghost: 'border border-brand-navy/20 text-brand-navy hover:border-brand-emerald hover:text-brand-emerald',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

export function ArrowLink({ children, to }: { children: ReactNode; to: string }) {
  return (
    <Link
      to={to}
      className="group inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand-emerald transition-colors hover:text-brand-emerald-light"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
