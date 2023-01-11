const fruits = ['🍌', '🍓', '🍇', '🍓'];
fruits.forEach((value, index, array) => console.log(value));

// 조건에 맞는(콜백함수) 아이템을 찾을때
// find: 제일 먼저 조건에 맞는 아이템을 반환
const item1 = {name:'water', price:2};
const item2 = {name:'cookie', price:3};
const item3 = {name:'rice', price:1};
const products = [item1, item2, item3];
let found = products.find((value) => value.name === 'cookie');
console.log(found);

// findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
found = products.findIndex((value) => value.name === 'cookie');
console.log(found);

//배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인 (하나라도 있으면 true)
result = products.some((item) => item.name === 'cookie');
console.log(result);

//배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인 
result = products.every((item) => item.name === 'cookie');
console.log(result);

//조건에 맞는 모든 아이템들을 새로운 배열로
result = products.filter((item) => item.name === 'cookie');
console.log(result);