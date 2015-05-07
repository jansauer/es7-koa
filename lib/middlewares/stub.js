/**
 * Example async function.
 */
export async function stub() {
  return new Promise(function (resolve, reject) {
    fs.readFile('stub.js', function (err, data) {
      if (err) reject();
      resolve(data);
    });
  });
}
