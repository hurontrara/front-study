var var1 = 'var 변수'; // 덮어쓰기, 재선언
let var2 = 'let 변수'; // 덮어쓰기
const var3 = 'const 변수';

// 객체 -> 딕셔너리처럼 사용할 수 있음
const obj1 = {
    name: '누시다',
    age: 24,
};
obj1.name = 'Nushida';
obj1.address = 'Tokyo';

// 배열 : 리액트에서는 동적으로 바뀌는 값을 state로 선언
const arr1 = ['dog', 'cat'];
arr1[0] = 'bird';
arr1.push('monkey');

// 템플릿 문자열 : 계산식이나 함수 등도 가능
const message = `내 이름은 ${obj1.name}입니다. 나이는 ${obj1.age}세입니다.`;

// 함수
// 1. 인풋 하나일 때 소괄호 생략 가능 | 2. 처리를 한 행으로 반환하는 경우 중괄호와 리턴 생략 가능(동시에 해야) | 3. 반환 값이 여러 행이면 ()로 감싸서 단일 행처럼;
// 2. 디폴트 값 설정 가능
const func1 = function func1(value) {
    return value;
};

const func2 = (value) => {
    return value;
};

const func3 = (value) => value + 1;

const func4 = (val1 = "게스트", val2) => (
    {
        name: val1,
        age: val2,
    }
);

// 객체 분할 대입
// 디폴트 사용 가능(없으면)
const age = 24;
const myProfile = {
    name : "누시다",     
    age  // 이미 변수가 정의되어 있고 같은 이름일 때는 생략 가능
}
const {name, localAge} = myProfile;
const {name : newName, age : newAge} = myProfile;

// 배열 분할 대입 : 순서대로
const myProfileList = ["누시다", 24];
const [nameByList, ageByList] = myProfileList;


// 스프레드 구문 : 파이썬과 같이 유용한 사용 지원(리스트에서처럼), 객체에서도 사용 가능
// 배열의 얕은 복사에서 유용
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;

const arr4 = [10, 20];
const arr8 = [...arr4];
arr8[0] = 100;

// 기본 for 문
const nameArr = ["누시다", "사키오카", "고토"];
for (let index = 0; index < nameArr.length; index++) {
    const element = nameArr[index]; // 지역 변수라 상관 없음
}

// 람다식의 핵심 : 1. 결과는 배열("리턴값"에 따라 요소들이 바뀜) 2. 각 요소에 대하여 돈다.

// map 함수
const nameArr2 = nameArr.map(name => name === "누시다");
nameArr.map((name, index) => {
    return name;                // 인덱스 사용 가능(filter에서도 가능)
})

// map 함수와 if-else 문
nameArr.map(name => {
    if (name == "누시다") {
        return name;
    } else {
        return `${name}님`;
    }
});

// 삼항 연산자를 통해 이런 식으로 사용 가능
const nameToNum = nameArr.map(name => {
    const adjustedName = name === "누시다" ? 5 : 6;
    return adjustedName;
})

// 타입 검사
const boolean = typeof 1 === "number" ? true : false;
// 논리 연산
const booleanTrue = true || false;
const booleanFalse = true && false;



// filter 함수
const nameArr3 = nameArr.filter(name => name === "누시다");


