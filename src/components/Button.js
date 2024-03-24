import React, { Children } from "react";
import Text from "./Text";

function MyButton({
    text,
    colorP,
    contentBtn = "Default",
    bgColor,
    widthBtn = "81px",
    heightBtn = "36px",
    hasNoBorder = true,
    hasBoxShadow = false,
    colorShadow = "#33333333",

    colorBtn,
    hasIcon = false,
    flexDirectBtn = "row"

}) {

    let buttonStyle = {
        backgroundColor: bgColor,
        width: widthBtn,
        height: heightBtn,
        border: hasNoBorder ? 'none' : ' 1px solid #3D5AFE',
        boxShadow: hasBoxShadow ? '0px 2px 3px 0px' + colorShadow : 'none',

        color: colorBtn,
        flexDirection: flexDirectBtn
    }

    let iconStyle = {
        display: hasIcon ? 'inline-block' : 'none'
    }

    return (
        <div className="buttoncomponent">
            <Text text={text} colorP= {colorP} />
            <button style={buttonStyle}>
                <span className="material-symbols-outlined icon" style={iconStyle}>
                    add_shopping_cart
                </span>
                {contentBtn}
            </button>
        </div>
    );
}

export default MyButton;