const WORLD_POPULATION = 8_293_000_000;

const ratesToUsd = {
  USD: 1,
  INR: 0.012,
  EUR: 1.08,
  GBP: 1.26,
  JPY: 0.0064,
};

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

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function compact(value) {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(value);
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
  const annualUsd = amount * ratesToUsd[currencyInput.value] * periodMultipliers[periodInput.value];
  const percentile = interpolatePercentile(annualUsd);
  const peopleBelow = Math.round((percentile / 100) * WORLD_POPULATION);
  const rank = Math.max(1, WORLD_POPULATION - peopleBelow + 1);

  percentileOutput.textContent = `${percentile.toFixed(percentile >= 99 ? 2 : 1)}%`;
  rankOutput.textContent = `#${compact(rank)} / 8.29B`;
  peopleBelowOutput.textContent = compact(peopleBelow);
  cyberClassOutput.textContent = classForPercentile(percentile);
  meterFill.style.width = `${percentile}%`;
}

form.addEventListener("input", updateCalculator);
form.addEventListener("change", updateCalculator);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  updateCalculator();
});

updateCalculator();
