"use client";

import { Send, Instagram, MessageCircle, Heart, Globe } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const footerUrlsRaw = t("footer.urls", { returnObjects: true });
  const footerUrls =
    footerUrlsRaw && typeof footerUrlsRaw === "object" ? footerUrlsRaw : {};

  const footerLinks = {
    [t("footer.resources")]: t("footer.links1", { returnObjects: true }),
    [t("footer.community")]: t("footer.links2", { returnObjects: true }),
    [t("footer.about")]: t("footer.links3", { returnObjects: true }),
  };
  const fallbackUrl = "https://google.com";

  const resolveUrl = (key) => footerUrls[key] || fallbackUrl;
  const resolveFooterHref = (link) => {
    const normalized = String(link).toLowerCase();
    if (normalized.includes("telegram")) return resolveUrl("telegram");
    if (normalized.includes("instagram")) return resolveUrl("instagram");
    if (normalized.includes("whatsapp")) return resolveUrl("whatsapp");
    // Anchor links matching navbar sections
    if (
      normalized.includes("housing") ||
      normalized.includes("жилью") ||
      normalized.includes("тұрғын үй")
    ) return "#housing";
    if (
      normalized.includes("culture") ||
      normalized.includes("культур") ||
      normalized.includes("мәдениет")
    ) return "#culture";
    if (
      normalized.includes("healthcare") ||
      normalized.includes("health") ||
      normalized.includes("здравоохранение") ||
      normalized.includes("денсаулық")
    ) return "#healthcare";
    if (
      normalized.includes("event") ||
      normalized.includes("події") ||
      normalized.includes("события") ||
      normalized.includes("іс-шара")
    ) return "#events";
    if (
      normalized.includes("mission") ||
      normalized.includes("миссия") ||
      normalized.includes("миссиям") ||
      normalized.includes("about") ||
      normalized.includes("о нас") ||
      normalized.includes("біз туралы")
    ) return "#about";
    if (normalized.includes("faq")) return "#faq";
    if (
      normalized.includes("team") ||
      normalized.includes("команд") ||
      normalized.includes("команда") ||
      normalized.includes("командам")
    ) return "#home";
    if (
      normalized.includes("contact") ||
      normalized.includes("контакт") ||
      normalized.includes("байланыс")
    ) return "#contact";
    return fallbackUrl;
  };

  return (
    <footer className="bg-[#0f1729] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
            <Image
                src="/logo-nobg.png" // положи файл в /public
                alt="Logo"
                width={80}
                height={40}
                priority
              />
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
                href={resolveUrl("telegram")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#1a56db] rounded-lg flex items-center justify-center transition-colors"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={resolveUrl("instagram")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={resolveUrl("whatsapp")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={resolveUrl("web")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Globe className="w-4 h-4" />
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
                      href={resolveFooterHref(link)}
                      {...(!resolveFooterHref(link).startsWith("#") && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
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
