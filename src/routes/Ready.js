import wood from "../img/wood.png";
import styled from "styled-components";

function Ready(){
    const Position = styled.div`
        width:100%;
        position: absolute;
        top: 43%;
        left: 50%;
        text-align:center;
        transform: translateY(-50%) translateX(-50%);
        -webkit- transform: translateY(-50%) translateX(-50%);
    `;
    const Wait = styled.p`
        color:white;
    `;
    return (
        <>
            <img src={wood} alt="wood" width="100%" height= "600h"/>
            <Position>
                <Wait>現在、準備中です。じばらくお待ちください。</Wait>
            </Position>
        </>
    );
}
export default Ready;