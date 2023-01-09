//함수 표현식 const name = function() { }
let add = function(a, b) { 
    return a + b;
};

console.log(add(1,2));

//화살표 함수 const name = () => {}
addArrow = (a,b) => {
    return a + b;
};

console.log(addArrow(2,3));

//함수를 정의하고 바로 호출 하고 싶을때
//IIFE(Immedicately-Invoked Function Expressions) 즉각적으로 호출이 되는 함수 표현식
(function run() {
    console.log('^^');
})();