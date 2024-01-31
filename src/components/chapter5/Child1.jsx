import { Child2 } from "./Child2";
import { Child3 } from "./Child3";
import { memo } from "react";

const style = {
    height : "200px",
    backgroundColor : "lightblue",
    padding : "8px"
}

export const Child1 = memo((props) => {

    const { onClickReset } = props;

    return (
        <div style={style}>
            <p>Child1</p>
            <button onClick={onClickReset}>리셋</button>
            <Child2 />
            <Child3 />
        </div>
    )
});