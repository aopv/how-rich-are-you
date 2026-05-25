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

const retroGifLabels = [
  "NEW!", "HOT!", "WOW!", "COOL", "CLICK", "HOME", "MONEY", "CASH", "RICH?", "POOR?",
  "WWW", "NET", "EMAIL", "MODEM", "DIALUP", "Y2K", "JAVA", "HTML", "FRAMES", "TABLES",
  "HITS", "VISIT", "LOGIN", "FREE", "BONUS", "WIN!", "TOP", "RANK", "STATS", "CHART",
  "CYBER", "WEB", "PAGE", "LINKS", "BETA", "V1.0", "UPLOAD", "DOWNLOAD", "SEARCH", "INDEX",
  "FAST", "SLOW", "LOAD", "GIF!", "JPEG", "PIXEL", "FONT", "BLINK", "MIDI", "CHAT",
  "FAQ", "HELP", "NEWS", "INFO", "DATA", "GOLD", "COIN", "BANK", "VAULT", "BILLS",
  "TAX?", "PAYDAY", "SALARY", "WAGES", "INCOME", "GLOBAL", "PLANET", "HUMANS", "QUEUE", "LEVEL",
  "ELITE", "MID", "LOW", "HIGH", "ULTRA", "MEGA", "MINI", "RETRO", "GEOCITY", "PORTAL",
  "START", "ENTER", "EXIT", "BACK", "NEXT", "SAVE", "PRINT", "BOOKMARK", "AWARD", "SITE",
  "NEWEST", "TODAY", "1996", "1997", "1998", "CACHE", "SERVER", "BROWSER", "COUNTER", "GUEST",
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
const rateStatus = document.querySelector("#rateStatus");
const percentileOutput = document.querySelector("#percentile");
const rankOutput = document.querySelector("#rank");
const peopleBelowOutput = document.querySelector("#peopleBelow");
const cyberClassOutput = document.querySelector("#cyberClass");
const meterFill = document.querySelector("#meterFill");
const gifWall = document.querySelector("#gifWall");

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

function renderGifWall() {
  const styles = ["gif-hot", "gif-cool", "gif-money", "gif-warn", "gif-web", "gif-dark"];
  const selected = shuffle(retroGifLabels).slice(0, 8);

  gifWall.replaceChildren();

  selected.forEach((label, index) => {
    const tile = document.createElement("span");
    tile.className = `gif-tile ${styles[index % styles.length]}`;
    tile.textContent = label;
    gifWall.append(tile);
  });
}

async function loadExchangeRates() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD", { cache: "no-store" });
    const data = await response.json();

    if (!response.ok || data.result !== "success" || !data.rates) {
      throw new Error("Exchange rate response was not usable");
    }

    ratesPerUsd = { ...fallbackRatesPerUsd, ...data.rates };
    rateStatus.textContent = "currency rates: live web rates";
  } catch {
    rateStatus.textContent = "currency rates: rough offline fallback";
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
renderGifWall();
loadExchangeRates();
window.setInterval(renderGifWall, 4500);

form.addEventListener("input", updateCalculator);
form.addEventListener("change", updateCalculator);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  updateCalculator();
});

updateCalculator();
