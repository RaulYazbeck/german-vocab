// ─────────────────────────────────────────────
// A1 DECKS
// To add a new deck: copy one of the blocks inside "decks: [...]" and paste
// a new one after it, separated by a comma.
// Fields:
//   id    — unique string, no spaces (e.g. "a1_colors")
//   name  — display name
//   icon  — any emoji
//   words — array of { en, de, pl (optional), hint }
// ─────────────────────────────────────────────

const DECKS_A1 = {
  id: "a1",
  name: "A1",
  icon: "⭐",
  decks: [
    {
      id: "a1_months",
      name: "Months",
      icon: "📅",
      words: [
        { en: "January",   de: "Januar",    hint: "month" },
        { en: "February",  de: "Februar",   hint: "month" },
        { en: "March",     de: "März",      hint: "month" },
        { en: "April",     de: "April",     hint: "month" },
        { en: "May",       de: "Mai",       hint: "month" },
        { en: "June",      de: "Juni",      hint: "month" },
        { en: "July",      de: "Juli",      hint: "month" },
        { en: "August",    de: "August",    hint: "month" },
        { en: "September", de: "September", hint: "month" },
        { en: "October",   de: "Oktober",   hint: "month" },
        { en: "November",  de: "November",  hint: "month" },
        { en: "December",  de: "Dezember",  hint: "month" },
      ]
    },
    {
      id: "a1_numbers",
      name: "Numbers 1–10",
      icon: "🔢",
      words: [
        { en: "one",   de: "eins",   hint: "number" },
        { en: "two",   de: "zwei",   hint: "number" },
        { en: "three", de: "drei",   hint: "number" },
        { en: "four",  de: "vier",   hint: "number" },
        { en: "five",  de: "fünf",   hint: "number" },
        { en: "six",   de: "sechs",  hint: "number" },
        { en: "seven", de: "sieben", hint: "number" },
        { en: "eight", de: "acht",   hint: "number" },
        { en: "nine",  de: "neun",   hint: "number" },
        { en: "ten",   de: "zehn",   hint: "number" },
      ]
    },
  ]
};
