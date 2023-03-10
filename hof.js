const fruits = ['π', 'π', 'π', 'π'];
fruits.forEach((value, index, array) => console.log(value));

// μ‘°κ±΄μ λ§λ(μ½λ°±ν¨μ) μμ΄νμ μ°Ύμλ
// find: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ λ°ν
const item1 = {name:'water', price:2};
const item2 = {name:'cookie', price:3};
const item3 = {name:'rice', price:1};
const products = [item1, item2, item3];
let found = products.find((value) => value.name === 'cookie');
console.log(found);

// findIndex: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ μΈλ±μ€λ₯Ό λ°ν
found = products.findIndex((value) => value.name === 'cookie');
console.log(found);

//λ°°μ΄μ μμ΄νλ€μ΄ λΆλΆμ μΌλ‘ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ (νλλΌλ μμΌλ©΄ true)
result = products.some((item) => item.name === 'cookie');
console.log(result);

//λ°°μ΄μ μμ΄νλ€μ΄ μ λΆ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ 
result = products.every((item) => item.name === 'cookie');
console.log(result);

//μ‘°κ±΄μ λ§λ λͺ¨λ  μμ΄νλ€μ μλ‘μ΄ λ°°μ΄λ‘
result = products.filter((item) => item.name === 'cookie');
console.log(result);