// Promise is also an object and can be called by new Promise()

let promise = new Promise((res, rej) => {
  setTimeout(() => {
    if("" === false) res('done');
    else rej('err');
  }, 1000);
});

promise.then((res) => console.log(res)).catch((err) => console.log(err));