"use client";

import { Send, Instagram, MessageCircle, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const footerLinks = {
    [t("footer.resources")]: t("footer.links1", { returnObjects: true }),
    [t("footer.community")]: t("footer.links2", { returnObjects: true }),
    [t("footer.about")]: t("footer.links3", { returnObjects: true }),
  };

  return (
    <footer className="bg-[#0f1729] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-[#1a56db] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">A</span>
              </div>
              <span
                className="font-bold text-xl"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                ADAM
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="google.com"
                className="w-9 h-9 bg-white/10 hover:bg-[#1a56db] rounded-lg flex items-center justify-center transition-colors"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/adam.kz/"
                className="w-9 h-9 bg-white/10 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/77777777777"
                className="w-9 h-9 bg-white/10 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4
                className="font-bold text-sm text-white/90 mb-5 uppercase tracking-wider"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {group}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="google.com"
                      className="text-white/45 hover:text-[#10b981] text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2026 ADAM - Adaptation Module. {t("footer.rights")}
          </p>
          <p className="text-white/30 text-sm flex items-center gap-1.5">
            {t("footer.made")}{" "}
            <Heart className="w-3.5 h-3.5 text-red-400 fill-current" />{" "}
            {t("footer.in")}
          </p>
        </div>
      </div>
    </footer>
  );
}
