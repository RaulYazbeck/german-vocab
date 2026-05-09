// ─────────────────────────────────────────────
// A2 DECKS
// To add a new deck: copy one of the blocks inside "decks: [...]" and paste
// a new one after it, separated by a comma.
// Fields:
//   id    — unique string, no spaces (e.g. "a2_adjectives")
//   name  — display name
//   icon  — any emoji
//   words — array of { en, de, pl (optional), hint }
// ─────────────────────────────────────────────

const DECKS_A2 = {
  id: "a2",
  name: "A2",
  icon: "🌟",
  decks: [
    {
      id: "a2_verbs_poc",
      name: "Verbs (POC)",
      icon: "⚡",
      words: [
        { en: "to run",   de: "laufen",   hint: "infinitive — irregular" },
        { en: "to sleep", de: "schlafen", hint: "infinitive — irregular" },
        { en: "to eat",   de: "essen",    hint: "infinitive — irregular" },
        { en: "to drink", de: "trinken",  hint: "infinitive — irregular" },
        { en: "to go",    de: "gehen",    hint: "infinitive — irregular" },
      ]
    },
  ]
};
