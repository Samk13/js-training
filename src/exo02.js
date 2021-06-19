// retourne true si l'objet a une propriété ayant comme clé key
export function hasProperty(obj, key) {
  if (Object.keys(obj).includes(key)) return true;
  return false;
}

// retourne true si l'objet a une propriété ayant comme valeur value
export function hasPropertyValue(obj, value) {
  if (Object.values(obj).includes(value)) return true;
  return false;
}

// retourne le nombre de propriétés d'un objet (note: sans compter les propriétés déléguées)
export function getNumberOfProperties(obj) {
  const x = Array.from(Object.keys(obj));
  return x.length;
}
