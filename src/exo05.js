const paroles = [
  "Frère Jacques",
  "Dormez-vous",
  "Sonnez les matines",
  "Ding ding dong"
];

export const instructions = [];

const createFunc = (paroles, i) => `${paroles[i]}, ${paroles[i]}`;
// TOFIX: imprimer la chanson correctement
for (var i = 0; i < paroles.length; i++) {
  let x = createFunc(paroles, i);
  instructions.push(() => x);
}

// code de test, à essayer en console pour voir le problème
/*instructions.forEach(function (printNextLine) {
  console.log(printNextLine());
});*/
