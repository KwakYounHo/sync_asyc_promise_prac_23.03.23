// const A = /^[a-zA-z0-9]{4,12}$/;
// console.log(A.test('abdc'));


// const B = /^[A-z0-9]{4,12}$/
// console.log(B.test('asda_0415'));


// const C = /^[A-z0-9]{4,12}$/
// console.log(C.test('asda^0415'));


// const D = /^[a-zA-Z0-9]{4,12}$/
// console.log(D.test('asda^0415'));

// \r -> 캐리지 리턴
// \n -> 라인 피드
// \w -> 대소문자숫자언더바
// \s -> 공백
// \d -> 숫자
// \D -> 숫자 제외
// [] -> 집합
// {} -> 반복횟수
// ^  -> 문장 시작
// $  -> 문장 끝

// const E = /^[\w]{4,12}$/
// console.log(E.test('abc_A123'))

// const F = /\s/
// console.log(F.test('abc_12 3d'))

// const G = /^[\w]{4,12}$/
// console.log(G.test('abc_123[]'))

// const H = /^[A-z0-9]{4,12}$/   // ----> A-z 사이에는 (-),(_),([]),(^)문자가 포함되어 있음
// console.log(H.test('abc_DEF123[]^'))