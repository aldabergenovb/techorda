const show = (products) => {
  products.map((product) => {
    let paragraph = document.createElement("p");
  });
};

async function getInfo() {
  try {
    let productInfo = await fetch("https://fakestoreapi.com/products");
    let productJson = await productInfo.json();
    show(productJson);
    console.log(productJson);
  } catch (err) {
    alert(err);
  }
}

getInfo();
