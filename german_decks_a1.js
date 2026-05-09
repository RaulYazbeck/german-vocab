// ─────────────────────────────────────────────
// A1 DECKS
// Fields: id, name, icon, words[]
// Word fields: en, de, pl (optional), hint, examples (optional)
// examples: [{de, en}, {de, en}]
// ─────────────────────────────────────────────

const DECKS_A1 = {
  id: "a1", name: "A1", icon: "⭐",
  decks: [
    {
      id: "a1_months", name: "Months", icon: "📅",
      words: [
        { en:"January",   de:"Januar",    hint:"month", examples:[{de:"Im Januar ist es sehr kalt.",en:"In January it is very cold."},{de:"Mein Geburtstag ist im Januar.",en:"My birthday is in January."}] },
        { en:"February",  de:"Februar",   hint:"month", examples:[{de:"Der Februar ist der kürzeste Monat.",en:"February is the shortest month."},{de:"Im Februar gibt es oft Schnee.",en:"In February there is often snow."}] },
        { en:"March",     de:"März",      hint:"month", examples:[{de:"Im März beginnt der Frühling.",en:"Spring begins in March."},{de:"Es regnet oft im März.",en:"It often rains in March."}] },
        { en:"April",     de:"April",     hint:"month", examples:[{de:"Im April ist das Wetter unbeständig.",en:"In April the weather is unpredictable."},{de:"Wir fahren im April in den Urlaub.",en:"We go on holiday in April."}] },
        { en:"May",       de:"Mai",       hint:"month", examples:[{de:"Die Blumen blühen im Mai.",en:"The flowers bloom in May."},{de:"Im Mai ist es warm und schön.",en:"In May it is warm and beautiful."}] },
        { en:"June",      de:"Juni",      hint:"month", examples:[{de:"Im Juni beginnt der Sommer.",en:"Summer begins in June."},{de:"Wir grillen oft im Juni.",en:"We often barbecue in June."}] },
        { en:"July",      de:"Juli",      hint:"month", examples:[{de:"Der Juli ist der wärmste Monat.",en:"July is the warmest month."},{de:"Im Juli fahre ich ans Meer.",en:"In July I go to the sea."}] },
        { en:"August",    de:"August",    hint:"month", examples:[{de:"Im August haben die Kinder Ferien.",en:"In August the children have holidays."},{de:"Es ist sehr heiß im August.",en:"It is very hot in August."}] },
        { en:"September", de:"September", hint:"month", examples:[{de:"Im September beginnt die Schule wieder.",en:"In September school starts again."},{de:"Das Oktoberfest beginnt im September.",en:"Oktoberfest begins in September."}] },
        { en:"October",   de:"Oktober",   hint:"month", examples:[{de:"Im Oktober fallen die Blätter.",en:"In October the leaves fall."},{de:"Halloween ist im Oktober.",en:"Halloween is in October."}] },
        { en:"November",  de:"November",  hint:"month", examples:[{de:"Im November ist es oft neblig.",en:"In November it is often foggy."},{de:"Der November ist ein grauer Monat.",en:"November is a grey month."}] },
        { en:"December",  de:"Dezember",  hint:"month", examples:[{de:"Weihnachten ist im Dezember.",en:"Christmas is in December."},{de:"Im Dezember schneit es manchmal.",en:"In December it sometimes snows."}] },
      ]
    },
    {
      id: "a1_numbers", name: "Numbers 1–10", icon: "🔢",
      words: [
        { en:"one",   de:"eins",   hint:"number", examples:[{de:"Ich habe einen Bruder.",en:"I have one brother."},{de:"Eins plus eins ist zwei.",en:"One plus one is two."}] },
        { en:"two",   de:"zwei",   hint:"number", examples:[{de:"Ich habe zwei Katzen.",en:"I have two cats."},{de:"Wir brauchen zwei Tickets.",en:"We need two tickets."}] },
        { en:"three", de:"drei",   hint:"number", examples:[{de:"Das Kind ist drei Jahre alt.",en:"The child is three years old."},{de:"Ich warte seit drei Stunden.",en:"I have been waiting for three hours."}] },
        { en:"four",  de:"vier",   hint:"number", examples:[{de:"Wir sind vier Personen.",en:"We are four people."},{de:"Der Tisch hat vier Beine.",en:"The table has four legs."}] },
        { en:"five",  de:"fünf",   hint:"number", examples:[{de:"Ich stehe um fünf Uhr auf.",en:"I get up at five o'clock."},{de:"Sie hat fünf Bücher gekauft.",en:"She bought five books."}] },
        { en:"six",   de:"sechs",  hint:"number", examples:[{de:"Das Spiel dauert sechs Stunden.",en:"The game lasts six hours."},{de:"Ich habe sechs E-Mails bekommen.",en:"I received six emails."}] },
        { en:"seven", de:"sieben", hint:"number", examples:[{de:"Es gibt sieben Tage in der Woche.",en:"There are seven days in the week."},{de:"Ich schlafe sieben Stunden.",en:"I sleep seven hours."}] },
        { en:"eight", de:"acht",   hint:"number", examples:[{de:"Der Zug fährt um acht Uhr ab.",en:"The train departs at eight o'clock."},{de:"Wir haben acht Gäste eingeladen.",en:"We invited eight guests."}] },
        { en:"nine",  de:"neun",   hint:"number", examples:[{de:"Das Restaurant öffnet um neun Uhr.",en:"The restaurant opens at nine o'clock."},{de:"Ich habe neun Nachrichten.",en:"I have nine messages."}] },
        { en:"ten",   de:"zehn",   hint:"number", examples:[{de:"Zehn Minuten zu Fuß.",en:"Ten minutes on foot."},{de:"Sie ist zehn Jahre alt.",en:"She is ten years old."}] },
      ]
    },
  ]
};
