//콜백 함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

//여기서 파라미터로 action이라는 함수를 파라미터로 받는다.
//외부로 부터 주어진 함수를 콜백 함수라고 하는데 특징은 action이라는 레퍼런스만 받아서 나중에 함수 안에서 호출한다. 
//action은 외부에서 레퍼런스를 주기 전까지 어떤 함수인지 모름. 고차함수인 calculator안에서 필요한 순간에 호출이 나중에 됨.
function calculator(a, b, action) {
    let result = action(a, b);
    console.log(result);
    return result;
}

//add라는 레퍼런스를 콜백함수로 전달한다. 
//여기서 add()를 호출하지 않았기 때문에 주소값만 전달된다. 그리고 calculator함수 안에 콜백함수인 action이 add의 익명함수가 된다.
calculator(1, 2, add);