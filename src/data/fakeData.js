// src/data/fakeData.js


export const users = [
  
  {
    id: 1,
    name: "Айбек Эркинбеков",
    username: "erkish_dev",
    email: "erkish@example.kg",
    phone: "+996 555 12 34 56",
    website: "erkish.kg",
    company: { name: "Kant Tech Solutions" },
  },
  {
    id: 2,
    name: "Айжан Сатыбалдиева",
    username: "aijan_ui",
    email: "aijan.design@kg",
    phone: "+996 701 98 76 54",
    website: "aijan.art",
    company: { name: "Pixel Dream Studio" },
  },
  {
    id: 3,
    name: "Нурсултан Кадыров",
    username: "nurs_backend",
    email: "nursultan.code@gmail.com",
    phone: "+996 777 45 67 89",
    website: "nurs.kg",
    company: { name: "AlaiSoft" },
  },
  {
    id: 4,
    name: "Гулнура Маматова",
    username: "gul_data",
    email: "gulnuura.analytics@list.kg",
    phone: "+996 555 33 22 11",
    website: "data.gul.kg",
    company: { name: "Insight KG" },
  },
  {
    id: 5,
    name: "Бектур Жумабеков",
    username: "bektur_mobile",
    email: "bektur.appdev@proton.me",
    phone: "+996 709 87 65 43",
    website: "bektur.dev",
    company: { name: "Kyrgyz App Lab" },
  },
];

export const posts = [
  {
    id: 101,
    userId: 1,
    title: "Как я начал кодить на React в Кыргызстане",
    body: "Всё началось с бесплатного ноутбука от дяди и курса на YouTube. Через полгода уже делал первый pet-project. Главное — не бояться ошибок и каждый день писать хотя бы 30 строк кода. Кто сейчас только начинает — вы справитесь!",
  },
  {
    id: 102,
    userId: 1,
    title: "Почему Tailwind CSS — это любовь с первого взгляда",
    body: "Забудьте про часы в CSS-файлах. Пишешь классы прямо в HTML — и всё выглядит красиво за 5 минут. Особенно удобно, когда дедлайн горит, а заказчик хочет 'ещё чуть красивее'.",
  },
  {
    id: 103,
    userId: 2,
    title: "5 цветов, которые сейчас в тренде в Кыргызском дизайне",
    body: "1. Горный индиго\n2. Кыргызский красный (как на флаге)\n3. Неоновый тик-ток фиолетовый\n4. Пустынный бежевый\n5. Ледниковый голубой\nПопробуйте — клиенты в восторге.",
  },
  {
    id: 104,
    userId: 3,
    title: "Node.js + PostgreSQL — идеальный стек для стартапа в Бишкеке",
    body: "Дешёвый VPS за 300 сом/мес, бесплатный Postgres от Supabase или Neon — и ты уже имеешь бэкенд, который выдержит 10к пользователей. Проверено на проекте для местного маркетплейса.",
  },
  {
    id: 105,
    userId: 4,
    title: "Как анализировать данные продаж в Excel за 15 минут",
    body: "Сводные таблицы + Power Query + несколько простых формул — и у тебя уже дашборд. Не нужно сразу прыгать в Python, если бизнес хочет видеть цифры 'вчера'.",
  },
  {
    id: 106,
    userId: 5,
    title: "Flutter vs React Native в 2026 году — мой вердикт",
    body: "Flutter выигрывает по скорости разработки UI и производительности. React Native всё ещё хорош, если команда уже знает JS/TS. Но для новых проектов беру Flutter — меньше багов на iOS и Android одновременно.",
  },
  {
    id: 107,
    userId: 2,
    title: "Как продавать дизайн-услуги в Instagram в Кыргызстане",
    body: "Reels с процессом работы → Stories с отзывами → посты с кейсами → Highlights 'До/После'. Цены начинаются от 15 000 сом за лендинг. Главное — показывать результат, а не только красивые мокапы.",
  },
  {
    id: 108,
    userId: 3,
    title: "Самые частые ошибки новичков в Git",
    body: "1. Коммитить всё подряд без сообщений\n2. Работать в main ветке\n3. Не делать pull перед push\n4. Забывать git add .\n5. Пушить секреты (токены, пароли)\nУчитесь на чужих ошибках, не на своих.",
  },
];