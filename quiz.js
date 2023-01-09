function iterator(max, action) {
    for (let i = 0; i < max; i++) {
        action(i);
    }
}

function log(num) {
    //console.log(num);
}

function double(num) {
    //console.log(num * num);
}


//iterator(5, log);
iterator(5, (num) => console.log(num));
console.log('==============')
//iterator(5, double);
iterator(5, (num) => console.log(num * num));

//setTimeout도 콜백함수를 사용함
setTimeout(() => {
    console.log('3초')
}, 3000);