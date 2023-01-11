let arr = new Array(2, 2, 3);
console.log(arr);

let arr2 = Array.of(1,2,3);
console.log(arr2);

const anotherArray = [1,2,3,4];

array = Array.from({
    0:'안',
    1:'녕',
    length:2,
});
console.log(array);

let arry = ['a','b','c','d'];
lastItem = arry.shift(); //배열 자체를 수정
console.log(arry);
console.log(lastItem);

//중간에 추가 또는 삭제
const deleted = arry.splice(1,1); //1부터 시작해서 하나를 삭제한다.
console.log(arry);
console.log(deleted);
arry.splice(1, 0, 'e','f'); //배열 1부터 삭제하지 데이터는 0이고 e,f를 추가한다.
console.log(arry);


//중첩 배열을 하나의 배열로 펴기
let arrr = [
    [1,2,3],
    [4, [5, 6]],
    [7, 8, 9]
];

console.log(arrr);
console.log(arrr.flat()); //한단계 까지만 flat해줌
console.log(arrr.flat(2)); // 두단계 까지 flat해주게 설정

//특정한 값으로 배열 채우기
arrr.fill(0);   //fill은 배열 자체를 수정
console.log(arrr);

arrr.fill('s', 1, 3); //1번 배열 부터 3번 배열은 포함하지 않기 때문에 2번 배열까지 s로 채움
console.log(arrr);

arrr.fill('a', 1, 3);
console.log(arrr);

// 배열을 문자열로 합치기
let text = arrr.join();
console.log(text);
text = arrr.join(' | ');
console.log(text);

