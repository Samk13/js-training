// retourne true si la variable passée est une primitive
export function isPrimitive(x) {
  if (typeof x === "function") return false;
  if (typeof x !== "object" || x === null) return true;
  return false;
}
