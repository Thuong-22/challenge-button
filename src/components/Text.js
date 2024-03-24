import React from "react";

function Text({
    text =/*#__PURE__*/"<Button />",
    colorP = "#333333"
}) {
    let pStyle = {
        color: colorP
    }
    return (
        <p className="text" style={pStyle}>{text}</p>
    )
}

export default Text;