import { type ReactNode } from 'react';

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-emerald ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-lime" />
      {children}
    </span>
  );
}

export function SectionHeader({
  label,
  title,
  subtitle,
  center = false,
  className = '',
}: {
  label?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-4 ${center ? 'items-center text-center' : ''} ${className}`}>
      {label && <SectionLabel>{label}</SectionLabel>}
      <h2 className="font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-brand-navy md:text-4xl lg:text-5xl text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base leading-relaxed text-brand-navy/60 md:text-lg ${center ? 'max-w-2xl' : 'max-w-2xl'} text-pretty`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
