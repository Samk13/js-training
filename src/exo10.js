export function i18n(strings, ...vars) {
  // utilitaire basique d'internationalisation
  // TODO: remplacer chaque fragment de texte avec i18n.translate
  // console.log("🥎", strings);
  return strings.reduce(
    (lang, string, txt) => `${lang}${i18n.translate(string)}${vars[txt] || ""}`,
    ""
  );
}

Object.assign(i18n, {
  locale: "fr",
  locales: {
    fr: {
      "Hello ": "Bonjour ",
      ", you have ": ", vous avez ",
      " new mails.": " nouveaux messages."
    }
  },
  translate(str) {
    let messages = i18n.locales[i18n.locale] || {};
    return messages[str] || str;
  }
});

const name = "Bob",
  nbMails = 3;

// console.log(i18n`Hello ${name}, you have ${nbMails} new mails.`);
