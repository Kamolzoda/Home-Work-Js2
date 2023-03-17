// Task1
// function Check(a, b, c) {
//   if (a < b < c) return true;
//   else false;
// }
// console.log(Check(1, 2, 3));
// Task2
// function Small(a, b, c) {
//   if (a < b && a < c) return a;
//   else if (b < a && b < c) return b;
//   else return c;
// }
// console.log(Small(3, 2, 1));
// Task3
// function Min(a, b, c) {
//   let min = Math.min(a, b, c);
//   let max = Math.max(a, b, c);
//   return `${min} ${max}`;
// }
// console.log(Min(1, 2, 3));
// Task4;
// function Even(a) {
//   return (a * 2) / 2 + 2;
// }
// console.log(Even(4));
// function Name(a, b, c) {
//   if (a == b && a == c) return 3;
//   else if (b == a || b == c || c == a) return 2;
//   else return 1;
// }
// console.log(Name(3, 2, 3));
// function Sum(a, b) {
//   let c = (b % 10) * 10;
//   c += Math.floor(b / 10);
//   if (c > a) return true;
//   else return false;
// }
// console.log(Sum(9, 55));
// function Kala(a, b, c) {
//   if (a - c >= 1 && b - c >= 1) return true;
//   else return falses;
// }
// console.log(Kala(3, 4, 2));
// function Num(a, b, c) {
//   if (a < b && a < c) return `${a * 2} ${b * 2} ${c * 2}`;
//   else return `${-a} ${-b} ${-c}`;
// }
// console.log(Num(3, 2, 2));
// function Sum(a, b, c, d) {
//   if (a == b && b == c && c == d) return 0;
//   else if (b == a && b != c && b == d) return 3;
//   else if (c == a && c == b && c != d) return 4;
//   else if (d != a && d == b && d == c) return 2;
//   else return 1;
// }
// console.log(Sum(2, 2, 2, 4));
// console.log(Sum(6, 6, 5, 6));
// console.log(Sum(2, 8, 2, 2));
// function End(a) {
//   let c = Math.floor(a / 100);
//   let d = (a / 10) % 10;
//   let e = a % 10;
//   let s = c * d * e;
//   if (s > 100) return true;
//   else return false;
// }
// console.log(End(188));
// HOME WORK
// let c = "";
// function Name(n, b, cnt = 0) {
//   if (cnt == b) {
//     return c;
//   }
//   c += n;
//   return Name(n, b, cnt + 1);
// }
// console.log(Name("ab", 3));

// function equal(a, b, c) {
//   if (a == b && a == c) return 3;
//   else if (b == a || b == c || c == a) return 2;
//   else return 0;
// }
// console.log(equal(3, 4, 3));
