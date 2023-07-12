// 함수에 타입을 지정하려면 두군데 가능
// 1. 함수로 들어오는 자료(파라미터 = 매개변수)
// => 파라미터의 타입 지정은 파라미터 옆에 적으면 됨
// 2. 함수에서 나가는 자료(return 변수[값];)
// => 리턴값에 타입을 지정하고 싶으면 함수명() 우측에 적으면 됨
// 파라미터 x는 숫자만 들어올 수 있음
function multifly(x) {
    return x * 2;
    // return x + '1';
}
multifly(10);
// multifly('10'); // 에러발생
// 리턴값이 없을 때 리턴 타입 : void
function printX(x) {
    console.log(x);
    // return x; // 에러 발생
}
// 자바스크립트 함수와 다른점 : 타입이 지정된 파라미터는 필수임
// printX();
printX(1);
// 파라미터가 필수가 아닌 옵션일 경우에는 ? 사용
function printY(y) {
    console.log(y);
    // return x; // 에러 발생
}
printY();
printY(1);
// Quiz
// Q1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 ~~님"을 출력해주고
// 아무것도 입력하지 않고 함수를 호출하면 "이름이 없습니다" 를 출력하는 함수를 만들어보세요.
// 이 때 파라미터와 return 타입 지정 하기
function printName(name) {
    if (name) {
        console.log(`안녕하세요 ${name}님`);
    }
    else {
        console.log('이름이 없습니다');
    }
}
printName();
printName('지수');
// Q2. 함수에 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보세요. (length 속성 이용)
// 예를 들어 'apple'을 입력하면 5가 return 되어야 함
// 문자 이외의 자료가 들어오면 안됨 
function countTextLength(text) {
    return text.length;
}
console.log(countTextLength('apple'));
