// essayez d'utiliser l'opérateur spread et rest

// TODO: fonction retournant un objet avec comme propriétés
// la liste des valeurs reçues en arguments et comme valeur
// le nombre de fois où elles sont apparues
export function count() {
  const result = {};
  const values = Object.values(arguments);
  values.map((curr) => {
    if (!result[curr]) {
      result[curr] = 1;
    } else {
      result[curr] += 1;
    }
    return result;
  });

  return result;
}

// exemple d'utilisation:
count("Carotte", "Chou", "Patate", "Chou", "Chou", "Carotte");
// { Carotte: 2, Chou: 3, Patate: 1 }

// TODO: fonction retournant l'argument apparu le plus de fois
export function mostFrequentIn() {
  const temp = count(...arguments);
  return Object.keys(temp).sort((a, b) => temp[b] - temp[a])[0];
}

// exemple d'utilisation:
// mostFrequentIn("Carotte", "Chou", "Patate", "Chou", "Chou", "Carotte") ===
//  "Chou";
