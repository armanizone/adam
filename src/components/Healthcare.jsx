"use client";

import { Stethoscope, ShieldCheck, Phone, FileText } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Healthcare() {
  const { t } = useTranslation();
  const items = t("healthcare.items", { returnObjects: true });
  const healthItems = [
    { icon: Stethoscope, ...items[0], color: "bg-red-50 text-red-500" },
    { icon: ShieldCheck, ...items[1], color: "bg-orange-50 text-orange-500" },
    { icon: Phone, ...items[2], color: "bg-blue-50 text-[#1a56db]" },
    { icon: FileText, ...items[3], color: "bg-yellow-50 text-yellow-600" },
  ];

  return (
    <section id="healthcare" className="py-24 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge bg-red-50 text-red-500 mb-4">
            {t("healthcare.badge")}
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {t("healthcare.title")}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            {t("healthcare.description")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {healthItems.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${item.color} group-hover:scale-110 transition-transform`}
              >
                <item.icon className="w-6 h-6" />
              </div>
              <h4
                className="font-bold text-gray-900 mb-3"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {item.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Hospital image */}
        <div className="relative rounded-3xl overflow-hidden h-64 shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&q=80"
            alt="Modern hospital"
            className="w-full h-full object-cover"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#1a56db]/80 to-transparent flex items-center px-12">
            <div>
              <p className="text-white/80 text-sm font-medium mb-2">{t("healthcare.emergency")}</p>
              <p
                className="text-white text-3xl font-bold"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {t("healthcare.call")}
              </p>
              <p className="text-white/70 text-sm mt-2">
                {t("healthcare.available")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
