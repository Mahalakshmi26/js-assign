var user=window.prompt('enter the number');
console.log(user);

let arr = [1,2,3,4,5,6,7,8,9,10];
let odd = arr.filter(el=>el%2==1);

let oddCubes = arr.filter(el=>el%2==1).map(el=>el**3);

console.log(odd);
console.log(oddCubes);

