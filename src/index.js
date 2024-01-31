import ReactDOM from "react-dom";
import { App } from "./App";
import { App2 } from "./App2";
import { App3 } from "./App3";
import { AdminFlagProvider } from "./components/chapter6/provideres/AdminFlagProvider";



ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<App2 />, document.getElementById("root2"));

// 만약 state가 여러 개 일때는, provider를 중첩해서 사용하는 것도 방법
// 컨텍스트 객체 하나의 값이 변경되면, useContext로 컨텍스트를 참조하고 있는 컴포넌트는 모두 재렌더링 되기 때문에
ReactDOM.render(
    <AdminFlagProvider>
        <App3 /> 
    </AdminFlagProvider>,
    document.getElementById("root3"))