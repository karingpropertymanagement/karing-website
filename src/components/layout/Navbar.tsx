"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-xl border-b border-navy-100/50 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/images/logo.png"
            alt="KARING Property Management"
            width={72}
            height={72}
            className="w-16 h-16 md:w-[72px] md:h-[72px]"
          />
          <div className="flex flex-col leading-none">
            <span className="text-xl md:text-2xl font-extrabold tracking-tight text-[#0D2D6A]">
              KARING
            </span>
            <span className="text-[9px] md:text-[10px] font-medium tracking-widest uppercase text-[#0D2D6A]/60">
              Property Management
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${
                pathname === link.href ? "text-accent" : "text-navy-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" size="default">
            Get a Free Audit
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-navy"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-navy-100/50">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-base font-medium transition-colors duration-200 hover:text-accent ${
                  pathname === link.href ? "text-accent" : "text-navy-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" className="w-full mt-4">
              Get a Free Audit
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
