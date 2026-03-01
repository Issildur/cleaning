const _fmt = n => String(n).replace('.', ',');

const TRANSLATIONS = {

  // ── POLISH (default) ──────────────────────────────────────────────────────
  "pl": {
    "meta": {
      "title": "Urban Clean Warszawa | Sprzątanie mieszkań i pranie tapicerki",
      "description": "Profesjonalne sprzątanie mieszkań i pranie tapicerki w Warszawie. Kanapy, materace, dywany, fotele. Dojazd do klienta. Zadzwoń!"
    },
    "nav": {
      "ariaLabel": "Główna nawigacja",
      "home": "Strona główna",
      "services": "Usługi",
      "prices": "Cennik",
      "beforeAfter": "Przed/Po",
      "faq": "FAQ",
      "openMenu": "Otwórz menu"
    },
    "hero": {
      "pill": "Dojazd do klienta • Bezpieczne środki • Szybkie schnięcie",
      "h1": "Sprzątanie mieszkań i pranie tapicerki w Warszawie",
      "lead": "Kanapy, materace, dywany, fotele i kompleksowe sprzątanie Twojego domu. Umów się w 1 minutę — przyjedziemy do Ciebie.",
      "callBtn": "Zadzwoń",
      "beforeLabel": "Przed",
      "afterLabel": "Po",
      "beforeAlt": "Przed czyszczeniem",
      "afterAlt": "Po czyszczeniu"
    },
    "services": {
      "title": "Usługi",
      "subtitle": "Profesjonalne sprzątanie i pranie tapicerki z dojazdem do klienta w Warszawie",
      "items": [
        {
          "title": "Sprzątanie bieżące",
          "text": "Regularne utrzymanie czystości: kurz, podłogi, łazienka, wynoszenie śmieci.",
          "price": `od ${PRICES.regularCleaning} PLN`
        },
        {
          "title": "Generalne sprzątanie",
          "text": "Gruntowne czyszczenie całego mieszkania, w tym sprzętu AGD i trudno dostępnych miejsc.",
          "price": `od ${PRICES.deepCleaning} PLN`
        },
        {
          "title": "Po remoncie",
          "text": "Usuwanie pyłu budowlanego i zanieczyszczeń po pracach remontowych lub budowlanych.",
          "price": `od ${_fmt(PRICES.afterRenovation)} PLN / m²`
        },
        {
          "title": "Pranie tapicerki",
          "text": "Kanapy, materace, dywany, fotele i krzesła. Profesjonalny sprzęt.",
          "price": `od ${PRICES.chair} PLN`
        }
      ]
    },
    "howItWorks": {
      "title": "Jak pracujemy",
      "steps": [
        {
          "title": "Skontaktuj się z nami",
          "text": "Zadzwoń lub napisz. W razie potrzeby prześlij zdjęcie."
        },
        {
          "title": "Przyjedziemy do Ciebie",
          "text": "Dojazd do klienta z profesjonalnym sprzętem i bezpiecznymi środkami."
        },
        {
          "title": "Czystość gotowa",
          "text": "Gruntowne czyszczenie i świeży zapach. Czas schnięcia zależy od tkaniny i wentylacji."
        }
      ]
    },
    "prices": {
      "title": "Cennik",
      "cleaningTitle": "Sprzątanie mieszkań i domów",
      "whatIncluded": "Co wchodzi w skład",
      "cleaning": [
        {
          "title": "Sprzątanie bieżące",
          "value": `od ${PRICES.regularCleaning} PLN`,
          "items": [
            "Usuwanie kurzu z dostępnych miejsc (półki, ramki, gniazdka, listwy, sprzęt, meble)",
            "Czyszczenie szklanych i lustrzanych powierzchni",
            "Odkurzanie wszystkich dostępnych powierzchni",
            "Mycie podłóg",
            "Mycie łazienki (wanna lub prysznic, toaleta, bidet, umywalka)",
            "Czyszczenie szafek z zewnątrz",
            "Czyszczenie drzwi z kurzu i zabrudzeń",
            "Staranne składanie rzeczy",
            "Wynoszenie śmieci i zakładanie nowych worków"
          ]
        },
        {
          "title": "Generalne sprzątanie",
          "value": `od ${PRICES.deepCleaning} PLN`,
          "items": [
            "Usuwanie kurzu ze wszystkich dostępnych miejsc",
            "Odkurzanie, w tym pod łóżkiem, kanapą i szafą",
            "Mycie podłóg we wszystkich dostępnych miejscach",
            "Mycie łazienki, usuwanie pleśni i grzyba",
            "Mycie sprzętu AGD: lodówka, mikrofalówka, kuchenka, piekarnik, okap",
            "Czyszczenie drzwi i kaloryferów",
            "Składanie ubrań, słanie łóżka (przy dostępności czystej pościeli)",
            "1 pranie",
            "Pranie 1 kanapy i 1 dywanu",
            "Wynoszenie śmieci i zakładanie nowych worków"
          ],
          "note": "Poszczególne punkty można wyłączyć na życzenie klienta. Cena pozostaje stała."
        },
        {
          "title": "Po remoncie",
          "value": `${_fmt(PRICES.afterRenovation)} PLN / m²`,
          "desc": "Usuwanie pyłu budowlanego, czyszczenie wszystkich dostępnych powierzchni, podłóg, łazienki i kuchni.",
          "note": "Ostateczna cena zależy od powierzchni i stopnia zabrudzenia."
        }
      ],
      "furnitureTitle": "Pranie tapicerki i tekstyliów",
      "furniture": [
        {
          "title": "Kanapy",
          "items": [
            { "label": "2-osobowa",   "price": `${PRICES.sofa2} PLN` },
            { "label": "3-osobowa",   "price": `${PRICES.sofa3} PLN` },
            { "label": "4-osobowa",   "price": `${PRICES.sofa4} PLN` },
            { "label": "5–6-osobowa", "price": `od ${PRICES.sofa56} PLN` }
          ]
        },
        {
          "title": "Materace",
          "sub": "jedna strona",
          "items": [
            { "label": "Jednoosobowy", "price": `${PRICES.mattressSingle} PLN` },
            { "label": "Dwuosobowy",   "price": `${PRICES.mattressDouble} PLN` }
          ]
        },
        {
          "title": "Dywany",
          "items": [
            { "label": "Dywan",      "price": `${PRICES.carpet} PLN / m²` },
            { "label": "Wykładzina", "price": `${PRICES.carpeting} PLN / m²` }
          ]
        },
        {
          "title": "Inne meble",
          "items": [
            { "label": "Fotel",   "price": `${PRICES.armchair} PLN` },
            { "label": "Krzesło", "price": `${PRICES.chair} PLN` }
          ]
        }
      ]
    },
    "beforeAfter": {
      "title": "Przed / Po",
      "subtitle": "Rzeczywiste efekty naszej pracy.",
      "beforeLabel": "Przed",
      "afterLabel": "Po",
      "beforeAlt": "Przed czyszczeniem",
      "afterAlt": "Po czyszczeniu"
    },
    "info": {
      "title": "Ważne informacje",
      "items": [
        "Pracujemy profesjonalnym sprzętem",
        "Używamy bezpiecznych i skutecznych środków czyszczących",
        "Ciężkich mebli nie przestawiamy",
        "Nie pracujemy z materiałami naturalnymi",
        "Ostateczna cena może zależeć od stopnia zabrudzenia i powierzchni"
      ]
    },
    "faq": {
      "title": "Często zadawane pytania",
      "items": [
        {
          "q": "Ile czasu zajmuje sprzątanie?",
          "a": "Zależy od zakresu prac i stopnia zabrudzenia. Sprzątanie bieżące — zazwyczaj 2–3 godziny, generalne — od 4 godzin."
        },
        {
          "q": "Czy jest to bezpieczne dla dzieci i zwierząt?",
          "a": "Tak — używamy profesjonalnych środków, które są bezpieczne po całkowitym wyschnięciu."
        },
        {
          "q": "Jak długo schnie tapicerka po praniu?",
          "a": "Zazwyczaj kilka godzin. Zależy od tkaniny i wentylacji pomieszczenia."
        },
        {
          "q": "Czy trzeba coś przygotować wcześniej?",
          "a": "Wystarczy zabrać drobne wartościowe przedmioty. Resztą zajmiemy się sami."
        },
        {
          "q": "Jak obliczyć koszt sprzątania?",
          "a": "Skontaktuj się z nami w dowolny wygodny sposób — wycenimy indywidualnie w zależności od powierzchni, rodzaju sprzątania i stopnia zabrudzenia."
        }
      ]
    },
    "contact": {
      "title": "Umów się / Skontaktuj",
      "subtitle": "W celu wyceny i umówienia się skontaktuj się z nami w dowolny wygodny sposób."
    },
    "footer": {
      "brand": "Urban Clean Warszawa",
      "backToTop": "Na górę ↑"
    }
  },

  // ── UKRAINIAN ─────────────────────────────────────────────────────────────
  "uk": {
    "meta": {
      "title": "Хімчистка Варшава | Прибирання квартир та хімчистка меблів",
      "description": "Професійне прибирання квартир та хімчистка меблів у Варшаві. Дивани, матраци, килими, крісла. Виїзд на дім. Телефонуйте!"
    },
    "nav": {
      "ariaLabel": "Основна навігація",
      "home": "На головну",
      "services": "Послуги",
      "prices": "Ціни",
      "beforeAfter": "До/Після",
      "faq": "FAQ",
      "openMenu": "Відкрити меню"
    },
    "hero": {
      "pill": "Виїзд на дім • Безпечні засоби • Швидке висихання",
      "h1": "Прибирання квартир та хімчистка меблів у Варшаві",
      "lead": "Дивани, матраци, килими, крісла та повний клінінг вашого дому. Запишіться за 1 хвилину — приїдемо до вас.",
      "callBtn": "Зателефонувати",
      "beforeLabel": "До",
      "afterLabel": "Після",
      "beforeAlt": "До чистки",
      "afterAlt": "Після чистки"
    },
    "services": {
      "title": "Послуги",
      "subtitle": "Професійне прибирання та хімчистка з виїздом на дім у Варшаві",
      "items": [
        {
          "title": "Підтримуюче прибирання",
          "text": "Регулярне підтримання чистоти: пил, підлоги, сантехніка, вивіз сміття.",
          "price": `від ${PRICES.regularCleaning} PLN`
        },
        {
          "title": "Генеральне прибирання",
          "text": "Глибоке очищення всього приміщення, включно з побутовою технікою та важкодоступними місцями.",
          "price": `від ${PRICES.deepCleaning} PLN`
        },
        {
          "title": "Після ремонту",
          "text": "Видалення будівельного пилу та забруднень після ремонтних або будівельних робіт.",
          "price": `від ${_fmt(PRICES.afterRenovation)} PLN / м²`
        },
        {
          "title": "Хімчистка меблів",
          "text": "Дивани, матраци, килими, крісла та стільці. Професійне обладнання.",
          "price": `від ${PRICES.chair} PLN`
        }
      ]
    },
    "howItWorks": {
      "title": "Як ми працюємо",
      "steps": [
        {
          "title": "Зв'яжіться з нами",
          "text": "Зателефонуйте або напишіть. За потреби надішліть фото."
        },
        {
          "title": "Ми приїдемо до вас",
          "text": "Виїзд на дім з професійним обладнанням та безпечними засобами."
        },
        {
          "title": "Чистота готова",
          "text": "Глибоке чищення та свіжий запах. Час висихання залежить від тканини та вентиляції."
        }
      ]
    },
    "prices": {
      "title": "Ціни",
      "cleaningTitle": "Прибирання квартир та будинків",
      "whatIncluded": "Що входить",
      "cleaning": [
        {
          "title": "Підтримуюче прибирання",
          "value": `від ${PRICES.regularCleaning} PLN`,
          "items": [
            "Видалення пилу в доступних місцях (полиці, рамки, розетки, плінтуси, техніка, меблі)",
            "Очищення скляних та дзеркальних поверхонь",
            "Пилосос усіх доступних поверхонь",
            "Миття підлоги",
            "Миття сантехніки (ванна або душ, унітаз, біде, раковина)",
            "Очищення шафок із зовнішньої сторони",
            "Очищення дверей від пилу та забруднень",
            "Акуратне складання речей",
            "Вивіз сміття та встановлення нових мішків"
          ]
        },
        {
          "title": "Генеральне прибирання",
          "value": `від ${PRICES.deepCleaning} PLN`,
          "items": [
            "Видалення пилу в усіх доступних місцях",
            "Пилосос, включно з-під ліжка, дивана та шафи",
            "Миття підлоги в усіх доступних місцях",
            "Миття сантехніки, видалення цвілі та грибка",
            "Миття кухонної техніки: холодильник, мікрохвильова, плита, духовка, витяжка",
            "Очищення дверей та батарей",
            "Складання речей, застилання ліжка (за наявності чистої білизни)",
            "1 прання",
            "Хімчистка 1 дивана та 1 килима",
            "Вивіз сміття та встановлення нових мішків"
          ],
          "note": "Окремі пункти можна виключити за бажанням. Вартість залишається фіксованою."
        },
        {
          "title": "Після ремонту",
          "value": `${_fmt(PRICES.afterRenovation)} PLN / м²`,
          "desc": "Видалення будівельного пилу, очищення всіх доступних поверхонь, підлоги, сантехніки та кухні.",
          "note": "Підсумкова вартість залежить від площі та ступеня забруднення."
        }
      ],
      "furnitureTitle": "Хімчистка меблів та текстилю",
      "furniture": [
        {
          "title": "Дивани",
          "items": [
            { "label": "2-місний",   "price": `${PRICES.sofa2} PLN` },
            { "label": "3-місний",   "price": `${PRICES.sofa3} PLN` },
            { "label": "4-місний",   "price": `${PRICES.sofa4} PLN` },
            { "label": "5–6-місний", "price": `від ${PRICES.sofa56} PLN` }
          ]
        },
        {
          "title": "Матраци",
          "sub": "один бік",
          "items": [
            { "label": "Односпальний", "price": `${PRICES.mattressSingle} PLN` },
            { "label": "Двоспальний",  "price": `${PRICES.mattressDouble} PLN` }
          ]
        },
        {
          "title": "Килими",
          "items": [
            { "label": "Килим",             "price": `${PRICES.carpet} PLN / м²` },
            { "label": "Килимове покриття", "price": `${PRICES.carpeting} PLN / м²` }
          ]
        },
        {
          "title": "Інші меблі",
          "items": [
            { "label": "Крісло",  "price": `${PRICES.armchair} PLN` },
            { "label": "Стілець", "price": `${PRICES.chair} PLN` }
          ]
        }
      ]
    },
    "beforeAfter": {
      "title": "До / Після",
      "subtitle": "Реальні результати нашої роботи.",
      "beforeLabel": "До",
      "afterLabel": "Після",
      "beforeAlt": "До чистки",
      "afterAlt": "Після чистки"
    },
    "info": {
      "title": "Важлива інформація",
      "items": [
        "Працюємо з професійним обладнанням",
        "Використовуємо безпечні та ефективні чистячі засоби",
        "Важкі меблі не переміщуємо",
        "З натуральними матеріалами не працюємо",
        "Підсумкова вартість може залежати від ступеня забруднення та площі"
      ]
    },
    "faq": {
      "title": "Часті запитання",
      "items": [
        {
          "q": "Скільки часу займає прибирання?",
          "a": "Залежить від обсягу робіт та ступеня забруднення. Підтримуюче прибирання — зазвичай 2–3 години, генеральне — від 4 годин."
        },
        {
          "q": "Чи безпечно це для дітей та домашніх тварин?",
          "a": "Так — ми використовуємо професійні засоби, які безпечні після повного висихання."
        },
        {
          "q": "Скільки сохнуть меблі після хімчистки?",
          "a": "Зазвичай кілька годин. Залежить від тканини та вентиляції приміщення."
        },
        {
          "q": "Чи потрібно щось підготувати заздалегідь?",
          "a": "Достатньо прибрати дрібні цінні речі. Все інше ми зробимо самі."
        },
        {
          "q": "Як розрахувати вартість прибирання?",
          "a": "Зв'яжіться з нами будь-яким зручним способом — розрахуємо вартість індивідуально залежно від площі, типу прибирання та ступеня забруднення."
        }
      ]
    },
    "contact": {
      "title": "Записатися / Зв'язатися",
      "subtitle": "Для розрахунку вартості та запису зв'яжіться з нами будь-яким зручним способом."
    },
    "footer": {
      "brand": "Хімчистка Варшава",
      "backToTop": "Вгору ↑"
    }
  },

  // ── RUSSIAN ───────────────────────────────────────────────────────────────
  "ru": {
    "meta": {
      "title": "Химчистка Варшава | Уборка квартир и химчистка мебели",
      "description": "Профессиональная уборка квартир и химчистка мебели в Варшаве. Диваны, матрасы, ковры, кресла. Выезд на дом. Звоните!"
    },
    "nav": {
      "ariaLabel": "Основная навигация",
      "home": "На главную",
      "services": "Услуги",
      "prices": "Цены",
      "beforeAfter": "До/После",
      "faq": "FAQ",
      "openMenu": "Открыть меню"
    },
    "hero": {
      "pill": "Выезд на дом • Безопасные средства • Быстрое высыхание",
      "h1": "Уборка квартир и химчистка мебели в Варшаве",
      "lead": "Диваны, матрасы, ковры, кресла и полный клининг вашего дома. Запишитесь за 1 минуту — приедем к вам.",
      "callBtn": "Позвонить",
      "beforeLabel": "До",
      "afterLabel": "После",
      "beforeAlt": "До чистки",
      "afterAlt": "После чистки"
    },
    "services": {
      "title": "Услуги",
      "subtitle": "Профессиональная уборка и химчистка с выездом на дом в Варшаве",
      "items": [
        {
          "title": "Поддерживающая уборка",
          "text": "Регулярное поддержание чистоты: пыль, полы, сантехника, вынос мусора.",
          "price": `от ${PRICES.regularCleaning} PLN`
        },
        {
          "title": "Генеральная уборка",
          "text": "Глубокая очистка всего помещения, включая бытовую технику и труднодоступные места.",
          "price": `от ${PRICES.deepCleaning} PLN`
        },
        {
          "title": "После ремонта",
          "text": "Удаление строительной пыли и загрязнений после ремонтных или строительных работ.",
          "price": `от ${_fmt(PRICES.afterRenovation)} PLN / м²`
        },
        {
          "title": "Химчистка мебели",
          "text": "Диваны, матрасы, ковры, кресла и стулья. Профессиональное оборудование.",
          "price": `от ${PRICES.chair} PLN`
        }
      ]
    },
    "howItWorks": {
      "title": "Как мы работаем",
      "steps": [
        {
          "title": "Свяжитесь с нами",
          "text": "Позвоните или напишите. При необходимости пришлите фото."
        },
        {
          "title": "Мы приедем к вам",
          "text": "Выезд на дом с профессиональным оборудованием и безопасными средствами."
        },
        {
          "title": "Чистота готова",
          "text": "Глубокая чистка и свежий запах. Время высыхания зависит от ткани и вентиляции."
        }
      ]
    },
    "prices": {
      "title": "Цены",
      "cleaningTitle": "Уборка квартир и домов",
      "whatIncluded": "Что входит",
      "cleaning": [
        {
          "title": "Поддерживающая уборка",
          "value": `от ${PRICES.regularCleaning} PLN`,
          "items": [
            "Удаление пыли в доступных местах (полки, рамки, розетки, плинтусы, техника, мебель)",
            "Очистка стеклянных и зеркальных поверхностей",
            "Пылесос всех доступных поверхностей",
            "Мытьё пола",
            "Мытьё сантехники (ванна или душ, унитаз, биде, раковина)",
            "Очистка шкафчиков с внешней стороны",
            "Очистка дверей от пыли и загрязнений",
            "Аккуратное складывание вещей",
            "Вынос мусора и установка новых мешков"
          ]
        },
        {
          "title": "Генеральная уборка",
          "value": `от ${PRICES.deepCleaning} PLN`,
          "items": [
            "Удаление пыли во всех доступных местах",
            "Пылесос, включая под кроватью, диваном и шкафом",
            "Мытьё пола во всех доступных местах",
            "Мытьё сантехники, удаление плесени и грибка",
            "Мытьё кухонной техники: холодильник, микроволновка, плита, духовка, вытяжка",
            "Очистка дверей и батарей",
            "Складывание вещей, застилание постели (при наличии чистого белья)",
            "1 стирка",
            "Химчистка 1 дивана и 1 ковра",
            "Вынос мусора и установка новых мешков"
          ],
          "note": "Отдельные пункты можно исключить по желанию. Стоимость остаётся фиксированной."
        },
        {
          "title": "После ремонта",
          "value": `${_fmt(PRICES.afterRenovation)} PLN / м²`,
          "desc": "Удаление строительной пыли, очистка всех доступных поверхностей, пола, сантехники и кухни.",
          "note": "Итоговая стоимость зависит от площади и степени загрязнения."
        }
      ],
      "furnitureTitle": "Химчистка мебели и текстиля",
      "furniture": [
        {
          "title": "Диваны",
          "items": [
            { "label": "2-местный",   "price": `${PRICES.sofa2} PLN` },
            { "label": "3-местный",   "price": `${PRICES.sofa3} PLN` },
            { "label": "4-местный",   "price": `${PRICES.sofa4} PLN` },
            { "label": "5–6-местный", "price": `от ${PRICES.sofa56} PLN` }
          ]
        },
        {
          "title": "Матрасы",
          "sub": "одна сторона",
          "items": [
            { "label": "Односпальный", "price": `${PRICES.mattressSingle} PLN` },
            { "label": "Двуспальный",  "price": `${PRICES.mattressDouble} PLN` }
          ]
        },
        {
          "title": "Ковры",
          "items": [
            { "label": "Ковёр",    "price": `${PRICES.carpet} PLN / м²` },
            { "label": "Ковролин", "price": `${PRICES.carpeting} PLN / м²` }
          ]
        },
        {
          "title": "Другая мебель",
          "items": [
            { "label": "Кресло", "price": `${PRICES.armchair} PLN` },
            { "label": "Стул",   "price": `${PRICES.chair} PLN` }
          ]
        }
      ]
    },
    "beforeAfter": {
      "title": "До / После",
      "subtitle": "Реальные результаты нашей работы.",
      "beforeLabel": "До",
      "afterLabel": "После",
      "beforeAlt": "До чистки",
      "afterAlt": "После чистки"
    },
    "info": {
      "title": "Важная информация",
      "items": [
        "Работаем с профессиональным оборудованием",
        "Используем безопасные и эффективные чистящие средства",
        "Тяжёлая мебель не перемещается",
        "С натуральными материалами не работаем",
        "Итоговая стоимость может зависеть от степени загрязнения и площади"
      ]
    },
    "faq": {
      "title": "Частые вопросы",
      "items": [
        {
          "q": "Сколько времени занимает уборка?",
          "a": "Зависит от объёма работ и степени загрязнения. Поддерживающая уборка — обычно 2–3 часа, генеральная — от 4 часов."
        },
        {
          "q": "Безопасно ли это для детей и домашних животных?",
          "a": "Да — мы используем профессиональные средства, которые безопасны после полного высыхания."
        },
        {
          "q": "Сколько сохнет мебель после химчистки?",
          "a": "Обычно несколько часов. Зависит от ткани и вентиляции помещения."
        },
        {
          "q": "Нужно ли что-то подготавливать заранее?",
          "a": "Достаточно убрать мелкие ценные предметы. Всё остальное мы сделаем сами."
        },
        {
          "q": "Как рассчитать стоимость уборки?",
          "a": "Свяжитесь с нами любым удобным способом — рассчитаем стоимость индивидуально в зависимости от площади, типа уборки и степени загрязнения."
        }
      ]
    },
    "contact": {
      "title": "Записаться / Связаться",
      "subtitle": "Для расчёта стоимости и записи свяжитесь с нами любым удобным способом."
    },
    "footer": {
      "brand": "Химчистка Варшава",
      "backToTop": "Наверх ↑"
    }
  }

};
