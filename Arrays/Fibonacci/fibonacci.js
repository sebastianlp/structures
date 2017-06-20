var fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 2;

for(var x = 2; x < 20; x++) {
  console.log(fibonacci[x - 1]);
  fibonacci[x] = fibonacci[x - 1] + fibonacci[x - 2];
}

document.write(fibonacci);
// console.log(fibonacci);
