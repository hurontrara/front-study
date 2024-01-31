import { Editbutton } from "./Editbutton";

const style = {
    width : "300px",
    height : "200px",
    margin : "8px",
    borderRadius : "8px",
    backgroundColor : "blue",
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center"
}

export const Card = () => {

    return (
        <div style={style}>
            <p>야마다 타로</p>
            <Editbutton />
        </div>
    )
}