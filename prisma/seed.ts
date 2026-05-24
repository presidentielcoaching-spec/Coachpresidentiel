import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const LANGUAGES = [
  { code: "swa", name: "Swahili", region: "Afrique de l'Est", speakers: "+200M locuteurs", greeting: "Jambo", emoji: "🏔️", hue: "from-african-green/30 to-primary-700/10" },
  { code: "wol", name: "Wolof", region: "Sénégal · Gambie", speakers: "+12M locuteurs", greeting: "Salam aleikum", emoji: "⛵", hue: "from-gold-500/30 to-african-orange/10" },
  { code: "yor", name: "Yoruba", region: "Nigeria · Bénin", speakers: "+45M locuteurs", greeting: "Bawo", emoji: "👑", hue: "from-african-orange/30 to-african-red/10" },
  { code: "lin", name: "Lingala", region: "RDC · Congo", speakers: "+40M locuteurs", greeting: "Mbote", emoji: "🌆", hue: "from-primary-500/30 to-african-green/10" },
  { code: "ewo", name: "Ewondo", region: "Cameroun", speakers: "+2M locuteurs", greeting: "Mbolo", emoji: "🏡", hue: "from-african-red/30 to-gold-500/10" },
  { code: "bam", name: "Bambara", region: "Mali", speakers: "+15M locuteurs", greeting: "I ni ce", emoji: "🥁", hue: "from-primary-700/30 to-african-orange/10" },
  { code: "hau", name: "Hausa", region: "Nigeria · Niger", speakers: "+80M locuteurs", greeting: "Sannu", emoji: "🌾", hue: "from-gold-500/30 to-primary-500/10" },
  { code: "aka", name: "Akan", region: "Ghana", speakers: "+11M locuteurs", greeting: "Akwaaba", emoji: "✨", hue: "from-african-green/30 to-gold-500/10" },
  { code: "bas", name: "Bassa", region: "Cameroun", speakers: "+2M locuteurs", greeting: "Mbôlô", emoji: "🌳", hue: "from-african-green/30 to-african-orange/10" },
  { code: "dyu", name: "Dioula", region: "Burkina · Côte d'Ivoire", speakers: "+9M locuteurs", greeting: "I ni sɔgɔma", emoji: "🛖", hue: "from-african-orange/30 to-gold-500/10" },
  { code: "ewe", name: "Ewe", region: "Togo · Ghana", speakers: "+7M locuteurs", greeting: "Ŋdi", emoji: "🎶", hue: "from-primary-500/30 to-african-orange/10" },
  { code: "fon", name: "Fon", region: "Bénin", speakers: "+4M locuteurs", greeting: "A fon ganji a", emoji: "🪘", hue: "from-african-red/30 to-primary-700/10" },
  { code: "ibo", name: "Igbo", region: "Nigeria", speakers: "+27M locuteurs", greeting: "Ndewo", emoji: "🦁", hue: "from-gold-500/30 to-african-red/10" },
  { code: "zul", name: "Zulu", region: "Afrique du Sud", speakers: "+12M locuteurs", greeting: "Sawubona", emoji: "🛡️", hue: "from-primary-700/30 to-african-green/10" },
  { code: "xho", name: "Xhosa", region: "Afrique du Sud", speakers: "+8M locuteurs", greeting: "Molo", emoji: "🪕", hue: "from-african-green/30 to-primary-500/10" },
  { code: "amh", name: "Amharique", region: "Éthiopie", speakers: "+32M locuteurs", greeting: "ሰላም (Selam)", emoji: "☕", hue: "from-african-red/30 to-gold-500/10" },
  { code: "orm", name: "Oromo", region: "Éthiopie", speakers: "+35M locuteurs", greeting: "Akkam", emoji: "🌄", hue: "from-african-orange/30 to-primary-700/10" },
  { code: "sna", name: "Shona", region: "Zimbabwe", speakers: "+12M locuteurs", greeting: "Mhoro", emoji: "🪨", hue: "from-primary-500/30 to-gold-500/10" },
  { code: "kin", name: "Kinyarwanda", region: "Rwanda", speakers: "+12M locuteurs", greeting: "Muraho", emoji: "⛰️", hue: "from-african-green/30 to-african-orange/10" },
  { code: "ful", name: "Peul (Fulfulde)", region: "Sahel", speakers: "+40M locuteurs", greeting: "Jam tan", emoji: "🐄", hue: "from-gold-500/30 to-african-red/10" },
  { code: "mlg", name: "Malagasy", region: "Madagascar", speakers: "+25M locuteurs", greeting: "Manao ahoana", emoji: "🌺", hue: "from-african-orange/30 to-primary-500/10" },
];

const LESSONS_PER_LANG = [
  { slug: "salutations", title: "Les salutations", description: "Apprends à saluer dans la vie quotidienne.", durationMin: 8, category: "conversation" },
  { slug: "se-presenter", title: "Se présenter", description: "Donne ton nom, ton âge, d'où tu viens.", durationMin: 12, category: "conversation" },
  { slug: "au-marche", title: "Au marché", description: "Marchander, demander des prix, compter.", durationMin: 15, category: "conversation" },
  { slug: "en-famille", title: "En famille", description: "Vocabulaire des liens familiaux et du foyer.", durationMin: 10, category: "vocabulaire" },
  { slug: "proverbes", title: "Proverbes & sagesse", description: "Découvre la sagesse des ancêtres à travers les proverbes.", durationMin: 10, category: "culture" },
  { slug: "chants-traditionnels", title: "Chants traditionnels", description: "Apprends les mélodies du patrimoine.", durationMin: 12, category: "culture" },
];

async function main() {
  console.log("Seeding languages…");
  for (const l of LANGUAGES) {
    const lang = await prisma.language.upsert({
      where: { code: l.code },
      create: l,
      update: l,
    });
    for (let i = 0; i < LESSONS_PER_LANG.length; i++) {
      const lesson = LESSONS_PER_LANG[i];
      await prisma.lesson.upsert({
        where: { languageId_slug: { languageId: lang.id, slug: lesson.slug } },
        create: { ...lesson, languageId: lang.id, orderIndex: i, level: "debutant" },
        update: { ...lesson, orderIndex: i },
      });
    }
  }

  console.log("Seeding demo user (koffi@afrilingua.ai / koffi1234)…");
  const passwordHash = await bcrypt.hash("koffi1234", 10);
  const user = await prisma.user.upsert({
    where: { email: "koffi@afrilingua.ai" },
    update: {},
    create: {
      email: "koffi@afrilingua.ai",
      passwordHash,
      name: "Koffi A.",
      level: 7,
      xp: 1250,
      streakDays: 12,
      isPremium: false,
    },
  });

  const userLangs = [
    { code: "ewo", level: 3, progress: 65 },
    { code: "wol", level: 2, progress: 40 },
    { code: "yor", level: 1, progress: 20 },
  ];
  for (const ul of userLangs) {
    const lang = await prisma.language.findUnique({ where: { code: ul.code } });
    if (!lang) continue;
    await prisma.userLanguage.upsert({
      where: { userId_languageId: { userId: user.id, languageId: lang.id } },
      update: { level: ul.level, progress: ul.progress },
      create: { userId: user.id, languageId: lang.id, level: ul.level, progress: ul.progress },
    });
  }

  console.log("Seeding community members (for leaderboard)…");
  const dummyHash = await bcrypt.hash("demo123456", 10);
  const COMMUNITY = [
    { email: "amina@afrilingua.demo", name: "Amina T.", xp: 3240, level: 9, streak: 28 },
    { email: "chidi@afrilingua.demo", name: "Chidi B.", xp: 980, level: 5, streak: 7 },
    { email: "fatou@afrilingua.demo", name: "Fatou N.", xp: 870, level: 5, streak: 15 },
    { email: "kwame@afrilingua.demo", name: "Kwame S.", xp: 760, level: 4, streak: 4 },
    { email: "aisha@afrilingua.demo", name: "Aisha M.", xp: 2540, level: 8, streak: 22 },
    { email: "thabo@afrilingua.demo", name: "Thabo D.", xp: 2110, level: 8, streak: 18 },
    { email: "zainab@afrilingua.demo", name: "Zainab R.", xp: 1880, level: 7, streak: 11 },
    { email: "omar@afrilingua.demo", name: "Omar K.", xp: 1640, level: 7, streak: 9 },
    { email: "ngozi@afrilingua.demo", name: "Ngozi O.", xp: 1420, level: 6, streak: 14 },
    { email: "samira@afrilingua.demo", name: "Samira L.", xp: 1090, level: 6, streak: 5 },
    { email: "tariq@afrilingua.demo", name: "Tariq B.", xp: 690, level: 4, streak: 3 },
    { email: "imani@afrilingua.demo", name: "Imani W.", xp: 540, level: 3, streak: 2 },
  ];
  for (const m of COMMUNITY) {
    await prisma.user.upsert({
      where: { email: m.email },
      update: { xp: m.xp, level: m.level, streakDays: m.streak },
      create: {
        email: m.email,
        passwordHash: dummyHash,
        name: m.name,
        xp: m.xp,
        level: m.level,
        streakDays: m.streak,
      },
    });
  }

  console.log("Done.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
