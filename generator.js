function* multipleGenerator() {
    for (let i = 0; i < 10; i++) {
        yield i ** 2;
    }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);