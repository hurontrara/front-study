import { useEffect, useState } from "react";
import { ColoredMessage } from "./components/chapter4/ColoredMessage";
import { StyledComponents } from "./components/chapter4/StyledComponents";

// 함수형 컴포넌트
// 리액트는 화면에서 UI 요소를 구분할 때 '컴포넌트'라는 단위를 사용합니다.
// 리액트에서 앱을 이루는 가장 작은 조각
// 1) property(props) 
// - 부모 컴포넌트에서 자식 컴포넌트에 전달되는 데이터입니다. 프로퍼티값은 자식 컴포넌트에서 수정할 수 없습니다. 
// 2) state
// - 컴포넌트의 상태를 저장하고 수정 가능한 데이터입니다. 
// 3) context 
// - 부모 컴포넌트에서 생성하여 모든 자식 컴포넌트에게 전달하는 데이터입니다. 

// 리턴 이후는 한 개의 태그로 감싸져 있어야함 (fragment, <>, div 등 태그 가능)

export const App = () => {

    const [num, setNum] = useState(0);

    const onClickButton = () => {
        setNum((prev) => prev + 1);
    };
    

    useEffect(() => {       // 재렌더링 될 때, 값이 변했을 때만 실행하고 싶은 경우
        alert("state가 시작되거나, 변화했습니다.");
    }, [num]);

    const contentStyle = {
        color : "red",
        fontSize : "20px"
    }

    return (
        <>  
            <h1 style={contentStyle}>안녕하세요!</h1>
            <ColoredMessage color="blue">잘 지내시나요?</ColoredMessage>
            <ColoredMessage color="pink" message="잘 지냅니다!" />
            <StyledComponents onClickButton={onClickButton}/>
            <p>{num}</p>
            <br />
            <br />
            <br />
        </>
    );
};

