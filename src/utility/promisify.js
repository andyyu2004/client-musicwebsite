const promisifyNoErr = fn => (...params) => new Promise((resolve, reject) => {
  fn(...params, (res) => {
    console.log(res);
    resolve(res)
  });
});
const promisify2 = fn => (...params) => new Promise((resolve, reject) => {
  fn(...params, (err, res) => {
    if(err) {
      reject(err)
    }
    resolve(res)
  });
});

export { 
  promisifyNoErr,
  promisify2,
};
