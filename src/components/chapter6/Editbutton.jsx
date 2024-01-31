import { useContext } from "react";
import { AdminFlagContext } from "./provideres/AdminFlagProvider";


const style = {
    width : "100px",
    padding : "6px",
    borderRadius : "8px"
}

export const Editbutton = () => {

    const { isAdmin } = useContext(AdminFlagContext);

    return (
        <button style={style} disabled={!isAdmin}>수정</button>
    )

}