import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4">
      <div className="text-center">
        <p className="text-7xl font-extrabold tracking-tight text-brand-navy">404</p>
        <p className="mt-4 text-lg text-brand-navy/50">This page drifted outside the movement.</p>
      </div>
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-full bg-brand-emerald px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-emerald-light hover:shadow-lg hover:shadow-brand-emerald/20"
      >
        <Home className="h-4 w-4" />
        Return Home
      </Link>
    </div>
  );
}
