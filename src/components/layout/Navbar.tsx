"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-950/95 shadow-lg backdrop-blur-md border-b border-slate-200 dark:border-slate-800"
          : "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-5">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col"
          >
            <span className="text-2xl font-bold text-blue-600">
              Dr. Taruna
            </span>

            <span className="text-xs text-slate-500 dark:text-slate-400">
              Orthodontist
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                text-slate-700
                dark:text-slate-200
                hover:text-blue-600
                dark:hover:text-blue-400
                transition-colors
                font-medium
                "
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() =>
                setTheme(
                  resolvedTheme === "dark"
                    ? "light"
                    : "dark"
                )
              }
              aria-label="Toggle Theme"
              className="
              p-2.5
              rounded-xl
              border
              border-slate-200
              dark:border-slate-700
              hover:bg-slate-100
              dark:hover:bg-slate-800
              transition
              "
            >
              {resolvedTheme === "dark" ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>

            {/* Mobile Menu */}
            <button
              className="
              lg:hidden
              p-2.5
              rounded-xl
              border
              border-slate-200
              dark:border-slate-700
              "
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
            >
              {mobileOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen
            ? "max-h-96 border-t border-slate-200 dark:border-slate-800"
            : "max-h-0"
        }`}
      >
        <div className="bg-white dark:bg-slate-950">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() =>
                setMobileOpen(false)
              }
              className="
              block
              px-6
              py-4
              text-slate-700
              dark:text-slate-200
              hover:bg-slate-100
              dark:hover:bg-slate-800
              transition
              "
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}