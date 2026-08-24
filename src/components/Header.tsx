import { Menu, X } from 'lucide-react';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import { ActionButton } from '@/components/ActionButton';
import { cn } from '@/lib/utils';
import siteLogo  from "@/assets/oude-logo.svg";

// const navLinks = [
//   { label: 'Home', href: '#home' },
//   { label: 'Over ons', href: '#overons' },  //about
//   { label: 'Diensten', href: '#diensten' }, //services
// ];


const navLinks = [
  { label: 'Home', href: "/" },
  { label: 'Over ons', href: "/overons" },
  { label: 'Initiatieven', href: '/initiatieven' },
  { label: 'Bloggen', href: '/bloggen' },
]



export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={cn('sticky top-0 z-50 transition-all duration-500',
        scrolled ? 'bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(40,8,7,0.08)]' : 'bg-transparent',
      )}
    >
      <div className="container-wide flex items-center justify-between py-3">
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-6 text-xs sm:text-[12px]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink to={link.href} className="relative py-1 transition-opacity hover:opacity-60 uppercase underline"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <NavLink to="/" aria-label="Oude Vismijn 1 home" className="shrink-0">
          <Logo/>
        </NavLink>

        <div className="flex items-center gap-3 sm:gap-8">
          <span className="hidden font-display text-xs sm:text-sm md:inline">
            EN +
          </span>
          <NavLink to="/contact">
              <ActionButton className="hidden md:inline-flex">
              Ontdek Oude Vismijn 1
              </ActionButton>
          </NavLink>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="container-wide">
          <div className="border-t border-ink/10 bg-cream py-6 md:hidden">
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-4 text-base">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <NavLink
                      to={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-1"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-6">
              <ActionButton>Ontdek Oude Vismijn 1</ActionButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <span className="tracking-tight">
      <img src={siteLogo} alt="oude-vismijn-logo" className="w-auto" />
    </span>
  );
}
