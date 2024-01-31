import { useContext } from "react";
import { AdminFlagContext } from "./components/chapter6/provideres/AdminFlagProvider";
import { Card } from "./components/chapter6/Card";

export const App3 = () => {

    const { isAdmin, SetIsAdmin } = useContext(AdminFlagContext);

    const onClickSwitch = () => SetIsAdmin(!isAdmin);

    return (
        <div>
            {isAdmin ? <span>관리자입니다</span> : <span>관리자가 아닙니다</span>}
            <button onClick={onClickSwitch}>전환</button>
            <Card isAdmin={isAdmin} />
        </div>
    )

}