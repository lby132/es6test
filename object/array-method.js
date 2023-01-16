
// === 새로운 배열을 만들지않고 기존의 배열을 수정하는 배열 ===

const fruits = ['a','b','c','d'];

// 추가 제일 앞.
let length = fruits.unshift('e');

// 제거 제일 뒤
let length2 = fruits.pop();

// 제거 제일 앞
let length3 = fruits.shift();

// 중간에 추가 삭제
let length4 = fruits.splice(1,1);
console.log(fruits);   //배열 자체를 수정(업데이트)
console.log(length4);
fruits.splice(1,0, '1', '2');

// === 새로운 배열을 만들지않고 기존의 배열을 수정하는 배열 ===


// === 새로운 배열을 만드는 배열 ===

// slice는 기존의 배열을 유지한 상태로 잘라진 새로운 배열을 리턴한다.
let newArr = fruits.slice(0, 2); 
console.log(newArr);
console.log(fruits);

// 여러개 배열을 붙여줌
const arr1 = [1,2,3];
const arr2 = [1,2,3];
const arr3 = arr1.concat(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

// 중첩 배열을 하나의 배열로 펴기
let arr = [
    [1,2,3],
    [4, [5,6]],
];
console.log(arr);
console.log(arr.flat());

// 두개의 중첩이 되어있으면 flat()에 2를 파라미터로 주면 됨
let arrr = [
    [1,2,3],
    [4, [5,6]],
    [4, [5,6]],
];
console.log(arrr.flat(2));
arrr.flat(2)
// 특정 값으로 배열을 채움 
arrr.fill(0)
console.log(arrr);

// 배열을 문자열로 합치기
let text = arrr.join();
console.log(text);

// === 새로운 배열을 만드는 배열 ===