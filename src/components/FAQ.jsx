"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";
import { useTranslation } from "react-i18next";

const faqs = [
  {
    q: "What is ADAM?",
    a: "ADAM (Adaptation Module) is a student-led initiative dedicated to helping international, exchange, and local students adapt to life in Kazakhstan. We provide resources, organize events, and build a supportive community.",
  },
  {
    q: "How can I join the community?",
    a: "You can join our community by clicking the 'Join Community' button, signing up via our Telegram group, or attending any of our events. Membership is free and open to all students.",
  },
  {
    q: "What languages do you support?",
    a: "We currently support three languages: Kazakh, Russian, and English. Our community members come from all over the world, and we strive to make everyone feel welcome regardless of language background.",
  },
  {
    q: "Do I need to be an international student to join?",
    a: "No! ADAM is open to everyone — international students, exchange students, non-local Kazakh students, and local students who want to help and connect with peers. Diversity makes our community stronger.",
  },
  {
    q: "How can I volunteer or contribute?",
    a: "We're always looking for volunteers to help organize events, create content, or provide mentorship. Contact us through the form below or reach out on our Telegram group to get involved.",
  },
  {
    q: "Are the events free?",
    a: "Most of our events are completely free for community members. Some special events may have a small fee to cover costs, but we always announce this in advance and strive to keep everything accessible.",
  },
];

export default function FAQ() {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-badge bg-gray-100 text-gray-600 mb-4">{t("faq.badge")}</span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {t("faq.title")}
          </h2>
          <p className="text-gray-500 text-lg">
            {t("faq.description")}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
