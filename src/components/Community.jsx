"use client";

import { Send, Instagram, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const socials = [
  {
    icon: Send,
    label: "Telegram",
    handle: "@adam_kazakhstan",
    color: "bg-blue-500",
    link: "#",
  },
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@adam.kz",
    color: "bg-gradient-to-tr from-pink-500 to-orange-400",
    link: "#",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    handle: "ADAM Group",
    color: "bg-green-500",
    link: "#",
  },
];

const testimonials = [
  {
    name: "Maria S.",
    from: "from Turkey",
    initials: "M",
    color: "bg-blue-100 text-blue-600",
    stars: 5,
    text: "ADAM helped me find an apartment and understand the medical system. I felt supported from day one!",
  },
  {
    name: "Ahmed K.",
    from: "from Egypt",
    initials: "A",
    color: "bg-green-100 text-green-600",
    stars: 5,
    text: "The events organized by ADAM are amazing. I made so many friends and learned about Kazakh culture.",
  },
  {
    name: "Li Wei",
    from: "from China",
    initials: "L",
    color: "bg-purple-100 text-purple-600",
    stars: 5,
    text: "The Telegram community is very active. Whenever I had a question, someone always helped within minutes.",
  },
];

export default function Community() {
  const { t } = useTranslation();
  const testimonialsLocalized = t("community.testimonials", { returnObjects: true });

  return (
    <section id="community" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge bg-blue-50 text-[#1a56db] mb-4">
            {t("community.badge")}
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {t("community.title")}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            {t("community.description")}
          </p>
        </div>

        {/* Telegram Banner */}
        <div className="bg-[#1a56db] rounded-3xl p-8 sm:p-12 mb-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <span
                  className="text-white text-xl font-bold"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {t("community.tgTitle")}
                </span>
              </div>
              <p className="text-white/75 leading-relaxed mb-8">
                {t("community.tgDesc")}
              </p>
              <Button
                className="border-white hover:bg-white hover:text-[#1a56db] gap-2"
              >
                <Send className="w-4 h-4" />
                {t("community.tgCta")}
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-52">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
                alt="Students collaborating"
                className="w-full h-full object-cover"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3 mt-8 pt-8 border-t border-white/20 relative z-10">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.link}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white rounded-full px-4 py-2 text-sm font-medium transition-colors"
              >
                <s.icon className="w-4 h-4" />
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3
            className="text-2xl font-bold text-center text-gray-900 mb-10"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {t("community.testimonialsTitle")}
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex text-yellow-400 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  &quot;{testimonialsLocalized[i].text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${t.color}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {t.name}
                    </p>
                    <p className="text-gray-400 text-xs">{testimonialsLocalized[i].from}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
