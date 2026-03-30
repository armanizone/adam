"use client";

import { Heart, Eye, Globe, GraduationCap, Users, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const helpItems = t("about.helpItems", { returnObjects: true });
  const whoWeHelp = [
    { icon: Globe, ...helpItems[0], color: "bg-blue-50 text-blue-600" },
    { icon: GraduationCap, ...helpItems[1], color: "bg-purple-50 text-purple-600" },
    { icon: Users, ...helpItems[2], color: "bg-green-50 text-green-600" },
    { icon: Shield, ...helpItems[3], color: "bg-orange-50 text-orange-600" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge bg-blue-50 text-[#1a56db] mb-4">
            {t("about.badge")}
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {t("about.title")}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            {t("about.description")}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {/* Mission */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6 text-[#1a56db]" />
            </div>
            <h3
              className="text-xl font-bold text-gray-900 mb-3"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              {t("about.missionTitle")}
            </h3>
            <p className="text-gray-500 leading-relaxed">
              {t("about.mission")}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-linear-to-br from-[#10b981]/10 to-[#1a56db]/10 border border-green-100 rounded-2xl p-8 hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-[#10b981]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Eye className="w-6 h-6 text-[#10b981]" />
            </div>
            <h3
              className="text-xl font-bold text-gray-900 mb-3"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              {t("about.visionTitle")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("about.vision")}
            </p>
          </div>
        </div>

        {/* Who We Help */}
        <div>
          <h3
            className="text-2xl font-bold text-center text-gray-900 mb-10"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {t("about.helpTitle")}
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {whoWeHelp.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${item.color} group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
