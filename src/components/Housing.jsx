"use client";

import { Home, MapPin, Lightbulb } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Housing() {
  const { t } = useTranslation();
  const items = t("housing.items", { returnObjects: true });
  const housingItems = [
    { icon: Home, ...items[0], color: "text-[#1a56db] bg-blue-50" },
    { icon: MapPin, ...items[1], color: "text-purple-600 bg-purple-50" },
    { icon: Lightbulb, ...items[2], color: "text-[#10b981] bg-green-50" },
  ];

  return (
    <section id="housing" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="section-badge bg-blue-50 text-[#1a56db] mb-5">
              {t("housing.badge")}
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              {t("housing.title")}<br />{t("housing.title2")}
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              {t("housing.description")}
            </p>

            <div className="space-y-6">
              {housingItems.map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${item.color} group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="mt-10 gap-2">
              {t("housing.cta")}
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3 h-64">
              <Image
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80"
                alt="Cozy apartment in Kazakhstan"
                className="w-full h-full object-cover"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1a56db]/20 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 max-w-[220px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Home className="w-4 h-4 text-[#10b981]" />
                </div>
                <span className="font-bold text-gray-900 text-sm">{t("housing.value")}</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                {t("housing.valueText")} <span className="font-semibold text-[#1a56db]">15,000 KZT</span>/month
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
