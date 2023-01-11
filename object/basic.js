//클래스
class Fruit {
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }

    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };

}

const apple = new Fruit('apple', '사과');
const orange = new Fruit('orange', '오렌지');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: 'ellie' };

