"use client";

import { Landmark, UtensilsCrossed, Train, Sun } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Culture() {
  const { t } = useTranslation();
  const transTabs = t("culture.tabs", { returnObjects: true });
  const tabs = [
    { id: "traditions", icon: Landmark, ...transTabs[0] },
    { id: "food", icon: UtensilsCrossed, ...transTabs[1] },
    { id: "transport", icon: Train, ...transTabs[2] },
    { id: "daily", icon: Sun, ...transTabs[3] },
  ];

  return (
    <section id="culture" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge bg-green-50 text-[#10b981] mb-4">
            {t("culture.badge")}
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {t("culture.title")}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            {t("culture.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-4/3 md:h-96">
            <Image
              src="/r.jpg"
              alt="Kazakh traditional yurt on steppe"
              className="w-full h-full object-cover"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-6">
              <p className="text-white font-semibold text-lg" style={{ fontFamily: "Syne, sans-serif" }}>
                {t("culture.imageTitle")}
              </p>
              <p className="text-white/70 text-sm">{t("culture.imageSubtitle")}</p>
            </div>
          </div>

          {/* Tabs */}
          <div>
            <Tabs defaultValue="traditions">
              <TabsList className="w-full mb-2">
                {tabs.map((tab) => (
                  <TabsTrigger key={tab.id} value={tab.id} className="flex-1 text-xs sm:text-sm">
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {tabs.map((tab) => (
                <TabsContent key={tab.id} value={tab.id}>
                  <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-5">
                      <tab.icon className="w-6 h-6 text-[#10b981]" />
                    </div>
                    <h3
                      className="text-xl font-bold text-gray-900 mb-4"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {tab.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-5">
                      {tab.content}
                    </p>
                    <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-sm text-[#1a56db] font-medium">
                      {tab.highlight}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
