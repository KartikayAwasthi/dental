"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "About",    href: "#about"     },
  { label: "Services", href: "#services"  },
  { label: "Research", href: "#research"  },
  { label: "Outcomes", href: "#gallery"   },
  { label: "FAQs",     href: "#faqs"      },
];

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted]       = useState(false);
  const [open, setOpen]             = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    setMounted(true);
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!mounted) return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 h-16" />
    </header>
  );

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-xl border-b border-slate-100 dark:border-white/5 shadow-sm"
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-[15px] font-bold text-slate-900 dark:text-white tracking-tight">
              Dr. Taruna Pratap Singh
            </span>
            <span className="text-[10px] font-medium text-teal-600 uppercase tracking-[0.15em] mt-0.5">
              MDS Orthodontics & Dentofacial Orthopaedics
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <a key={l.label} href={l.href}
                className="text-[13px] font-medium text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="hidden md:flex w-9 h-9 rounded-lg items-center justify-center border border-slate-200 dark:border-white/10 text-slate-500 dark:text-white/60 hover:bg-slate-50 dark:hover:bg-white/5 transition">
              {resolvedTheme === "dark" ? <Sun size={15}/> : <Moon size={15}/>}
            </button>

            <a href="#referral"
              className="hidden md:flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white text-[13px] font-semibold px-4 py-2 rounded-lg transition-colors">
              Book Appointment
              <ArrowRight size={13}/>
            </a>

            <button className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center border border-slate-200 dark:border-white/10"
              onClick={() => setOpen(!open)}>
              {open ? <X size={18}/> : <Menu size={18}/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white dark:bg-[#09090b] border-t border-slate-100 dark:border-white/5 px-6 pb-6 pt-4 space-y-1">
          {links.map(l => (
            <a key={l.label} href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-[14px] font-medium text-slate-600 dark:text-white/70 hover:text-teal-600">
              {l.label}
            </a>
          ))}
          <a href="#referral" onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 mt-4 w-full bg-teal-600 text-white py-3 rounded-lg font-semibold text-sm">
            Book Appointment <ArrowRight size={14}/>
          </a>
        </div>
      )}
    </header>
  );
}
