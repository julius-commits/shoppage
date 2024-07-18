export let apicall = () => {
  let promise = new Promise((resolve, reject) => {
    let data = fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => res);
    if (data) {
      resolve(data);
    } else {
      reject();
    }
  });

  return promise;
};
