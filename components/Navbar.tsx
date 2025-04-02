"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-gradient-to-br from-blue-950/90 via-indigo-900/90 to-purple-900/90 backdrop-blur-lg shadow-lg border-b border-indigo-500/50"
            : "py-5 bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900"
        }`}
      >
        {/* Cosmic Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.5),_transparent_60%)] opacity-70 animate-[nebula_10s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSI+PHBhdHRlcm4gaWQ9InAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNhNWZmZmYiIG9wYWNpdHk9IjAuNSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3ApIiBvcGFjaXR5PSIwLjMiLz48L3N2Zz4=')] animate-[twinkle_3s_infinite]"></div>

        <div className="container mx-auto px-4 flex justify-between items-center relative z-10">
          {/* Logo / Name */}
          <Link href="/" className="flex items-center">
            <motion.span
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 tracking-tight animate-[cosmicGlow_4s_ease-in-out_infinite] drop-shadow-[0_0_15px_rgba(99,102,241,0.9)]"
              whileHover={{ scale: 1.05 }}
            >
              JF
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "text-indigo-100"
                    : "text-indigo-200 hover:text-indigo-100"
                }`}
              >
                {activeSection === item.href.substring(1) && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-800/60 to-purple-800/60 rounded-full -z-10 border border-indigo-500/50 shadow-[0_0_10px_rgba(99,102,241,0.7)]"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <motion.span
                  whileHover={{
                    textShadow: "0 0 15px rgba(99, 102, 241, 1), 0 0 25px rgba(147, 197, 253, 0.8)",
                    scale: 1.05,
                  }}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-indigo-200 focus:outline-none z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Gradient Border Bottom */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(99,102,241,0.7)]"></div>
        )}
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-gradient-to-br from-blue-950/90 via-indigo-900/90 to-purple-900/90 backdrop-blur-lg z-40"
              onClick={closeMenu}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.5),_transparent_60%)] opacity-70 animate-[nebula_10s_ease-in-out_infinite]"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSI+PHBhdHRlcm4gaWQ9InAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNhNWZmZmYiIG9wYWNpdHk9IjAuNSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3ApIiBvcGFjaXR5PSIwLjMiLz48L3N2Zz4=')] animate-[twinkle_3s_infinite]"></div>
            </motion.div>

            {/* Mobile menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            >
              <div className="bg-gradient-to-br from-indigo-900/95 to-purple-900/95 backdrop-blur-lg rounded-2xl p-8 max-w-sm w-full mx-4 shadow-xl border border-indigo-500/50">
                <div className="flex flex-col items-center space-y-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-xl font-medium transition-all duration-300 ${
                        activeSection === item.href.substring(1)
                          ? "text-indigo-100"
                          : "text-indigo-200 hover:text-indigo-100"
                      }`}
                      onClick={closeMenu}
                    >
                      <motion.span
                        whileHover={{
                          textShadow: "0 0 15px rgba(99, 102, 241, 1), 0 0 25px rgba(147, 197, 253, 0.8)",
                          scale: 1.05,
                        }}
                      >
                        {item.name}
                      </motion.span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}