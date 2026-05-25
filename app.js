const WORLD_POPULATION = 8_293_000_000;

const fallbackRatesPerUsd = {
  AED: 3.67,
  ARS: 900,
  AUD: 1.52,
  BDT: 117,
  BGN: 1.81,
  BRL: 5.1,
  CAD: 1.37,
  CHF: 0.91,
  CLP: 920,
  CNY: 7.24,
  COP: 3900,
  CZK: 22.8,
  DKK: 6.92,
  EGP: 47.5,
  EUR: 0.93,
  GBP: 0.79,
  HKD: 7.82,
  HUF: 360,
  IDR: 16200,
  ILS: 3.7,
  INR: 83.3,
  JPY: 156,
  KRW: 1370,
  MAD: 10,
  MXN: 17,
  MYR: 4.7,
  NGN: 1500,
  NOK: 10.6,
  NZD: 1.65,
  PHP: 58,
  PKR: 278,
  PLN: 4,
  RON: 4.62,
  RUB: 91,
  SAR: 3.75,
  SEK: 10.6,
  SGD: 1.35,
  THB: 36.7,
  TRY: 32.2,
  TWD: 32.3,
  USD: 1,
  VND: 25400,
  ZAR: 18.4,
};

const featuredCurrencies = [
  { code: "USD", flag: "🇺🇸", name: "US Dollar" },
  { code: "EUR", flag: "🇪🇺", name: "Euro" },
  { code: "JPY", flag: "🇯🇵", name: "Japanese Yen" },
  { code: "GBP", flag: "🇬🇧", name: "British Pound" },
  { code: "CNY", flag: "🇨🇳", name: "Chinese Yuan" },
  { code: "INR", flag: "🇮🇳", name: "Indian Rupee" },
  { code: "CAD", flag: "🇨🇦", name: "Canadian Dollar" },
  { code: "AUD", flag: "🇦🇺", name: "Australian Dollar" },
  { code: "CHF", flag: "🇨🇭", name: "Swiss Franc" },
  { code: "HKD", flag: "🇭🇰", name: "Hong Kong Dollar" },
  { code: "SGD", flag: "🇸🇬", name: "Singapore Dollar" },
  { code: "KRW", flag: "🇰🇷", name: "South Korean Won" },
  { code: "BRL", flag: "🇧🇷", name: "Brazilian Real" },
  { code: "MXN", flag: "🇲🇽", name: "Mexican Peso" },
  { code: "ZAR", flag: "🇿🇦", name: "South African Rand" },
  { code: "AED", flag: "🇦🇪", name: "UAE Dirham" },
  { code: "SAR", flag: "🇸🇦", name: "Saudi Riyal" },
  { code: "SEK", flag: "🇸🇪", name: "Swedish Krona" },
  { code: "NOK", flag: "🇳🇴", name: "Norwegian Krone" },
  { code: "DKK", flag: "🇩🇰", name: "Danish Krone" },
  { code: "NZD", flag: "🇳🇿", name: "New Zealand Dollar" },
  { code: "THB", flag: "🇹🇭", name: "Thai Baht" },
  { code: "IDR", flag: "🇮🇩", name: "Indonesian Rupiah" },
  { code: "MYR", flag: "🇲🇾", name: "Malaysian Ringgit" },
  { code: "PHP", flag: "🇵🇭", name: "Philippine Peso" },
  { code: "VND", flag: "🇻🇳", name: "Vietnamese Dong" },
  { code: "TRY", flag: "🇹🇷", name: "Turkish Lira" },
  { code: "PLN", flag: "🇵🇱", name: "Polish Zloty" },
  { code: "CZK", flag: "🇨🇿", name: "Czech Koruna" },
  { code: "HUF", flag: "🇭🇺", name: "Hungarian Forint" },
  { code: "ILS", flag: "🇮🇱", name: "Israeli Shekel" },
  { code: "EGP", flag: "🇪🇬", name: "Egyptian Pound" },
  { code: "PKR", flag: "🇵🇰", name: "Pakistani Rupee" },
  { code: "BDT", flag: "🇧🇩", name: "Bangladeshi Taka" },
  { code: "NGN", flag: "🇳🇬", name: "Nigerian Naira" },
  { code: "ARS", flag: "🇦🇷", name: "Argentine Peso" },
  { code: "CLP", flag: "🇨🇱", name: "Chilean Peso" },
  { code: "COP", flag: "🇨🇴", name: "Colombian Peso" },
  { code: "MAD", flag: "🇲🇦", name: "Moroccan Dirham" },
  { code: "TWD", flag: "🇹🇼", name: "Taiwan Dollar" },
  { code: "RON", flag: "🇷🇴", name: "Romanian Leu" },
  { code: "BGN", flag: "🇧🇬", name: "Bulgarian Lev" },
];

let ratesPerUsd = { ...fallbackRatesPerUsd };

const localMemeGifLabels = [
  "broke poor", "im broke", "broke im broke", "broke money",
  "if youre broke just say so", "fake crying", "rich money", "money wow",
  "money reaction", "rich reaction", "money meme", "funny money",
];

const remoteMemeGifUrls = [
  "https://media.tenor.com/srCFJzXXv-gAAAAM/anton-karnov-pov-typical-anton.gif",
  "https://media.tenor.com/8Sd17AgszdIAAAAM/mickey-mouse-famished.gif",
  "https://media.tenor.com/Bq6WwpwOGPwAAAAM/prerich-gif-by-prerichcoin-on-x-prerich.gif",
  "https://media.tenor.com/2aOz0pzAEogAAAAM/prerich-gif-by-prerichcoin-on-x-prerich.gif",
  "https://media.tenor.com/KBPZ_U46WNUAAAAM/silksong-broke-silksong.gif",
  "https://media.tenor.com/rwGvxvPl4HgAAAAM/tajustalu-conlang.gif",
  "https://media.tenor.com/ayqWpT7qLBgAAAAM/metal-gear-solid-phantom-pain.gif",
  "https://media.tenor.com/bm26oVMCqYIAAAAM/omori-braces.gif",
  "https://media.tenor.com/u1GTpVEwbwQAAAAM/crying-hysterically-crying-meme.gif",
  "https://media.tenor.com/ZND8Ql1w89QAAAAM/shirley-temple.gif",
  "https://media.tenor.com/M0z1Z1O_hV4AAAAM/tude-kiks-gidski.gif",
  "https://media.tenor.com/vfof4cU1O_4AAAAM/empty-wallet-it-hurts.gif",
  "https://media.tenor.com/P584bTbzLE8AAAAM/no-money.gif",
  "https://media.tenor.com/JOz9J6e-k0kAAAAM/khat.gif",
  "https://media.tenor.com/Z5eczr5QgCoAAAAM/im-broke-cat-meme.gif",
  "https://media.tenor.com/_Zx5TAkNz1MAAAAM/broke-friend.gif",
  "https://media.tenor.com/et0ajGi5690AAAAM/rule-32-poor.gif",
  "https://media.tenor.com/rp1jYvy2qEsAAAAM/sad-crying.gif",
  "https://media.tenor.com/fPypd7WXXDkAAAAM/meme-funny.gif",
  "https://media.tenor.com/SgFMBnIcXxAAAAAM/jesse-pinkman.gif",
  "https://media.tenor.com/DKXORvD1uc0AAAAM/you-know-what-im-about-to.gif",
  "https://media.tenor.com/wQB77xIPiPsAAAAM/breakup-status.gif",
  "https://media.tenor.com/PC5vHSrjJi0AAAAM/dayshift-at-freddys-dsaf.gif",
  "https://media.tenor.com/56iCie1YlUIAAAAM/stelle-hsr-i%27m-broke.gif",
  "https://media.tenor.com/Ezq-o2fM4XMAAAAM/rodion-roblox-%D1%80%D0%BE%D0%B4%D0%B8%D0%BA.gif",
  "https://media.tenor.com/t49CNwHgyOkAAAAM/sybau-ts.gif",
  "https://media.tenor.com/969NkcjwhkAAAAAM/heart-broken-meme.gif",
  "https://media.giphy.com/media/SJcJxtq3rxpW0Wy4UM/200.gif",
  "https://media.giphy.com/media/XJtM2nNFCzT3etvzOB/200.gif",
  "https://media.giphy.com/media/scRkLavwCEHPS8K9lU/200.gif",
  "https://media.giphy.com/media/1VjwBoVhCxPofXFvpP/200.gif",
  "https://media.giphy.com/media/81PAgIUZoxV0KXFY0R/200.gif",
  "https://media.giphy.com/media/CrAKhUS36sDCsDt4wU/200.gif",
  "https://media.giphy.com/media/BnfdKNASbVwLBkcyxa/200.gif",
  "https://media.giphy.com/media/f7MO098FCipmq0eUpV/200.gif",
  "https://media.giphy.com/media/gXhajUnTNCRYgeglDn/200.gif",
  "https://media.giphy.com/media/j3KxXPkkfyzO4M0Ypo/200.gif",
  "https://media.giphy.com/media/zcDdAiqsFNafUTgapp/200.gif",
  "https://media.giphy.com/media/5V7eKdFwCc0t4lPBrw/200.gif",
  "https://media.giphy.com/media/7YCkHr9B39sIYcbnkL/200.gif",
  "https://media.giphy.com/media/Zyk78T25ra0mEaiz06/200.gif",
  "https://media.giphy.com/media/8VexgfynDsJgaJy1gn/200.gif",
  "https://media.giphy.com/media/jmJ9erjohmO9alQhyp/200.gif",
  "https://media.giphy.com/media/72U5gva7JdVJ9awJ8A/200.gif",
  "https://media.giphy.com/media/nJ7lFJzglGjv0aRsb7/200.gif",
  "https://media.giphy.com/media/l0Iy9TZ4pqUVmW6D6/200.gif",
  "https://media.giphy.com/media/OVPzZztkjlobzvoHJc/200.gif",
  "https://media.giphy.com/media/NxJZnWD1RiWOCCwKgE/200.gif",
  "https://media.giphy.com/media/S3c1xaMso2tQzY1Uie/200.gif",
  "https://media.giphy.com/media/dRUEcx35CIV698iR3M/200.gif",
  "https://media.giphy.com/media/9MwkhcfbziBeztgoYD/200.gif",
  "https://media.giphy.com/media/Fh1nWiDE2yQqnJO2Br/200.gif",
  "https://media.giphy.com/media/NhN0MBv4dftIk86Wt4/200.gif",
  "https://media.giphy.com/media/jpOy7HTgWnFtK/200.gif",
  "https://media.tenor.com/nJFwhBwRypUAAAAM/patrick-star-broke.gif",
  "https://media.tenor.com/9HVSxY8uVRQAAAAM/wallet-penacony.gif",
  "https://media.tenor.com/Wu14QqToVmkAAAAM/im-poor-remember-heather-nill.gif",
  "https://media.tenor.com/w668zrHhYrgAAAAM/i-have-no-money-al-bundy.gif",
  "https://media.tenor.com/jtJtR71ViFIAAAAM/i%27m-broke-%27big-nick%27-o%27brien.gif",
  "https://media.tenor.com/mP79Ie2yN0YAAAAM/broke.gif",
  "https://media.tenor.com/i7R776j6W9IAAAAM/wheel-of-fortune-wheelbarrow.gif",
  "https://media.tenor.com/M2IMemPXmi4AAAAM/i-am-poor-auda-abu-tayi.gif",
  "https://media.tenor.com/t-y2Dsrx6akAAAAM/broke.gif",
  "https://media.tenor.com/aXlKqH85XfcAAAAM/i-cant-afford-that-clance.gif",
  "https://media.tenor.com/pTlqetl2SNkAAAAM/hsc-high-shelf-collective.gif",
  "https://media.tenor.com/OON4ZwAtYx0AAAAM/no-money-donald-duck.gif",
  "https://media.tenor.com/YhfTfswFUNIAAAAM/i-identify-as-poor-chris-rock.gif",
  "https://media.tenor.com/7LC4Q8e_z1sAAAAM/broke-baby.gif",
  "https://media.tenor.com/aj47iJzWZgwAAAAM/broke-no.gif",
  "https://media.tenor.com/qPXopH_7DxgAAAAM/broke-poor.gif",
  "https://media.tenor.com/22Pa5OZ-pH4AAAAM/cheap-king-of-queens.gif",
  "https://media.tenor.com/H_ASvZOfXy8AAAAM/i-haven%27t-got-any-money-tosin-cole.gif",
  "https://media.tenor.com/SFzQgrDQM2AAAAAM/brody-foxx-now-im-broke.gif",
  "https://media.tenor.com/WtuuB-JwLbkAAAAM/broke.gif",
  "https://media.tenor.com/cly3KPeX07AAAAAM/bob%27s-burgers-louise-belcher.gif",
  "https://media.tenor.com/AypF41RFJb8AAAAM/i%27m-broke-connie.gif",
  "https://media.tenor.com/E6GhBohtrt4AAAAM/im-broke-crying.gif",
  "https://media.tenor.com/FFvl_jcfs14AAAAM/i%27m-all-out-of-money-money-and-time-batman-caped-crusader.gif",
  "https://media.tenor.com/nqRL3cIS5pEAAAAM/stolas-helluva-boss.gif",
  "https://media.tenor.com/JUO8lLF0JyQAAAAM/i%27m-so-lonely-you-broke-my-heart.gif",
  "https://media.giphy.com/media/PyoyQRPyZXYq7mfxxs/200.gif",
  "https://media.giphy.com/media/TKvHkcnbtGgKxQwlqu/200.gif",
  "https://media.giphy.com/media/l0IsH7VVszP2tnzuo/200.gif",
  "https://media.giphy.com/media/3ohhwoPtcTLzAIjOGA/200.gif",
  "https://media.giphy.com/media/Msc0Msy7wosMsxc1ea/200.gif",
  "https://media.giphy.com/media/gJha9m3045fsOG0Zhk/200.gif",
  "https://media.giphy.com/media/NwpUc9BjPQGCQ/200.gif",
  "https://media.giphy.com/media/3o7TKS6AWINqbg3FV6/200.gif",
];

const localMemeGifFiles = localMemeGifLabels.map((label, index) => ({
  alt: label,
  src: `assets/memes/meme-${String(index + 1).padStart(3, "0")}.gif`,
}));

const memeGifFiles = [
  ...localMemeGifFiles,
  ...remoteMemeGifUrls.map((src, index) => ({
    alt: `broke rich meme gif ${index + localMemeGifFiles.length + 1}`,
    src,
  })),
];

const periodMultipliers = {
  year: 1,
  month: 12,
  week: 52,
  day: 365,
};

const incomeCurve = [
  { income: 0, percentile: 0 },
  { income: 500, percentile: 8 },
  { income: 1_000, percentile: 18 },
  { income: 2_000, percentile: 32 },
  { income: 3_920, percentile: 50 },
  { income: 9_733, percentile: 70 },
  { income: 20_000, percentile: 86 },
  { income: 34_000, percentile: 93 },
  { income: 58_000, percentile: 97 },
  { income: 122_100, percentile: 99.1 },
  { income: 1_000_000, percentile: 99.95 },
];

const form = document.querySelector("#incomeForm");
const amountInput = document.querySelector("#incomeAmount");
const currencyInput = document.querySelector("#currency");
const periodInput = document.querySelector("#period");
const percentileOutput = document.querySelector("#percentile");
const rankOutput = document.querySelector("#rank");
const peopleBelowOutput = document.querySelector("#peopleBelow");
const cyberClassOutput = document.querySelector("#cyberClass");
const meterFill = document.querySelector("#meterFill");
const reactionBox = document.querySelector("#reactionBox");
const reactionGif = document.querySelector("#reactionGif");
let lastMemeGifIndex = -1;
let memeGifDeck = [];

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function compact(value) {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(value);
}

function populateCurrencies() {
  const selected = currencyInput.value || "USD";
  currencyInput.replaceChildren();

  for (const currency of featuredCurrencies) {
    const option = document.createElement("option");
    option.value = currency.code;
    option.textContent = `${currency.flag} ${currency.code}`;
    option.title = currency.name;
    currencyInput.append(option);
  }

  currencyInput.value = featuredCurrencies.some((currency) => currency.code === selected) ? selected : "USD";
}

function shuffle(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

function refillMemeGifDeck() {
  memeGifDeck = shuffle(memeGifFiles.map((_, index) => index));

  if (memeGifDeck.length > 1 && memeGifDeck[0] === lastMemeGifIndex) {
    const nextIndex = memeGifDeck.findIndex((index) => index !== lastMemeGifIndex);
    [memeGifDeck[0], memeGifDeck[nextIndex]] = [memeGifDeck[nextIndex], memeGifDeck[0]];
  }
}

function showRandomMemeGif() {
  if (memeGifDeck.length === 0) {
    refillMemeGifDeck();
  }

  const index = memeGifDeck.shift();

  const gif = memeGifFiles[index];
  lastMemeGifIndex = index;
  reactionGif.src = gif.src;
  reactionGif.alt = gif.alt;
  reactionBox.hidden = false;
}

function trackCalculateEvent() {
  if (typeof window.va === "function") {
    window.va("event", { name: "Calculate" });
  }
}

async function loadExchangeRates() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD", { cache: "no-store" });
    const data = await response.json();

    if (!response.ok || data.result !== "success" || !data.rates) {
      throw new Error("Exchange rate response was not usable");
    }

    ratesPerUsd = { ...fallbackRatesPerUsd, ...data.rates };
  } catch {
    ratesPerUsd = { ...fallbackRatesPerUsd };
  }

  updateCalculator();
}

function interpolatePercentile(annualIncome) {
  if (annualIncome <= 0) return 0;

  for (let index = 1; index < incomeCurve.length; index += 1) {
    const previous = incomeCurve[index - 1];
    const next = incomeCurve[index];

    if (annualIncome <= next.income) {
      const logStart = Math.log10(Math.max(previous.income, 1));
      const logEnd = Math.log10(next.income);
      const logValue = Math.log10(Math.max(annualIncome, 1));
      const progress = (logValue - logStart) / (logEnd - logStart);
      return clamp(previous.percentile + progress * (next.percentile - previous.percentile), 0, 99.95);
    }
  }

  return 99.99;
}

function classForPercentile(percentile) {
  if (percentile < 30) return "LOW COIN";
  if (percentile < 50) return "BELOW MID";
  if (percentile < 70) return "GLOBAL MID";
  if (percentile < 90) return "COMFY";
  if (percentile < 99) return "VERY RICH";
  return "TOP 1%";
}

function updateCalculator() {
  const amount = Number(amountInput.value) || 0;
  const selectedRate = ratesPerUsd[currencyInput.value] || 1;
  const annualUsd = (amount / selectedRate) * periodMultipliers[periodInput.value];
  const percentile = interpolatePercentile(annualUsd);
  const peopleBelow = Math.round((percentile / 100) * WORLD_POPULATION);
  const rank = Math.max(1, WORLD_POPULATION - peopleBelow + 1);

  percentileOutput.textContent = `${percentile.toFixed(percentile >= 99 ? 2 : 1)}%`;
  rankOutput.textContent = `#${compact(rank)} / 8.29B`;
  peopleBelowOutput.textContent = compact(peopleBelow);
  cyberClassOutput.textContent = classForPercentile(percentile);
  meterFill.style.width = `${percentile}%`;
}

populateCurrencies();
loadExchangeRates();

form.addEventListener("input", updateCalculator);
form.addEventListener("change", updateCalculator);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  updateCalculator();
  showRandomMemeGif();
  trackCalculateEvent();
});

updateCalculator();
