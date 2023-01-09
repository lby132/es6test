//매개변수의 정보는 함수 내부에서 접근이 가능한 arguments라는 객체에 저장됨/
//매개변수에 기본값(Default Parameters)를 지정해줄 수 있음. a = 1, b = 2
function add(a = 1, b = 2){
    console.log(a);
    console.log(b);
    console.log(arguments);
    console.log(arguments[1]);  
    return a+b;
}
add();