// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// let j = 6;
// for (j = 0; j < 6; j++) {
//   console.log(j);
// }

// var arr1 = [1, 2, 3, 45];
// console.log(arr1);
// arr1.forEach((element) => {
//   console.log(arr1);
// });
// var arr1 = [1, 2, 3, 45];
// var arr2 = [2, 4, 6, 8];
// document.write(arr2);
// console.log(arr1 + arr2);
// arr1.push(33);
// console.log(arr1);
// arr2.pop(2);
// console.log(arr2);
// document.write(arr2);

// var arr1 = [1, 2, 3, 4, 5];

// var arr2 = arr1.map(test);
// document.write(arr2);
// function test(x) {
//   return x * 10;
// }

// var arr = [1, 2, 3, 4, 5, 6];
var arr = [
  { fistname: 'pappu ', lastname: 'kumar', age: 25 },
  { fistname: 'pappu ', lastname: 'kumar', age: 25 },
  { fistname: 'pappu ', lastname: 'kumar', age: 25 },
  { fistname: 'pappu ', lastname: 'kumar', age: 25 },
];
// var arr1 = arr.map(function (value, index) {
//   return {
//     key: index,
//     value: value.fistname + ' ' + value.lastname + ' ' + value.age,
//   };
// });
// console.log(arr1);

// console.log('hello');

var arr1 = arr.map(test);
document.write(arr1);
function test(name, index) {
  return name.fistname + ' ' + name.lastname + ' ' + name.age;
}
