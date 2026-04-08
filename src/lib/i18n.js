import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";

const i18n = createInstance();

const resources = {
  en: {
    translation: {
      navbar: {
        links: [
          "Home",
          "About",
          "Housing",
          "Culture",
          "Healthcare",
          "Events",
          "Community",
          "Contact",
        ],
        join: "Join Community",
      },
      hero: {
        badge: "Student-led initiative in Kazakhstan",
        title: "Welcome to",
        subtitle: "Your Adaptation Guide in Kazakhstan",
        description:
          "Helping international, exchange, and local students navigate life in Kazakhstan with housing, culture, healthcare, events, and community support.",
        join: "Join Our Community",
        explore: "Explore Resources",
        stats: ["Students Helped", "Languages", "Events Hosted"],
      },
      about: {
        badge: "About Us",
        title: "Who We Are",
        description:
          "ADAM (Adaptation Module) is a student-led initiative dedicated to making the transition to life in Kazakhstan smooth and enjoyable.",
        missionTitle: "Our Mission",
        mission:
          "To create a supportive and inclusive community that helps every student feel at home in Kazakhstan. We provide essential information, organize events, and build connections that last a lifetime.",
        visionTitle: "Our Vision",
        vision:
          "A Kazakhstan where every student, regardless of their origin, has access to the resources and community they need to thrive academically, socially, and personally.",
        helpTitle: "Who We Help",
        helpItems: [
          {
            title: "International Students",
            desc: "Newcomers who have just arrived and are looking for information, support, and help with adaptation.",
          },
          {
            title: "Non-Local Students",
            desc: "Students from other regions of Kazakhstan who need help with housing, healthcare, and navigating life in a new city.",
          },
          {
            title: "Local Students",
            desc: "Those who want to meet international students, participate in events, and help new community members.",
          },
          {
            title: "All students looking for a community",
            desc: "Find friends, exchange experiences, and feel like a part of the student community.",
          },
        ],
      },
      housing: {
        badge: "Housing",
        title: "Find Your Home",
        title2: "in Kazakhstan",
        description:
          "Finding the right place to live is one of the first steps to a comfortable student life. Here's everything you need to know.",
        items: [
          {
            title: "Renting Guide",
            desc: "Average rent ranges from 80,000–200,000 KZT/month depending on city and area. Use platforms like Krisha.kz and OLX.kz to find apartments.",
          },
          {
            title: "Dormitory Info",
            desc: "Most universities offer dormitory housing at affordable rates (15,000–40,000 KZT/month). Apply early as spots fill quickly.",
          },
          {
            title: "Tips for Foreigners",
            desc: "Always sign a rental contract. Check utilities included. Prefer areas near public transport. Ask local students for neighborhood recommendations.",
          },
        ],
        cta: "Go and see the guide",
        value: "Best Value",
        valueText: "Dormitory spots from",
      },
      culture: {
        badge: "Culture & Life",
        title: "Discover Kazakhstan",
        description:
          "Immerse yourself in the rich culture, traditions, and daily life of this beautiful country.",
        imageTitle: "The Great Steppe",
        imageSubtitle: "Kazakhstan's nomadic heritage",
        tabs: [
          {
            label: "Traditions",
            title: "Kazakh Traditions",
            content:
              "Kazakhstan has rich nomadic heritage. Hospitality is deeply valued - guests are treated with great respect. Learn about Nauryz, the spring festival that marks the Kazakh New Year with traditional games, music, and feasts. Yurts (portable felt houses) remain a powerful cultural symbol representing the nomadic way of life.",
            highlight: "Nauryz - Spring Festival (March 21-23)",
          },
          {
            label: "Food",
            title: "Kazakh Cuisine",
            content:
              "Beshbarmak (boiled meat with flat noodles) is the national dish. Try Manti (steamed dumplings), Samsa (baked pastries), and Kazy (horse meat sausage). The bazaars offer fresh produce and local delicacies. Most cities have a wide variety of international cuisine as well.",
            highlight: "Must try: Beshbarmak and Manti",
          },
          {
            label: "Transport",
            title: "Getting Around",
            content:
              "Cities have affordable bus and metro systems (Almaty has a metro). Yandex Go and InDrive are popular ride-hailing apps. Inter-city travel is available by train or bus. Download the apps before arrival. Taxis are inexpensive compared to Western standards.",
            highlight: "Download Yandex Go app",
          },
          {
            label: "Daily Life",
            title: "Daily Life in Kazakhstan",
            content:
              "Shops open early (8-9 AM) and close late (10 PM). Most services require a local phone number. Banks and ATMs are widely available; Kaspi Bank app is essential for payments. Weather varies drastically - cold winters (-20C) and warm summers (+35C). Dress in layers.",
            highlight: "Get Kaspi Bank app immediately",
          },
        ],
      },
      healthcare: {
        badge: "Healthcare",
        title: "Your Health Matters",
        description:
          "Understanding the healthcare system is essential. Here's what you need to know to stay healthy and safe.",
        items: [
          {
            title: "Medical System",
            desc: "Kazakhstan has both public and private healthcare. University clinics offer basic services. For specialists, visit city polyclinics or private hospitals.",
          },
          {
            title: "Insurance Info",
            desc: "International students should have health insurance. Many universities include basic coverage. Private insurance costs 30,000-100,000 KZT/year.",
          },
          {
            title: "Emergency Contacts",
            desc: "Ambulance: 103 | Police: 102 | Fire: 101 | General Emergency: 112. Save these numbers in your phone immediately upon arrival.",
          },
          {
            title: "Important Notes",
            desc: "Carry your student ID and passport copy. Pharmacies (Apteka) are widely available. Many medications do not require prescriptions.",
          },
        ],
        emergency: "Emergency",
        call: "Call 112 anytime",
        available: "Available 24/7 across Kazakhstan",
      },
      events: {
        badge: "Events",
        title: "Connect & Celebrate",
        description:
          "Join our events to meet new friends, learn about Kazakh culture, and make unforgettable memories.",
        countdownLabel: "Next Event",
        register: "Register Now",
        upcomingTitle: "Upcoming Events",
        pastTitle: "Past Events",
        pads: ["Days", "Hours", "Mins", "Secs"],
        upcoming: [
          {
            tag: "Upcoming",
            title: "Welcome Week Spring 2026",
            desc: "Meet fellow students, learn about campus resources, and enjoy cultural performances.",
            date: "March 15, 2026",
            time: "10:00 AM",
            location: "University Main Hall",
          },
          {
            tag: "Featured",
            title: "Nauryz Festival Celebration",
            desc: "Join us for the biggest spring celebration with traditional food, music, and games.",
            date: "March 22, 2026",
            time: "12:00 PM",
            location: "Central Park, Astana",
          },
          {
            tag: "Workshop",
            title: "Housing Workshop",
            desc: "Learn tips and tricks for finding affordable housing as a student in Kazakhstan.",
            date: "April 5, 2026",
            time: "3:00 PM",
            location: "Student Center, Room 204",
          },
        ],
        past: [
          "Cultural Night 2025",
          "International Food Festival",
          "Student Networking Event",
        ],
      },
      community: {
        badge: "Community",
        title: "Join Our Growing Community",
        description:
          "Connect with fellow students, share your experiences, and get support in any situation.",
        tgTitle: "Telegram Community",
        tgDesc:
          "On Telegram, you will find all the necessary information about life in Kazakhstan: from culture and traditions to healthcare and housing matters.",
        tgCta: "Join Telegram Group",
        tgCta2: "Join Telegram Bot",
        tgLink: "https://t.me/adaptationmodule",
        tgLink2: "https://t.me/emergencycaller_bot",
        testimonialsTitle: "What Students Say",
        testimonials: [
          {
            from: "from Turkey",
            text: "A trip to Oi-Qaragai was a perfect escape from the city for me. The beautiful nature, fresh air, and friendly atmosphere made it an unforgettable experience. While there, I met some local students; we’ve stayed in touch and now see each other at the university. One of them is even helping me adapt to local life.",
          },
          {
            from: "from Egypt",
            text: "The Telegram community has become my anchor in a new country. Here, I not only found useful information about life in Kazakhstan but also met people who are easy and pleasant to talk to. Thanks to this chat, my adaptation was much faster, and I truly felt like a part of the student community.",
          },
          {
            from: "from China",
            text: "The Nauryz trip to the ethno-village was an unforgettable experience for me. We witnessed traditional rituals, tasted kumys and baursaks, and even went horseback riding. This event helped me dive deeper into the culture of Kazakhstan and see the country through a different lens.",
          },
        ],
      },
      faq: {
        badge: "FAQ",
        title: "Frequently Asked Questions",
        description: "Everything you need to know about ADAM.",
      },
      contact: {
        badge: "Contact Us",
        title: "Get in Touch",
        description:
          "Have a question or want to collaborate? We'd love to hear from you.",
        sent: "Message Sent!",
        sentText:
          "Thank you for reaching out. We'll get back to you within 24 hours.",
        sendAnother: "Send another message",
        yourName: "Your Name",
        email: "Email Address",
        message: "Message",
        send: "Send Message",
      },
      footer: {
        description:
          "Adaptation Module - Helping students feel at home in Kazakhstan since 2025.",
        resources: "Resources",
        community: "Community",
        about: "About",
        urls: {
          telegram: "https://t.me/adaptationmodule",
          instagram: "https://www.instagram.com/adam.turan_/",
          whatsapp: "https://wa.me/77077888677",
          web: "https://google.com",
        },
        links1: ["Housing Guide", "Culture & Life", "Healthcare", "Events"],
        links2: ["Telegram", "Instagram", "WhatsApp", "Contact Us"],
        links3: ["Our Mission", "Our Team", "FAQ"],
        rights: "All rights reserved.",
        made: "Made with",
        in: "in Kazakhstan",
      },
      languages: {
        en: "English",
        ru: "Russian",
        kk: "Kazakh",
      },
    },
  },
  ru: {
    translation: {
      navbar: {
        links: [
          "Главная",
          "О нас",
          "Жилье",
          "Культура",
          "Здоровье",
          "События",
          "Сообщество",
          "Контакты",
        ],
        join: "Вступить в сообщество",
      },
      hero: {
        badge: "Студенческая инициатива в Казахстане",
        title: "Добро пожаловать в",
        subtitle: "Ваш гид по адаптации в Казахстане",
        description:
          "Помогаем иностранным, обменным и местным студентам адаптироваться к жизни в Казахстане: жилье, культура, здравоохранение, события и поддержка сообщества.",
        join: "Присоединиться к сообществу",
        explore: "Смотреть ресурсы",
        stats: ["Студентов поддержано", "Языка", "Проведено событий"],
      },
      about: {
        badge: "О нас",
        title: "Кто мы",
        description:
          "ADAM (Adaptation Module) — студенческая инициатива, которая делает переход к жизни в Казахстане более легким и приятным.",
        missionTitle: "Наша миссия",
        mission:
          "Создать поддерживающее и инклюзивное сообщество, где каждый студент чувствует себя как дома в Казахстане.",
        visionTitle: "Наше видение",
        vision:
          "Казахстан, где каждый студент имеет доступ к ресурсам и сообществу для успешной учебы и жизни.",
        helpTitle: "Кому мы помогаем",
        helpItems: [
          {
            title: "Иностранные студенты",
            desc: "Новички, которые только приехали и ищут информацию, поддержку и помощь в адаптации.",
          },
          {
            title: "Студенты из других регионов",
            desc: "Студенты из других регионов Казахстана, которым нужна помощь с жильем, медициной и жизнью в новом городе.",
          },
          {
            title: "Местные студенты",
            desc: "Те, кто хочет познакомиться с иностранными студентами, участвовать в мероприятиях и помогать новым участникам комьюнити.",
          },
          {
            title: "Все студенты, ищущие сообщество",
            desc: "Находить друзей, обмениваться опытом и чувствовать себя частью студенческой среды.",
          },
        ],
      },
      housing: {
        badge: "Жилье",
        title: "Найдите свой дом",
        title2: "в Казахстане",
        description:
          "Поиск жилья — один из первых шагов к комфортной студенческой жизни.",
        items: [
          {
            title: "Гид по аренде",
            desc: "Средняя аренда 80 000-200 000 тг/мес в зависимости от города и района.",
          },
          {
            title: "Информация об общежитии",
            desc: "Во многих вузах есть общежития по доступной цене 15 000-40 000 тг/мес.",
          },
          {
            title: "Советы для иностранцев",
            desc: "Всегда подписывайте договор аренды и выбирайте районы рядом с транспортом.",
          },
        ],
        cta: "Перейти к гиду",
        value: "Лучшая цена",
        valueText: "Места в общежитии от",
      },
      culture: {
        badge: "Культура и жизнь",
        title: "Откройте Казахстан",
        description: "Погрузитесь в богатую культуру и традиции.",
        imageTitle: "Великая степь",
        imageSubtitle: "Кочевое наследие Казахстана",
        tabs: [
          {
            label: "Традиции",
            title: "Казахские традиции",
            content:
              "Казахстан обладает богатым кочевым наследием и культурой гостеприимства.",
            highlight: "Наурыз - весенний праздник (21-23 марта)",
          },
          {
            label: "Еда",
            title: "Казахская кухня",
            content: `Казахская кухня основана на мясе (бешбармак, казы, куырдак), тесте (баурсаки, шелпек) и кисломолочных продуктах (кумыс, курт). Она отличается высокой калорийностью и акцентом на гостеприимство, где каждое блюдо имеет свою ритуальную значимость.`,
            highlight: "Обязательно: бешбармак и манты",
          },
          {
            label: "Транспорт",
            title: "Как передвигаться",
            content: "В городах доступны автобусы, метро и приложения такси.",
            highlight: "Скачайте приложение Yandex Go",
          },
          {
            label: "Быт",
            title: "Повседневная жизнь",
            content:
              "Сервисы часто требуют местный номер телефона, а Kaspi важен для платежей.",
            highlight: "Сразу установите Kaspi",
          },
        ],
      },
      healthcare: {
        badge: "Здравоохранение",
        title: "Ваше здоровье важно",
        description: "Краткий обзор системы здравоохранения и безопасности.",
        items: [
          {
            title: "Медицинская система",
            desc: "Есть государственная и частная медицина.",
          },
          {
            title: "Страховка",
            desc: "Иностранным студентам нужна медстраховка.",
          },
          {
            title: "Экстренные контакты",
            desc: "Скорая: 103 | Полиция: 102 | Пожарная: 101 | 112",
          },
          {
            title: "Важные заметки",
            desc: "Носите с собой студбилет и копию паспорта.",
          },
        ],
        emergency: "Экстренно",
        call: "Звоните 112 в любое время",
        available: "Доступно 24/7 по всему Казахстану",
      },
      events: {
        badge: "События",
        title: "Общайтесь и празднуйте",
        description: "Присоединяйтесь к событиям ADAM и находите друзей.",
        countdownLabel: "Следующее событие",
        register: "Зарегистрироваться",
        upcomingTitle: "Ближайшие события",
        pastTitle: "Прошедшие события",
        pads: ["Дни", "Часы", "Мин", "Сек"],
        upcoming: [
          {
            tag: "Скоро",
            title: "Welcome Week Spring 2026",
            desc: "Знакомство со студентами и ресурсами кампуса.",
            date: "15 марта 2026",
            time: "10:00",
            location: "Главный холл университета",
          },
          {
            tag: "Главное",
            title: "Празднование Наурыза",
            desc: "Традиционная еда, музыка и игры.",
            date: "22 марта 2026",
            time: "12:00",
            location: "Центральный парк, Астана",
          },
          {
            tag: "Воркшоп",
            title: "Воркшоп по жилью",
            desc: "Советы по поиску доступного жилья.",
            date: "5 апреля 2026",
            time: "15:00",
            location: "Student Center, 204",
          },
        ],
        past: [
          "Культурный вечер 2025",
          "Международный фестиваль еды",
          "Нетворкинг студентов",
        ],
      },
      community: {
        badge: "Сообщество",
        title: "Присоединяйтесь к нашему сообществу",
        description:
          "Общайтесь с другими студентами, делитесь опытом и получайте поддержку в любой ситуации.",
        tgTitle: "Telegram-сообщество",
        tgDesc:
          "В Telegram вы найдете всю необходимую информацию о жизни в Казахстане: от культуры и традиций до вопросов медицины и проживания.",
        tgCta: "Вступить в Telegram",
        tgCta2: "Написать Телеграм боту",
        tgLink: "https://t.me/adaptationmodule",
        tgLink2: "https://t.me/emergencycaller_bot",
        testimonialsTitle: "Отзывы студентов",
        testimonials: [
          {
            from: "из Турции",
            text: "Поездка в Oi-Qaragai стала для меня отличным отдыхом от города. Красивая природа, свежий воздух и дружелюбная атмосфера сделали этот опыт незабываемым. Там я познакомился с местными студентами, теперь мы хорошо общаемся, поддерживаем связь в университете, и один из них помогает мне адаптироваться.",
          },
          {
            from: "из Египта",
            text: "Telegram-сообщество стало для меня точкой опоры в новой стране. Здесь я не только получил полезную информацию о жизни в Казахстане, но и нашёл людей, с которыми легко и приятно общаться. Благодаря этому чату адаптация прошла намного быстрее, и я почувствовал себя частью студенческой среды.",
          },
          {
            from: "из Китая",
            text: "Поездка на Наурыз в этно-аул стала для меня незабываемым опытом. Мы увидели традиционные обряды, попробовали кумыс и баурсаки, а ещё покатались на конях. Это мероприятие помогло глубже погрузиться в культуру Казахстана и увидеть страну другими глазами.",
          },
        ],
      },
      faq: {
        badge: "FAQ",
        title: "Часто задаваемые вопросы",
        description: "Все, что нужно знать об ADAM.",
      },
      contact: {
        badge: "Связаться с нами",
        title: "Напишите нам",
        description: "Есть вопрос или предложение? Мы будем рады.",
        sent: "Сообщение отправлено!",
        sentText: "Спасибо! Мы ответим в течение 24 часов.",
        sendAnother: "Отправить еще",
        yourName: "Ваше имя",
        email: "Email",
        message: "Сообщение",
        send: "Отправить сообщение",
      },
      footer: {
        description:
          "Adaptation Module - Помогаем студентам чувствовать себя как дома в Казахстане с 2024.",
        resources: "Ресурсы",
        community: "Сообщество",
        about: "О нас",
        urls: {
          telegram: "https://t.me/adaptationmodule",
          instagram: "https://www.instagram.com/adam.turan_/",
          whatsapp: "https://wa.me/77077888677",
          web: "https://google.com",
        },
        links1: [
          "Гид по жилью",
          "Культура и жизнь",
          "Здравоохранение",
          "События",
        ],
        links2: ["Telegram", "Instagram", "WhatsApp", "Контакты"],
        links3: ["Наша миссия", "Наша команда", "FAQ"],
        rights: "Все права защищены.",
        made: "Сделано с",
        in: "в Казахстане",
      },
      languages: { en: "Английский", ru: "Русский", kk: "Казахский" },
    },
  },
  kk: {
    translation: {
      navbar: {
        links: [
          "Басты бет",
          "Біз туралы",
          "Тұрғын үй",
          "Мәдениет",
          "Денсаулық",
          "Іс-шаралар",
          "Қауымдастық",
          "Байланыс",
        ],
        join: "Қауымдастыққа қосылу",
      },
      hero: {
        badge: "Қазақстандағы студенттік бастама",
        title: "Қош келдіңіз",
        subtitle: "Қазақстандағы бейімделу нұсқаулығыңыз",
        description:
          "Қазақстандағы студенттік өмірге бейімделуге көмектесеміз: тұрғын үй, мәдениет, денсаулық, іс-шаралар және қауымдастық.",
        join: "Қауымдастыққа қосылу",
        explore: "Ресурстарды көру",
        stats: ["Қолдау алған студент", "Тіл", "Өткен іс-шара"],
      },
      about: {
        badge: "Біз туралы",
        title: "Біз кімбіз",
        description:
          "ADAM - Қазақстандағы өмірге бейімделуді жеңілдететін студенттік бастама.",
        missionTitle: "Біздің миссия",
        mission:
          "Әр студент өзін үйдегідей сезінетін қолдаушы қауымдастық құру.",
        visionTitle: "Біздің көзқарас",
        vision:
          "Әр студентке табысқа жету үшін ресурстар қолжетімді болатын Қазақстан.",
        helpTitle: "Кімге көмектесеміз",
        helpItems: [
          {
            title: "Шетелдік студенттер",
            desc: "Елге жаңадан келген және ақпарат, қолдау мен бейімделуге көмек іздеп жүрген жастар.",
          },
          {
            title: "Өзге өңір студенттері",
            desc: "Тұрғын үй, медицина және жаңа қаладағы өмірге қатысты көмек қажет ететін Қазақстанның басқа өңірлерінен келген студенттер.",
          },
          {
            title: "Жергілікті студенттер",
            desc: "Шетелдік студенттермен танысқысы келетін, іс-шараларға қатысып, қоғамдастықтың жаңа мүшелеріне көмектескісі келетін жастар.",
          },
          {
            title: "Қоғамдастық іздеп жүрген барлық студенттер",
            desc: "Достар табу, тәжірибе бөлісу және өзіңді студенттік ортаның бір бөлігі ретінде сезіну.",
          },
        ],
      },
      housing: {
        badge: "Тұрғын үй",
        title: "Өз үйіңізді табыңыз",
        title2: "Қазақстанда",
        description:
          "Тұрғын үй табу - жайлы студенттік өмірдің алғашқы қадамы.",
        items: [
          {
            title: "Жалға алу нұсқаулығы",
            desc: "Орташа жалдау бағасы қалаға қарай 80 000-200 000 тг/ай.",
          },
          {
            title: "Жатақхана туралы",
            desc: "Көп ЖОО 15 000-40 000 тг/ай аралығында жатақхана ұсынады.",
          },
          {
            title: "Шетелдіктерге кеңес",
            desc: "Келісімшарт жасаңыз және көлікке жақын ауданды таңдаңыз.",
          },
        ],
        cta: "Тұрғын үй нұсқаулығын жүктеу",
        value: "Ең тиімді",
        valueText: "Жатақхана орындары",
      },
      culture: {
        badge: "Мәдениет және өмір",
        title: "Қазақстанды таныңыз",
        description: "Бай мәдениет пен дәстүрге терең үңіліңіз.",
        imageTitle: "Ұлы дала",
        imageSubtitle: "Қазақстанның көшпелі мұрасы",
        tabs: [
          {
            label: "Дәстүр",
            title: "Қазақ дәстүрлері",
            content:
              "Қазақстанның көшпелі мұрасы бай, қонақжайлық жоғары бағаланады.",
            highlight: "Наурыз - көктем мерекесі (21-23 наурыз)",
          },
          {
            label: "Тағам",
            title: "Қазақ асханасы",
            content:
              "Қазақ асханасы ет (бешбармақ, қазы, қуырдақ), қамыр (бауырсақ, шелпек) және сүт өнімдеріне (қымыз, құрт) негізделген. Ол жоғары құнарлылығымен және қонақжайлылыққа бағытталған ерекше салт-дәстүрлерімен ерекшеленеді.",
            highlight: "Міндетті: бесбармақ пен манты",
          },
          {
            label: "Көлік",
            title: "Қалай жүруге болады",
            content: "Автобус, метро және такси қосымшалары қолжетімді.",
            highlight: "Yandex Go жүктеңіз",
          },
          {
            label: "Күнделікті өмір",
            title: "Қазақстандағы күнделікті өмір",
            content:
              "Көп қызметке жергілікті нөмір керек, төлемде Kaspi маңызды.",
            highlight: "Kaspi қосымшасын орнатыңыз",
          },
        ],
      },
      healthcare: {
        badge: "Денсаулық",
        title: "Денсаулығыңыз маңызды",
        description: "Денсаулық сақтау жүйесі туралы қысқаша ақпарат.",
        items: [
          {
            title: "Медициналық жүйе",
            desc: "Мемлекеттік және жеке медицина бар.",
          },
          {
            title: "Сақтандыру",
            desc: "Шетелдік студенттерге сақтандыру қажет.",
          },
          {
            title: "Жедел байланыстар",
            desc: "Жедел жәрдем: 103 | Полиция: 102 | Өрт: 101 | 112",
          },
          {
            title: "Маңызды ескертпелер",
            desc: "Студент билеті мен паспорт көшірмесін алып жүріңіз.",
          },
        ],
        emergency: "Шұғыл",
        call: "112-ге кез келген уақытта қоңырау шалыңыз",
        available: "Қазақстан бойынша 24/7 қолжетімді",
      },
      events: {
        badge: "Іс-шаралар",
        title: "Байланыс және мереке",
        description: "ADAM іс-шараларына қатысып, жаңа достар табыңыз.",
        countdownLabel: "Келесі іс-шара",
        register: "Тіркелу",
        upcomingTitle: "Алдағы іс-шаралар",
        pastTitle: "Өткен іс-шаралар",
        pads: ["Күн", "Сағ", "Мин", "Сек"],
        upcoming: [
          {
            tag: "Жақында",
            title: "Welcome Week Spring 2026",
            desc: "Студенттермен танысу және кампус ресурстары.",
            date: "15 наурыз 2026",
            time: "10:00",
            location: "Университеттің бас залы",
          },
          {
            tag: "Арнайы",
            title: "Наурыз мерекесі",
            desc: "Дәстүрлі тағам, музыка және ойындар.",
            date: "22 наурыз 2026",
            time: "12:00",
            location: "Орталық саябақ, Астана",
          },
          {
            tag: "Воркшоп",
            title: "Тұрғын үй воркшопы",
            desc: "Қолжетімді тұрғын үй табу жолдары.",
            date: "5 сәуір 2026",
            time: "15:00",
            location: "Student Center, 204",
          },
        ],
        past: [
          "Мәдени кеш 2025",
          "Халықаралық тағам фестивалі",
          "Студенттік нетворкинг",
        ],
      },
      community: {
        badge: "Қауымдастық",
        title: "Өсіп жатқан қауымдастыққа қосылыңыз",
        description:
          "Басқа студенттермен араласыңыз, тәжірибе бөлісіңіз және кез келген жағдайда қолдау алыңыз. байланысып, жедел қолдау алыңыз.",
        tgTitle: "Telegram қауымдастығы",
        tgDesc:
          "Telegram-нан Қазақстандағы өмір туралы барлық қажетті ақпаратты таба аласыз: мәдениет пен салт-дәстүрден бастап, медицина және тұрғылықты жер мәселелеріне дейін.",
        tgCta: "Telegram тобына қосылу",
        tgCta2: "Telegram ботына хабарлама жіберу",
        tgLink: "https://t.me/adaptationmodule",
        tgLink2: "https://t.me/emergencycaller_bot",
        testimonialsTitle: "Студенттер пікірі",
        testimonials: [
          {
            from: "Түркиядан",
            text: "Oi-Qaragai-ға сапар мен үшін қала қарбаласынан демалудың тамаша мүмкіндігі болды. Әсем табиғат, таза ауа және достық атмосфера бұл демалысты ұмытылмастай етті. Ол жерде мен жергілікті студенттермен таныстым, қазір біз жақсы араласамыз, университетте де байланыстамыз, тіпті олардың бірі маған бейімделуге көмектесіп жүр.",
          },
          {
            from: "Египеттен",
            text: "Telegram-қоғамдастығы мен үшін жаңа елдегі сенімді тірегіме айналды. Бұл жерде мен Қазақстандағы өмір туралы пайдалы ақпарат алып қана қоймай, араласуға жағымды әрі ортақ тіл табысатын адамдарды таптым. Осы чаттың арқасында бейімделу кезеңі әлдеқайда жылдам өтті және мен өзімді студенттік ортаның бір бөлігі ретінде сезіндім.",
          },
          {
            from: "Қытайдан",
            text: "Этно-ауылдағы Наурыз мерекесіне бару мен үшін ұмытылмас әсер қалдырды. Біз дәстүрлі салт-жоралғыларды көріп, қымыз бен бауырсақтан дәм таттық, сондай-ақ атқа міндік. Бұл шара Қазақстан мәдениетіне тереңірек бойлауға және елді басқа қырынан тануға көмектесті.",
          },
        ],
      },
      faq: {
        badge: "FAQ",
        title: "Жиі қойылатын сұрақтар",
        description: "ADAM туралы білуге керек ақпарат.",
      },
      contact: {
        badge: "Бізбен байланыс",
        title: "Хабарласыңыз",
        description: "Сұрағыңыз бар ма? Біз көмектесеміз.",
        sent: "Хабарлама жіберілді!",
        sentText: "Рақмет! 24 сағат ішінде жауап береміз.",
        sendAnother: "Тағы хабарлама жіберу",
        yourName: "Атыңыз",
        email: "Email",
        message: "Хабарлама",
        send: "Хабарлама жіберу",
      },
      footer: {
        description:
          "Adaptation Module - 2024 жылдан бері студенттерге Қазақстанда өз үйіндей сезінуге көмектесеміз.",
        resources: "Ресурстар",
        community: "Қауымдастық",
        about: "Біз туралы",
        urls: {
          telegram: "https://t.me/adaptationmodule",
          instagram: "https://www.instagram.com/adam.turan_/",
          whatsapp: "https://wa.me/77077888677",
          web: "https://google.com",
        },
        links1: [
          "Тұрғын үй нұсқаулығы",
          "Мәдениет және өмір",
          "Денсаулық",
          "Іс-шаралар",
        ],
        links2: ["Telegram", "Instagram", "WhatsApp", "Байланыс"],
        links3: ["Миссиямыз", "Командамыз", "FAQ"],
        rights: "Барлық құқықтар қорғалған.",
        made: "Махаббатпен жасалды",
        in: "Қазақстанда",
      },
      languages: { en: "Ағылшын", ru: "Орыс", kk: "Қазақ" },
    },
  },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    // Keep SSR and first client render deterministic to avoid hydration mismatch.
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
}

export default i18n;
