"use client";

import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const upcomingEvents = [
  {
    tag: "Upcoming",
    tagColor: "bg-blue-50 text-[#1a56db]",
    tagBorder: "border-b-2 border-[#1a56db]",
    title: "Welcome Week Spring 2026",
    desc: "Meet fellow students, learn about campus resources, and enjoy cultural performances.",
    date: "March 15, 2026",
    time: "10:00 AM",
    location: "University Main Hall",
  },
  {
    tag: "Featured",
    tagColor: "bg-green-50 text-[#10b981]",
    tagBorder: "border-b-2 border-[#10b981]",
    title: "Nauryz Festival Celebration",
    desc: "Join us for the biggest spring celebration with traditional food, music, and games.",
    date: "March 22, 2026",
    time: "12:00 PM",
    location: "Central Park, Astana",
  },
  {
    tag: "Workshop",
    tagColor: "bg-orange-50 text-orange-600",
    tagBorder: "border-b-2 border-orange-400",
    title: "Housing Workshop",
    desc: "Learn tips and tricks for finding affordable housing as a student in Kazakhstan.",
    date: "April 5, 2026",
    time: "3:00 PM",
    location: "Student Center, Room 204",
  },
];

const pastEvents = [
  {
    title: "Cultural Night 2025",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80",
  },
  {
    title: "International Food Festival",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
  },
  {
    title: "Student Networking Event",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  },
];

function Countdown() {
  const { t } = useTranslation();
  const target = new Date("2026-04-28T00:00:00");
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const padLabels = t("events.pads", { returnObjects: true });
  const pads = [
    { label: padLabels[0], value: time.days },
    { label: padLabels[1], value: time.hours },
    { label: padLabels[2], value: time.mins },
    { label: padLabels[3], value: time.secs },
  ];

  return (
    <div
      className="rounded-3xl p-10 text-white text-center mb-14"
      style={{ background: "linear-gradient(135deg, #1a56db 0%, #10b981 100%)" }}
    >
      <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-2">
        {t("events.countdownLabel")}
      </p>
      <h3
        className="text-2xl sm:text-3xl font-bold mb-1"
        style={{ fontFamily: "Syne, sans-serif" }}
      >
        Spring Event 2026
      </h3>
      <p className="text-white/70 text-sm mb-8">
        April 28, 2026
      </p>

      <div className="flex items-center justify-center gap-4 mb-8">
        {pads.map((p) => (
          <div key={p.label} className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-bold mb-1 border border-white/30">
              {String(p.value).padStart(2, "0")}
            </div>
            <span className="text-white/60 text-xs uppercase tracking-wider">
              {p.label}
            </span>
          </div>
        ))}
      </div>

      <Button className="border-white hover:bg-white hover:text-[#1a56db] font-semibold">
        {t("events.register")}
      </Button>
    </div>
  );
}


const eve = [
  'ISSYK LAKE',
  'NAURYZ',
  'WINTER SKI TOUR',
]

export default function Events() {
  const { t } = useTranslation();
  const upcoming = t("events.upcoming", { returnObjects: true });
  const past = t("events.past", { returnObjects: true });
  const upcomingEventsLocalized = upcomingEvents.map((event, index) => ({ ...event, ...upcoming[index] }));
  const pastEventsLocalized = pastEvents.map((event, index) => ({ ...event, title: past[index] }));

  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge bg-purple-50 text-purple-600 mb-4">
            {t("events.badge")}
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {t("events.title")}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            {t("events.description")}
          </p>
        </div>

        {/* Countdown */}
        <Countdown />

        {/* Upcoming Events */}
        {/* <div className="mb-16">
          <h3
            className="text-2xl font-bold text-gray-900 mb-8"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {t("events.upcomingTitle")}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEventsLocalized.map((event, i) => (
              <div
                key={i}
                className={`bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${event.tagBorder}`}
              >
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${event.tagColor}`}
                >
                  {event.tag}
                </span>
                <h4
                  className="font-bold text-gray-900 text-lg mb-2"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {event.title}
                </h4>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                  {event.desc}
                </p>
                <div className="space-y-2 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" />
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Past Events */}
        <div>
          <h3
            className="text-2xl font-bold text-gray-900 mb-8"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {t("events.pastTitle")}
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {/* {pastEventsLocalized.map((event, i) => ( */}
            {pastEventsLocalized.map((event, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden aspect-video group cursor-pointer"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-sm">{eve[i]}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/20 backdrop-blur rounded-full p-3">
                    <ArrowRight className="w-5 h-5 text-white" />
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
