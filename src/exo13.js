// fn prend en premier argument un callback
// fn(function callback(error, result){ ... }, arg1, arg2);
export function promisify(fn) {
  // TODO: retourner une fonction appelant fn mais
  // retournant une Promise au lieu de passer un callback
  return (...args) =>
    new Promise((resolve, reject) => {
      const response = (err, data) => {
        return err ? reject(err) : resolve(data);
      };
      fn(response, ...args);
    });
}

// exemple d'utilisation
