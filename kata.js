let width = 100;
let height = 200;
let length = 300;
let mass = 400;

const itemsHandler = (width, height, length, mass) => {
  const volume = width * height * length;
  const bulky =
    volume >= 1000000 || length >= 150 || height >= 150 || width >= 150;
  const heavy = mass >= 20;
  if (bulky && heavy) {
    return "rejected";
  } else if (bulky || heavy) {
    return "special";
  }
  return "standard";
};

// "rejected" , "standard", special

console.log(itemsHandler(1000, 200, 100, 100));

// [200, 330, 1223, 10 ,203]
// const priceHandler= ( prices, discount) =>{

//     return wholePrice
// }
