//자바스크립트 전역에서 사용할 수 있는, 즉 어떤 object를 통하지 않고 바로 접근할 수 있는 것들

console.log(globalThis);

eval('const num = 2; console.log(num)');

// URL (URI의 하위 개념)
// 아스키 문자로만 구성 되어야 함
// 한글이나 특수문자는 이스케이프 처리 해야함
// 프론트 앤드와 백앤드가 서로 통신할때 유용하게 사용
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL); //이스케이프 처리됨
console.log(encoded);

const decoded = decodeURI(encoded); //이스케이프 처리된 url을 다시 복원해준다.
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));