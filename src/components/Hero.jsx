"use client";

import { ArrowRight, Users, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const statLabels = t("hero.stats", { returnObjects: true });
  const stats = [
    { value: "500+", label: statLabels[0] },
    { value: "3", label: statLabels[1] },
    { value: "50+", label: statLabels[2] },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Kazakhstan cityscape"
          className="w-full h-full object-cover object-center bg-cover bg-center bg-no-repeat"
          fill
          draggable={false}
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 hero-gradient" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium">
            {t("hero.badge")}
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          {t("hero.title")}{" "}
          <span className="text-[#10b981]">ADAM</span>
        </h1>
        <p
          className="text-xl sm:text-2xl text-white/90 font-light mb-6"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          {t("hero.subtitle")}
        </p>
        <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("hero.description")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="gap-2 text-base"
            onClick={() => document.getElementById("community")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Users className="w-5 h-5" />
            {t("hero.join")}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 text-base border-white/40 hover:bg-white/10"
            onClick={() => document.getElementById("housing")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("hero.explore")}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 sm:gap-16 mt-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div
                className="text-3xl sm:text-4xl font-bold text-white mb-1 group-hover:text-[#10b981] transition-colors"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="text-white/60 text-xs sm:text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2.5 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
