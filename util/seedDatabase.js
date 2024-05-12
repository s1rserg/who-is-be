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

  console.log("Database seeded successfully!");
}

seedDatabase().catch((err) => {
  console.error("Error seeding database:", err);
  process.exitCode = 1;
});
