const publicBase = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default {
  "basePath": publicBase,
  "template": {
    "specialty": "nails",
    "bookingProvider": "DIKIDI",
    "reviewSource": "Яндекс Карты"
  },
  "brand": {
    "name": "Ланге Татьяна",
    "subtitle": "Мастер маникюра и педикюра",
    "monogram": "ТЛ"
  },
  "master": {
    "name": "Татьяна",
    "dative": "Татьяне",
    "genitive": "Татьяны",
    "instrumental": "Татьяной",
    "monogram": "ТЛ",
    "profession": "мастер маникюра и педикюра",
    "heroTitle": "",
    "heroEmphasis": "эксперт по маникюру и педикюру",
    "heroCaption": "Мастер маникюра и педикюра",
    "imageAlt": "мастер маникюра и педикюра",
    "heroCopy": "Маникюр, педикюр и уход за ногтями с вниманием к аккуратности, форме и качеству результата.",
    "visitMotto": "",
    "experienceYears": null,
    "experienceAria": "",
    "aboutTitle": "Ланге Татьяна",
    "aboutLead": "",
    "aboutParagraphs": [],
    "skills": []
  },
  "location": {
    "country": "Россия",
    "countryCode": "RU",
    "city": "Москва",
    "metro": "",
    "cityMetro": "Москва",
    "address": "Мясницкая улица, 30/1/2с1, этаж 3, офис 7",
    "mapCardAddress": "Мясницкая улица, 30/1/2с1, этаж 3, офис 7",
    "schedule": "Ежедневно 10:00–22:00",
    "scheduleCapitalized": "Ежедневно 10:00–22:00",
    "timeZone": "Europe/Moscow",
    "openTime": "10:00",
    "closeTime": "22:00"
  },
  "contacts": {
    "phoneDisplay": "+7 (924) 277-55-79",
    "phoneHref": "tel:+79242775579",
    "channels": [
      {
        "type": "whatsapp",
        "label": "WhatsApp",
        "url": "https://wa.me/79242775579"
      },
      {
        "type": "telegram",
        "label": "Telegram",
        "url": "https://t.me/+79242775579"
      },
      {
        "type": "vk",
        "label": "VK",
        "url": "https://vk.ru/tatyana.lange"
      }
    ],
    "messenger": null
  },
  "links": {
    "bookingUrl": "https://dikidi.net/835530",
    "reviewsUrl": "https://yandex.com/maps/org/manicure_by_tatyana_lange/182382241533/",
    "mapUrl": "https://yandex.com/maps/org/manicure_by_tatyana_lange/182382241533/",
    "routeUrl": "https://yandex.com/maps/org/manicure_by_tatyana_lange/182382241533/",
    "mobileMapEmbedUrl": "about:blank",
    "desktopMapEmbedUrl": "about:blank",
    "yandexMapHrefMatch": "182382241533"
  },
  "reputation": {
    "rating": "5.0",
    "reviewCount": "43"
  },
  "images": {
    "logo": "",
    "portrait": `${publicBase}/masterpc.webp`,
    "portraitDesktop": `${publicBase}/masterpc.webp`,
    "about": `${publicBase}/master.webp`,
    "favicon": `${publicBase}/favicon-source.png`,
    "heroDecoration": `${publicBase}/assets/template/hair-tools.png`,
    "beforeAfter": [],
    "gallery": [
      { "src": `${publicBase}/galery00001.webp`, "alt": "Работа Татьяны — 1" },
      { "src": `${publicBase}/galery00002.webp`, "alt": "Работа Татьяны — 2" },
      { "src": `${publicBase}/galery00003.webp`, "alt": "Работа Татьяны — 3" },
      { "src": `${publicBase}/galery00004.webp`, "alt": "Работа Татьяны — 4" },
      { "src": `${publicBase}/galery00005.webp`, "alt": "Работа Татьяны — 5" },
      { "src": `${publicBase}/galery00006.webp`, "alt": "Работа Татьяны — 6" },
      { "src": `${publicBase}/galery00007.webp`, "alt": "Работа Татьяны — 7" },
      { "src": `${publicBase}/galery00008.webp`, "alt": "Работа Татьяны — 8" },
      { "src": `${publicBase}/galery00009.webp`, "alt": "Работа Татьяны — 9" }
    ]
  },
  "services": {
    "groups": [
      {
        "id": "extensions",
        "label": "Наращивание ногтей",
        "services": [
          {
            "name": "Наращивание ногтей. Длина от 3 до 4.",
            "price": "4 800 ₽",
            "time": "3 ч 15 м",
            "description": "",
            "url": ""
          },
          {
            "name": "Наращивание ногтей. Камуфляж. Длина до 3.",
            "price": "4 000 ₽",
            "time": "3 ч",
            "description": "",
            "url": ""
          },
          {
            "name": "Наращивание ногтей. Типсы. Временно нет услуги!!!",
            "price": "от 4 000 ₽",
            "time": "3 ч",
            "description": "",
            "url": ""
          },
          {
            "name": "Наращивание ногтей. Френч. Длина до 3.",
            "price": "4 500 ₽",
            "time": "3 ч 15 м",
            "description": "",
            "url": ""
          }
        ]
      },
      {
        "id": "manicure",
        "label": "Маникюр",
        "services": [
          {
            "name": "Маникюр аппаратный",
            "price": "1 600 ₽",
            "time": "45 м",
            "description": "",
            "url": ""
          },
          {
            "name": "Маникюр комбинированный",
            "price": "1 000 ₽",
            "time": "35 м",
            "description": "",
            "url": ""
          },
          {
            "name": "Маникюр бразильский",
            "price": "1 400 ₽",
            "time": "35 м",
            "description": "",
            "url": ""
          }
        ]
      },
      {
        "id": "gradient",
        "label": "Градиент",
        "services": [
          {
            "name": "Градиент гель лаками. Цена за 1 ноготь. Зависит от сложности сочетания оттенков.",
            "price": "от 80 ₽",
            "time": "1 ч",
            "description": "",
            "url": ""
          },
          {
            "name": "Градиент гелями, полигелями. Цена за 1 ноготь.",
            "price": "от 80 ₽",
            "time": "1 ч",
            "description": "",
            "url": ""
          }
        ]
      },
      {
        "id": "extension-correction",
        "label": "Коррекция наращенных ногтей",
        "services": [
          {
            "name": "Коррекция наращенных ногтей",
            "price": "от 3 500 ₽",
            "time": "2 ч 20 м",
            "description": "",
            "url": ""
          }
        ]
      },
      {
        "id": "manicure-coating",
        "label": "Маникюр с покрытием",
        "services": [
          {
            "name": "Маникюр с укреплением и покрытием. Длина до 2. Комплекс.",
            "price": "3 300 ₽",
            "time": "1 ч 50 м",
            "description": "",
            "url": ""
          },
          {
            "name": "Маникюр с укреплением и покрытием. Длина от 2 до 3. Комплекс.",
            "price": "3 600 ₽",
            "time": "2 ч 15 м",
            "description": "",
            "url": ""
          },
          {
            "name": "Маникюр с укреплением и покрытием. Длина от 3 до 4. Комплекс. Временно нет услуги!!!",
            "price": "4 000 ₽",
            "time": "2 ч 40 м",
            "description": "",
            "url": ""
          }
        ]
      },
      {
        "id": "mens-manicure",
        "label": "Мужской маникюр",
        "services": [
          {
            "name": "Мужской маникюр",
            "price": "2 000 ₽",
            "time": "35 м",
            "description": "",
            "url": ""
          },
          {
            "name": "Мужской маникюр с покрытием",
            "price": "3 500 ₽",
            "time": "1 ч 40 м",
            "description": "",
            "url": ""
          }
        ]
      },
      {
        "id": "pedicure",
        "label": "Педикюр",
        "services": [
          {
            "name": "Педикюр Голден Трейс. Golden Trace. Обработка стоп и пальцев без покрытия гель-лак. Временно нет услуги!!!",
            "price": "2 600 ₽",
            "time": "1 ч",
            "description": "",
            "url": ""
          },
          {
            "name": "Педикюр дисковый. Без покрытия .",
            "price": "2 800 ₽",
            "time": "1 ч",
            "description": "",
            "url": ""
          },
          {
            "name": "Педикюр. В процедуру входит обработка пальцев с покрытием гель-лак.",
            "price": "2 500 ₽",
            "time": "1 ч 10 м",
            "description": "",
            "url": ""
          },
          {
            "name": "Педикюр. В процедуру входит только гигиеническая обработка пальцев. Без покрытия.",
            "price": "1 700 ₽",
            "time": "30 м",
            "description": "",
            "url": ""
          },
          {
            "name": "Педикюр. Дисковый. Полная обработка стопы, пальцев. Покрытие ногтей гель -лак.",
            "price": "3 000 ₽",
            "time": "1 ч 50 м",
            "description": "",
            "url": ""
          },
          {
            "name": "Педикюр. Полный Голден Трейс.Golden Trace. С покрытием ногтей гель лак. Временно нет услуги!!!",
            "price": "3 300 ₽",
            "time": "2 ч",
            "description": "",
            "url": ""
          }
        ]
      },
      {
        "id": "lifting",
        "label": "Поднятие клюющих",
        "services": [
          {
            "name": "Поднятие клюющих",
            "price": "от 1 ₽",
            "time": "10 м",
            "description": "",
            "url": ""
          }
        ]
      },
      {
        "id": "repair",
        "label": "Ремонт ногтей",
        "services": [
          {
            "name": "Ремонт 1 ногтя 0 рублей при выполнении какого-либо комплекса. 150 рублей если более 1 ногтя.",
            "price": "1 ₽",
            "time": "10 м",
            "description": "",
            "url": ""
          }
        ]
      },
      {
        "id": "complex-cases",
        "label": "Сложные случаи в покрытии ногтей.",
        "services": [
          {
            "name": "«У меня ничего не держится!» Это для ВАС!",
            "price": "4 000 ₽",
            "time": "2 ч 15 м",
            "description": "",
            "url": ""
          }
        ]
      },
      {
        "id": "removal",
        "label": "Снятие покрытия",
        "services": [
          {
            "name": "Снятие покрытия",
            "price": "600 ₽",
            "time": "15 м",
            "description": "",
            "url": ""
          }
        ]
      },
      {
        "id": "strengthening",
        "label": "Укрепление ногтей",
        "services": [
          {
            "name": "Укрепление ногтей",
            "price": "1 ₽",
            "time": "10 м",
            "description": "",
            "url": ""
          }
        ]
      },
      {
        "id": "french",
        "label": "Французский маникюр",
        "services": [
          {
            "name": "Французский маникюр. Френч.",
            "price": "400 ₽",
            "time": "15 м",
            "description": "",
            "url": ""
          },
          {
            "name": "Френч двойной, цветной, обратный, фантазийный. Лунки, руффиан.",
            "price": "от 600 ₽",
            "time": "15 м",
            "description": "",
            "url": ""
          }
        ]
      }
    ]
  },
    "i18n": {
    "localLocale": "ru",
    "locales": [
      {
        "code": "ru",
        "label": "RU"
      },
      {
        "code": "en",
        "label": "EN"
      }
    ],
    "translations": {
      "en": {
        "мастер маникюра и педикюра": "manicure and pedicure specialist",
        "эксперт по маникюру и педикюру": "manicure and pedicure expert",
        "Мастер маникюра и педикюра": "Manicure and pedicure specialist",
        "Маникюр, педикюр и уход за ногтями с вниманием к аккуратности, форме и качеству результата.": "Manicure, pedicure and nail care with attention to precision, shape and quality.",
        "Выполняю маникюр и педикюр, наращивание и коррекцию ногтей.": "I provide manicure and pedicure, nail extensions and corrections.",
        "Работаю со стерильными инструментами и уделяю внимание аккуратности, форме и качеству результата.": "I work with sterile instruments and pay close attention to precision, shape and the quality of the result.",
        "Маникюр и педикюр": "Manicure and pedicure",
        "Наращивание и коррекция": "Extensions and corrections",
        "Стерильные инструменты": "Sterile instruments",
        "колорист и мастер по волосам": "colorist and hair specialist",
        "парикмахер-стилист": "hair stylist",
        "парикмахер-колорист": "hair colorist",
        "технолог-колорист": "hair technologist and colorist",
        "Колорист": "Colorist",
        "Парикмахер-стилист": "Hair stylist",
        "Парикмахер-колорист": "Hair colorist",
        "Технолог-колорист": "Hair technologist and colorist",
        "эксперт по волосам": "hair expert",
        "Стрижки, окрашивание, блонд, уход и укладки с вниманием к состоянию волос, оттенку и вашему образу.": "Haircuts, coloring, blonding, care and styling with attention to hair condition, tone and your look.",
        "Специализируюсь на стрижках и окрашивании, blond и сложных техниках, уходе и реконструкции волос.": "I specialize in haircuts and coloring, blond and complex techniques, hair care and reconstruction.",
        "Работаю с формой, цветом и состоянием волос, чтобы результат выглядел цельно и подходил именно вам.": "I work with shape, color and hair condition so the result looks cohesive and suits you.",
        "Стрижки и окрашивание": "Haircuts and coloring",
        "Blond и сложные техники": "Blond and complex techniques",
        "Уход и реконструкция волос": "Hair care and reconstruction",
        "Москва": "Moscow",
        "Щёлково": "Shchyolkovo",
        "Беляево": "Belyayevo",
        "Печатники": "Pechatniki",
        "По предварительной записи": "By appointment",
        "Строго по предварительной записи": "Strictly by appointment",
        "Пн–Сб 10:00–22:00": "Mon–Sat 10:00–22:00",
        "Ежедневно 10:00–22:00": "Daily 10:00–22:00",
        "Ланге Татьяна": "Tatyana Lange",
        "Мясницкая улица, 30/1/2с1, этаж 3, офис 7": "30/1/2 bldg. 1 Myasnitskaya Street, floor 3, office 7, Moscow",
        "Маникюр": "Manicure",
        "Маникюр с укреплением и покрытием": "Manicure with strengthening and coating",
        "Мужской маникюр": "Men's manicure",
        "Ламинирование ногтей": "Nail lamination",
        "Педикюр": "Pedicure",
        "Мужской педикюр": "Men's pedicure",
        "Наращивание и дизайн": "Extensions and design",
        "Наращивание ногтей": "Nail extensions",
        "Коррекция наращивания": "Extension correction",
        "Укрепление ногтей": "Nail strengthening",
        "Ремонт ногтя": "Nail repair",
        "Дизайн ногтей": "Nail design",
        "Градиент": "Gradient",
        "Френч": "French manicure",
        "Наращивание ногтей. Длина от 3 до 4.": "Nail extensions. Length 3 to 4.",
        "Наращивание ногтей. Камуфляж. Длина до 3.": "Nail extensions. Camouflage. Length up to 3.",
        "Наращивание ногтей. Типсы. Временно нет услуги!!!": "Nail extensions. Tips. Service temporarily unavailable!!!",
        "Наращивание ногтей. Френч. Длина до 3.": "Nail extensions. French. Length up to 3.",
        "Маникюр аппаратный": "Hardware manicure",
        "Маникюр комбинированный": "Combined manicure",
        "Маникюр бразильский": "Brazilian manicure",
        "Градиент гель лаками. Цена за 1 ноготь. Зависит от сложности сочетания оттенков.": "Gel polish gradient. Price per nail. Depends on the complexity of the color combination.",
        "Градиент гелями, полигелями. Цена за 1 ноготь.": "Gel/poly-gel gradient. Price per nail.",
        "Коррекция наращенных ногтей": "Nail extension correction",
        "Маникюр с покрытием": "Manicure with coating",
        "Маникюр с укреплением и покрытием. Длина до 2. Комплекс.": "Manicure with strengthening and coating. Length up to 2. Full service.",
        "Маникюр с укреплением и покрытием. Длина от 2 до 3. Комплекс.": "Manicure with strengthening and coating. Length 2 to 3. Full service.",
        "Маникюр с укреплением и покрытием. Длина от 3 до 4. Комплекс. Временно нет услуги!!!": "Manicure with strengthening and coating. Length 3 to 4. Full service. Service temporarily unavailable!!!",
        "Мужской маникюр с покрытием": "Men's manicure with coating",
        "Педикюр Голден Трейс. Golden Trace. Обработка стоп и пальцев без покрытия гель-лак. Временно нет услуги!!!": "Golden Trace pedicure. Foot and toe treatment without gel polish. Service temporarily unavailable!!!",
        "Педикюр дисковый. Без покрытия .": "Disc pedicure. No coating.",
        "Педикюр. В процедуру входит обработка пальцев с покрытием гель-лак.": "Pedicure. Includes toe treatment with gel polish.",
        "Педикюр. В процедуру входит только гигиеническая обработка пальцев. Без покрытия.": "Pedicure. Includes hygienic toe treatment only. No coating.",
        "Педикюр. Дисковый. Полная обработка стопы, пальцев. Покрытие ногтей гель -лак.": "Disc pedicure. Full foot and toe treatment. Gel polish coating.",
        "Педикюр. Полный Голден Трейс.Golden Trace. С покрытием ногтей гель лак. Временно нет услуги!!!": "Full Golden Trace pedicure with gel polish. Service temporarily unavailable!!!",
        "Поднятие клюющих": "Correction of downward-growing nails",
        "Ремонт ногтей": "Nail repair",
        "Ремонт 1 ногтя 0 рублей при выполнении какого-либо комплекса. 150 рублей если более 1 ногтя.": "Repair of 1 nail is free with any full service. 150 rubles if more than 1 nail.",
        "Сложные случаи в покрытии ногтей.": "Complex nail coating cases",
        "«У меня ничего не держится!» Это для ВАС!": "“Nothing stays on my nails!” This is for YOU!",
        "Снятие покрытия": "Coating removal",
        "Французский маникюр": "French manicure",
        "Французский маникюр. Френч.": "French manicure. French.",
        "Френч двойной, цветной, обратный, фантазийный. Лунки, руффиан.": "Double, colored, reverse and fantasy French. Half-moons, ruffian.",
        "3 ч 15 м": "3 h 15 min",
        "3 ч": "3 h",
        "45 м": "45 min",
        "35 м": "35 min",
        "1 ч": "1 h",
        "2 ч 20 м": "2 h 20 min",
        "1 ч 50 м": "1 h 50 min",
        "2 ч 15 м": "2 h 15 min",
        "2 ч 40 м": "2 h 40 min",
        "1 ч 40 м": "1 h 40 min",
        "1 ч 10 м": "1 h 10 min",
        "30 м": "30 min",
        "2 ч": "2 h",
        "10 м": "10 min",
        "15 м": "15 min",
        "Я Татьяна — эксперт по маникюру и педикюру.": "I am Tatyana — a manicure and pedicure expert."
      }
    }
  },
  "reviews": [
      {
          "author": "София Ч",
          "text": "Татьяна-прекрасный мастер!Ногти получаются просто супер💅\n\nХочу отметить,что Татьяна первый мастер в моей жизни,который ни разу не порезал мне кутикулу.Татьяна делает всё максимально аккуратно,чётко,быстро и ооочень красиво.Покрытие тонкое,но при этом носибельное и что бы я ни делала своими ручками,ни одной отслойки.Всем рекомендую посетить данного мастера,она профессионал своего дела!",
          "source": "Яндекс Карты"
      },
      {
          "author": "Катарина",
          "text": "Татьяна - единственный мастер, которому удается справиться с моими ногтями. Они у меня очень тонкие, гнутся как лист бумаги, с ними тяжело работать. Когда делала маникюр у других мастеров, очень часто ногти начинали отслаиваться уже через несколько дней, лак откалывался и через неделю-две от маникюра уже ничего не оставалось, приходилось заново переделывать. Татьяна делает на совесть, очень хорошо, учитывает все моменты. Ногти не ломаются, не отслаиваются, носятся долго. Теперь хожу только к ней!",
          "source": "Яндекс Карты"
      },
      {
          "author": "Елена С.",
          "text": "Для меня главное в маникюре — это безопасность и аккуратность, поэтому я искренне рекомендую этого мастера. Все инструменты стерильные, крафт-пакеты вскрываются при мне. Сам маникюр выполнен отлично и без нареканий, видно что мастер старается. Поэтому 5 звезд 🌸",
          "source": "Яндекс Карты"
      },
      {
          "author": "АМ",
          "text": "Спасибо большое Татьяне за прекрасный маникюр, качество, добродушное отношение и приятную компанию! Очень рекомендую!\n\nДелали поднятие, нарастили руку, укрепили все и покрытие, как и обработка кутикулы, очень аккуратные!🫶🏼",
          "source": "Яндекс Карты"
      },
      {
          "author": "Анна Силкина",
          "text": "Хожу к Татьяне уже пол года, и каждый раз остаюсь в полном восторге от вида своих рук!\n\nМне кажется это самый идеальный маникюр в моей жизни. Если вы такой же фанат идеально ровного четкого квадрата как и я, то я очень рекомендую вам сходить к Татьяне\n\nНет смысла все это расписывать, просто посмотрите фото и оцените сами :)\n\nИ да, огромная цветовая палитра радует каждый раз, я приложила фотку лишь части красного!! Выбор огромен, на любой вкус\n\nСам маникюр всегда проходит комфортно, инструменты стерилизованы, Татьяна работает быстро и на качество, что сейчас большая редкость",
          "source": "Яндекс Карты"
      },
      {
          "author": "Maria",
          "text": "Мне очень понравился мастер. Я делаю обычный гигиеничекий маникюр, Татьяна все сделала быстро, чисто, аккуратно и бережно. Я была первый раз и осталась очень довольна, обязательно вернусь еще.",
          "source": "Яндекс Карты"
      },
      {
          "author": "Юлия Аветисян",
          "text": "Гостила у подруги в прошлом году, увидела у нее красивую форму ноготков, шикарный френч, по ее рекомендации пошла в студию ногтевого сервиса Татьяны Ланге. Безусловно для меня всегда были важны такие моменты как стерильность инструментов, отсутствие порезов и пропилов, аккуратность и стойкость покрытия, красивая форма.\n\nТатьяна в меру разговорчива, но может поддержать беседу, спокойна и уравновешенна. Комфортная обстановка, приятный мастер, отличная работа.\n\nВсегда оставалась довольна процедурой. Всем с чистой совестью рекомендую Татьяну. Буду еще в Москве, обязательно к ней.",
          "source": "Яндекс Карты"
      },
      {
          "author": "Светлана С.",
          "text": "Татьяна великолепный мастер своего дела! Особенно ценю ее за то что она с вниманием относится к любым пожеланиям своего клиента. Отдельно хочу отметить качество работы - за все это время у меня не было ни единого нарекания. Маникюр носится прекрасно и не перестает радовать до самого снятия. Так же, что немаловажно, Татьяна всегда следит за чистотой и гигиеной рабочих инструментов и места. Еще Татьяна замечательный собеседник, который может поддержать беседу или же наоборот комфортное молчание.",
          "source": "Яндекс Карты"
      },
      {
          "author": "Ната",
          "text": "Прекрасный мастер, к которому будете возвращаться. Маникюр всегда очень качественный, без спешки. Лак держится 3 недели. Ногти у меня ломкие, но благодаря Татьяне я об этом забываю ))",
          "source": "Яндекс Карты"
      }
  ],
  "promotions": [],
  "amenities": [],
  "seo": {
    "siteUrl": "https://ichaey.github.io/TAN-0015/",
    "title": "Татьяна Ланге — мастер маникюра и педикюра",
    "description": "Маникюр, педикюр, наращивание и дизайн ногтей у Татьяны Ланге в Москве. Запись через DIKIDI.",
    "keywords": [
      "Татьяна Ланге",
      "маникюр Москва",
      "педикюр Москва",
      "наращивание ногтей Москва"
    ],
    "locale": "ru_RU"
  },
  "analytics": {
    "yandexMetrikaId": ""
  }
};
