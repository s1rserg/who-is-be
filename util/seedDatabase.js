const { Person, Connections, Events } = require("../models/person");

async function seedDatabase() {
  // Create persons
  const petroMostavchuk = await Person.create({
    firstName: "Петро",
    lastName: "Моставчук",
    patronymic: "Петрович",
    photo: "petroMostavchuk.jpg",
    rating: 1,
    description:
      'Петро Моставчук, також відомий як МС Петя, - юнак родом із селища Хлевище (Чернівецька область, Кіцманський район), представляє себе як репера, спортсмена та "мотиватора", що став популярним унаслідок ексцентричних витівок.',
    industry: "Media",
  });

  const igorKondratyuk = await Person.create({
    firstName: "Ігор",
    lastName: "Кондратюк",
    patronymic: "Васильович",
    photo: "ihorKondratyuk.jpg",
    rating: 1,
    description:
      "Ігор Васильович Кондратюк (14 березня 1962, с. Пригір'я Високопільського району Херсонської області) — український телевізійний ведучий, продюсер, шоумен.",
    industry: "Media",
  });

  // Create connections
  await Connections.create({
    personId1: petroMostavchuk.id,
    personId2: igorKondratyuk.id,
  });

  // Create events
  await Events.create({
    personId: petroMostavchuk.id,
    title: "Перше відео на ютуб-каналі",
    year: 2015,
    type: "Media",
    link: "https://youtu.be/adRr-OddjXs?si=Ew9vQ7qKn_dbiA_V",
    description:
      "Відео на ютуб-каналі Петра зняте вдома на телефон. У ньому хлопець намагається танцювати хіп-хоп.",
  });

  await Events.create({
    personId: petroMostavchuk.id,
    title: "Кастинг на шоу Україна має талант",
    year: 2015,
    type: "Media",
    link: "https://youtu.be/YKd1hULTgio?si=_rjRuJXrkcCEbvHa",
    description:
      "Прийшов на кастинг шоу Україна має талант, де розповів про свій перший реп-текст, станцював крамп та зачитав фрістайл про все що побачив на сцені. Жюрі оцінили його щирість та дивакуватість та допустили до участі в основній частині шоу.",
  });

  await Events.create({
    personId: petroMostavchuk.id,
    title: "Виступ на площі в Чернівцях",
    year: 2018,
    type: "Media",
    link: "https://youtu.be/YfxL9fxzsM4?si=QYOtjqeVbbSf3nTj",
    description:
      "Петро, уже відомий як МС Петя, розважає натовп на площі і Чернівцях. Танцює та виконує акробатичні вправи з голим торсом. У кульмінації багаторазово б'є себе по голові скейтбордом та цілує дівчину з натовпу.",
  });

  await Events.create({
    personId: igorKondratyuk.id,
    title: "Досягнення рівня кандидата наук",
    year: 1996,
    type: "Science",
    link: "http://irbis-nbuv.gov.ua/ASUA/0298161",
    description: "Досяг рівня кандидата наук з молекулярної біології.",
  });

  await Events.create({
    personId: igorKondratyuk.id,
    title: 'Ведучий телепередачі "Караоке на майдані"',
    year: 1999,
    type: "Media",
    link: "https://youtu.be/dcFUZ8y9IWI?si=P6Si_taDMJYEsKLG",
    description:
      'Молодий науковець Ігор стає ведучим в майбутньому успішного телепередачі "Караоке на майдані"',
  });

  await Events.create({
    personId: igorKondratyuk.id,
    title: 'Співведучий шоу "Україна має талант"',
    year: 2009,
    type: "Media",
    link: "https://fb.watch/s0kdykpWKg/",
    description: 'Кондратюк стає співведучим шоу "Україна має талант".',
  });

  await Events.create({
    personId: igorKondratyuk.id,
    title: "Підтримка МС Пєті на кастингу",
    year: 2015,
    type: "Media",
    link: "https://youtu.be/YKd1hULTgio?si=_rjRuJXrkcCEbvHa",
    description:
      'На кастингу 7-го сезону сказав "лише одна людина, що прийшла непідготовленою отримала від мене так і це МС Пєтя". Завдяки підтримці Кондратюка Петро Моставчук пройшов відбірковий етап.',
  });

  const petroPoroshenko = await Person.create({
    firstName: "Петро",
    lastName: "Порошенко",
    patronymic: "Олексійович",
    photo: null,
    rating: 1,
    description:
      "Бізнесмен, народний депутат багатьох скликань. Працював міністром закордонних справ і міністром економіки і торгівлі. Був членом Ради Національного банку України. Найбільш відомий як 5-й президент України.",
    industry: "Politics",
  });
  const yuliaTymoshenko = await Person.create({
    firstName: "Юлія",
    lastName: "Тимошенко",
    patronymic: "Володимирівна",
    photo: null,
    rating: 0,
    description:
      "(27 листопада 1960 р.) — українська державна та політична діячка, Народний депутат України. Двічі Прем'єр-міністр України (2005, 2007—2010).",
    industry: "Politics",
  });

  await Connections.create({
    personId1: petroPoroshenko.id,
    personId2: yuliaTymoshenko.id,
  });

  await Events.create({
    personId: petroPoroshenko.id,
    title: "Уперше обраний народним депутатом від партії СДПУ",
    year: 1998,
    type: "Politics",
    link: "https://vybory.pravda.com/articles/2019/01/28/7149843/",
    description:
      "Петро Порошенко вперше обраний народним депутатом від партії СДПУ.",
  });
  await Events.create({
    personId: petroPoroshenko.id,
    title: 'Заснував власну партію "Солідарність"',
    year: 2000,
    type: "Politics",
    link: "https://www.bbc.com/ukrainian/politics/2014/05/140528_poroshenko_biography_profile_vc",
    description: 'Петро Порошенко заснував власну партію "Солідарність".',
  });
  await Events.create({
    personId: petroPoroshenko.id,
    title:
      "Президент Віктор Ющенко призначив Петра Порошенка міністром закордонних справ",
    year: 2009,
    type: "Politics",
    link: "https://www.pravda.com.ua/news/2009/10/16/509635/",
    description:
      "У жовтні 2009 року за поданням президента Віктора Ющенка призначив Петра Порошенка міністром закордонних справ в уряд Юлії Тимошенко.",
  });
  await Events.create({
    personId: yuliaTymoshenko.id,
    title: "Вперше обрана народною депутаткою під час другого скликання",
    year: 1997,
    type: "Politics",
    link: "https://vybory.pravda.com/articles/2019/02/11/7149857/",
    description:
      "Юлія Тимошенко вперше обрана народною депутаткою під час другого скликання.",
  });
  await Events.create({
    personId: yuliaTymoshenko.id,
    title: 'Стала одним з лідерів протестів відомих як "Помаранчева революція"',
    year: 2004,
    type: "Politics",
    link: "https://www.rferl.org/amp/25134362.html",
    description:
      'Юлія Тимошенко разом з Петром Порошенком стала одним з лідерів протестів відомих як "Помаранчева революція".',
  });

  const oleksandrKomarov = await Person.create({
    firstName: "Олександр",
    lastName: "Комаров",
    patronymic: "Валерійович", 
    photo: null,
    rating: 1,
    description: "(народився 7 листопада 1972) — український топ-менеджер, президент компанії Київстар",
    industry: "Business"
  });
  
  const volodymyrPopereshnyuk = await Person.create({
    firstName: "Володимир",
    lastName: "Поперешнюк",
    patronymic: "Анатолійович",
    photo: null,
    rating: 1, 
    description: "(нар. 22 червня 1975, Кишинів, Молдова) — український підприємець, співзасновник компанії «Нова Пошта»",
    industry: "Business"
  });
  
  const oleksandrKonotopskyi = await Person.create({
    firstName: "Олександр",
    lastName: "Конотопський",
    patronymic: null,
    photo: null,
    rating: 1,
    description: "(нар. 7 червня 1986, Київ, УРСР) — український підприємець, інвестор та інженер. Відомий як засновник компанії Ajax Systems.",
    industry: "Business"
  });
  
  const viktorYushchenko = await Person.create({
    firstName: "Віктор", 
    lastName: "Ющенко",
    patronymic: "Андрійович",
    photo: null,
    rating: 1,
    description: "(нар. 23 лютого 1954, с. Хоружівка, Недригайлівський район, Сумська область) — український політик і державний діяч, банкір. Найбільш відомир як 3-й Президент України", 
    industry: "Politics"
  });
  
  await Connections.create({
    personId1: oleksandrKomarov.id,
    personId2: petroPoroshenko.id
  });
  
  await Connections.create({
    personId1: volodymyrPopereshnyuk.id, 
    personId2: yuliaTymoshenko.id
  });

  await Events.create({
    personId: oleksandrKomarov.id,
    title: "Починає працювати в НДЦ Військового інституту управління та зв'язку",
    year: 1994,
    type: "Work",
    description: "Олександр Комаров починає працювати в київському Науково-дослідному центрі Військового інституту управління та зв'язку."
  });
  
  await Events.create({
    personId: oleksandrKomarov.id,
    title: "Призначений президентом Київстар", 
    year: 2018,
    type: "Work",
    link: "https://web.archive.org/web/20201026062157/https://kyivstar.ua/uk/mm/news-and-promotions/veon-ogoloshuye-pro-pryznachennya-oleksandra-komarova-prezydentom-kyyivstar",
    description: "Група VEON оголосила про призначення Олександра Комарова президентом компанії Київстар"
  });
  
  await Events.create({
    personId: volodymyrPopereshnyuk.id,
    title: "Створення компанії Нова Пошта",
    year: 1998,
    type: "Business",
    link: "https://clarity-project.info/edr/30151983",
    description: "Володимир Поперешнюк бере гроші з сімейного бізнесу для створення компанії з перевезення."
  });
  
  await Events.create({
    personId: volodymyrPopereshnyuk.id,
    title: "Виступ на Kyiv International Economic Forum", 
    year: 2021,
    type: "Business",
    link: "https://youtu.be/s8MIIybYFUs?si=-f_CsGgiTCoeWTm7",
    description: "Виступив на економічному форумі з промовою про кризовий вплив держави на економіку і важливість зміни податкової стратегії та сприяння приватизації."
  });
  
  await Events.create({
    personId: oleksandrKonotopskyi.id,
    title: "Звернення до Президента України",
    year: 2022, 
    type: "Politics",
    link: "https://dev.ua/news/konotopskii-ajax-getmantsev",
    description: "Приєднався до колективного звернення українських підприємців до президента про усунення з посад голови \"податкового\" комітету ВР та секретаря Нацради відновлення України за деструктивну діяльність."
  });
  
  await Events.create({
    personId: oleksandrKonotopskyi.id,
    title: "Перенесення виробництва Ajax до Стамбулу",
    year: 2022,
    type: "Business", 
    link: "https://ajax.systems/ua/blog/ajax-plant-in-turkey/",
    description: "Олександр Конотопський переніс частину потужностей компанії Ajax з Києва до Стамбулу."
  });
  
  await Events.create({
    personId: viktorYushchenko.id,
    title: "Захист кандидатської дисертації", 
    year: 1998,
    type: "Education",
    link: "http://irbis-nbuv.gov.ua/ulib/item/UKR0003727",
    description: "Захистив кандидатську дисертацію з економічних наук на тему «Розвиток попиту та пропозиції на гроші в Україні»"
  });
  
  await Events.create({
    personId: viktorYushchenko.id,
    title: "Призначений Прем'єр-міністром України",
    year: 1999, 
    type: "Politics",
    link: "https://zakon.rada.gov.ua/laws/show/1333-14#Text",
    description: "Зайняв посаду Прем'єр-міністра України"
  });

  console.log("Database seeded successfully!");
}

seedDatabase().catch((err) => {
  console.error("Error seeding database:", err);
  process.exitCode = 1;
});
