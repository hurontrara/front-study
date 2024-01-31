export const ColoredMessage = (props) => {  // 아예 인수 단계에서 전개하는 패턴을 사용하기도 ({color, children}) =>  

    const {color, message, children} = props

    const contentStyle = {
        color,
        fontSize : '20px'
    };

    const finalMessage = (message === undefined ? children : message);

    return <p style={contentStyle}>{finalMessage}</p>

}