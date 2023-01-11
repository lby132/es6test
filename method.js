// const apple = {
//     name: 'apple',
//     display: function() {
//         console.log(`${this.name}: 사과`);
//     }
// }

// apple.display();
// console.log(apple.name);

// const orange = {
//     name: 'orange',
//     display: function() {
//         console.log(`${this.name}: 오렌지`);
//     }
// }

//생성자 함수
function Fruit(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    }
}

const apple = new Fruit('apple', '사과');
const orange = new Fruit('orange', '오렌지');

console.log(apple);
console.log(orange);

if (Number.EPSILON > 0 || Number.EPSILON < 1) {
    console.log(Number.EPSILON);
}