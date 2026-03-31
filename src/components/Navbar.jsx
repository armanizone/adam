"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe, Users } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navLabels = t("navbar.links", { returnObjects: true });
  const navHrefs = ["#home", "#about", "#housing", "#culture", "#healthcare", "#events", "#community", "#contact"];
  const labels = Array.isArray(navLabels) ? navLabels : navHrefs.map((href) => href.replace("#", ""));
  const navLinks = labels.map((label, index) => ({ label, href: navHrefs[index] }));
  const langs = [
    { code: "en", label: t("languages.en") },
    { code: "ru", label: t("languages.ru") },
    { code: "kk", label: t("languages.kk") },
  ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-[#1a56db] rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xs tracking-wider">A</span>
            </div>
            <span
              className={cn(
                "font-bold text-lg tracking-wide transition-colors",
                scrolled ? "text-gray-900" : "text-white"
              )}
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              ADAM
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  scrolled
                    ? "text-gray-600 hover:text-[#1a56db] hover:bg-blue-50"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="relative">
              <button
                className={cn(
                  "flex items-center gap-1.5 text-sm font-medium transition-colors",
                  scrolled ? "text-gray-600 hover:text-[#1a56db]" : "text-white/85 hover:text-white"
                )}
                onClick={() => setLangOpen((prev) => !prev)}
              >
                <Globe className="w-4 h-4" />
                {i18n.language.toUpperCase()}
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 bg-white rounded-xl border border-gray-100 shadow-lg p-1 min-w-[150px]">
                  {langs.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-lg text-sm",
                        i18n.language === lang.code ? "bg-blue-50 text-[#1a56db]" : "text-gray-700 hover:bg-gray-50"
                      )}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Button
              size="sm"
              className="gap-2"
              onClick={() => document.getElementById("community")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Users className="w-3.5 h-3.5" />
              {t("navbar.join")}
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-3 pb-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#1a56db] hover:bg-blue-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="mb-3 flex gap-2">
                {langs.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-medium",
                      i18n.language === lang.code ? "bg-blue-50 text-[#1a56db]" : "bg-gray-100 text-gray-700"
                    )}
                  >
                    {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
              <Button className="w-full gap-2">
                <Users className="w-4 h-4" />
                {t("navbar.join")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
