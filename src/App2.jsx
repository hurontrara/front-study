import { useState, useCallback } from "react";
import { Child1 } from "./components/chapter5/Child1";
import { Child4 } from "./components/chapter5/Child4";

export const App2 = () => {

    const [num, setNum] = useState(0);

    const onClickButton = () => {
        setNum((prev) => prev + 1);
    };

    // 함수가 실행될 때 마다 다시 생성되므로, 자식 입장에서는 props가 변한 것으로 생각됨 -> useCallback과 빈 배열 사용 
    // useMemo 를 사용해 변수에서도 사용 가능
    const onClickReset = useCallback(() => {
        setNum(0);
    }, []);

    return (
        <>
            <button onClick={onClickButton}>버튼</button>
            <p>{num}</p>
            <Child1 onClickReset={onClickReset}/>
            <Child4 />
            <br />
            <br />
            <br />
        </>
    )

}