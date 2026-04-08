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
    id: 1,
    q: {
      en: "What is ADAM?",
      ru: "Что такое ADAM?",
      kk: "ADAM дегеніміз не?"
    },
    a: {
      en: "ADAM (Adaptation Module) is a student-led initiative dedicated to helping international, exchange, and local students adapt to life in Kazakhstan. We provide resources, organize events, and build a supportive community.",
      ru: "ADAM (Adaptation Module) — это студенческая инициатива, помогающая иностранным, обменным и местным студентам адаптироваться к жизни в Казахстане. Мы предоставляем ресурсы, организуем мероприятия и строим поддерживающее сообщество.",
      kk: "ADAM (Adaptation Module) — халықаралық, алмасу бағдарламасымен келген және жергілікті студенттерге Қазақстандағы өмірге бейімделуге көмектесетін студенттік бастама. Біз ресурстар ұсынамыз, іс-шаралар ұйымдастырамыз және қолдау көрсететін қоғамдастық құрамыз."
    }
  },
  {
    id: 2,
    q: {
      en: "How can I join the community?",
      ru: "Как я могу присоединиться к сообществу?",
      kk: "Қоғамдастыққа қалай қосылуға болады?"
    },
    a: {
      en: "You can join our community by clicking the 'Join Community' button, signing up via our Telegram group, or attending any of our events. Membership is free and open to all students.",
      ru: "Вы можете присоединиться к нашему сообществу, нажав кнопку «Присоединиться», зарегистрировавшись через нашу группу в Telegram или посетив любое из наших мероприятий. Членство бесплатное и открыто для всех студентов.",
      kk: "Біздің қоғамдастыққа «Қосылу» түймесін басу, Telegram тобымыз арқылы тіркелу немесе кез келген іс-шарамызға қатысу арқылы қосыла аласыз. Мүшелік тегін және барлық студенттер үшін ашық."
    }
  },
  {
    id: 3,
    q: {
      en: "What languages do you support?",
      ru: "Какие языки вы поддерживаете?",
      kk: "Сіздер қай тілдерде қолдау көрсетесіздер?"
    },
    a: {
      en: "We currently support three languages: Kazakh, Russian, and English. Our community members come from all over the world, and we strive to make everyone feel welcome regardless of language background.",
      ru: "В настоящее время мы поддерживаем три языка: казахский, русский и английский. Члены нашего сообщества приезжают со всего мира, и мы стремимся к тому, чтобы каждый чувствовал себя комфортно, независимо от языковой среды.",
      kk: "Қазіргі уақытта біз үш тілді қолдаймыз: қазақ, орыс және ағылшын. Біздің қоғамдастық мүшелері әлемнің түкпір-түкпірінен келеді және біз тілдік деңгейіне қарамастан әрбір адам өзін жайлы сезінуіне тырысамыз."
    }
  },
  {
    id: 4,
    q: {
      en: "Do I need to be an international student to join?",
      ru: "Нужно ли мне быть иностранным студентом, чтобы присоединиться?",
      kk: "Қосылу үшін міндетті түрде шетелдік студент болу керек пе?"
    },
    a: {
      en: "No! ADAM is open to everyone — international students, exchange students, non-local Kazakh students, and local students who want to help and connect with peers. Diversity makes our community stronger.",
      ru: "Нет! ADAM открыт для всех: иностранных студентов, студентов по обмену, иногородних и местных студентов, которые хотят помогать и общаться с ровесниками. Разнообразие делает наше сообщество сильнее.",
      kk: "Жоқ! ADAM барлығына ашық: шетелдік және алмасу бағдарламасымен келген студенттерге, басқа қаладан келген қазақстандық студенттерге және құрдастарымен араласып, көмектескісі келетін жергілікті студенттерге. Әртүрлілік біздің қоғамдастықты нығайта түседі."
    }
  },
  {
    id: 5,
    q: {
      en: "How can I volunteer or contribute?",
      ru: "Как я могу стать волонтером или помочь проекту?",
      kk: "Мен қалай ерікті бола аламын немесе жобаға үлес қоса аламын?"
    },
    a: {
      en: "We're always looking for volunteers to help organize events, create content, or provide mentorship. Contact us through the form below or reach out on our Telegram group to get involved.",
      ru: "Мы всегда ищем волонтеров для организации мероприятий, создания контента или наставничества. Свяжитесь с нами через форму ниже или напишите в Telegram-группу, чтобы принять участие.",
      kk: "Біз іс-шараларды ұйымдастыруға, контент жасауға немесе тәлімгерлік етуге көмектесетін еріктілерді әрдайым іздейміз. Бізге төмендегі форма арқылы хабарласыңыз немесе қатысу үшін Telegram тобымызға жазыңыз."
    }
  },
  {
    id: 6,
    q: {
      en: "Are the events free?",
      ru: "Мероприятия бесплатные?",
      kk: "Іс-шаралар тегін бе?"
    },
    a: {
      en: "Most of our events are completely free for community members. Some special events may have a small fee to cover costs, but we always announce this in advance and strive to keep everything accessible.",
      ru: "Большинство наших мероприятий абсолютно бесплатны для членов сообщества. Некоторые специальные события могут иметь небольшой взнос для покрытия расходов, но мы всегда объявляем об этом заранее и стараемся делать все доступным.",
      kk: "Іс-шараларымыздың көпшілігі қоғамдастық мүшелері үшін мүлдем тегін. Кейбір арнайы іс-шаралар шығындарды жабу үшін аздаған ақы алуы мүмкін, бірақ біз бұл туралы алдын ала хабарлаймыз және барлығын қолжетімді етуге тырысамыз."
    }
  }
];

export default function FAQ() {
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language


  return (
    <section id="faq" className="py-24 bg-white">
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
              <AccordionTrigger>{faq.q[currentLang]}</AccordionTrigger>
              <AccordionContent>{faq.a[currentLang]}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
