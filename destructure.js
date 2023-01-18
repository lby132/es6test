// 구조 분해 할당
// 데이터 뭉치를 쉽게 만들수 있다.
const fruits = ['q','b','c','d'];
const [first, second, ...other] = fruits;
console.log(first);
console.log(second);
console.log(other);

function createEmoji() {
    return ['apple', 'a'];
    return ['apple', 'a'];
}

const [title, emoji] = createEmoji();
console.log(title)
console.log(emoji);

const ellie = {name:'ellie', age:20, job: 'sw engineer'};

function display({name, age, job}) {
    console.log('이름', name);
    console.log('나이', age);
    console.log('직업', job);
}

display(ellie);


