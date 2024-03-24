import React from "react";
import MyButton from "./Button";
import Text from "./Text";

function GroupButtons() {
    return (
        <div>
            {/* row1 */}
            <div className="groupbutton">
                {/* colorbtn chung, has box shadown chung */}
                <MyButton
                    bgColor="#E0E0E0"
                    colorBtn="#3f3f3f"
                    hasBoxShadow={true}
                />
                <MyButton
                    text={/*#__PURE__*/"&:hover, &:focus"}
                    colorP="#828282"
                    bgColor="#aeaeae"
                    colorBtn="#3f3f3f"
                    hasBoxShadow={true}
                />
            </div>

            {/* row2 */}
            <div className="groupbutton">
                {/* colorBTN chung */}
                <MyButton
                    text={/*#__PURE__*/"<Button variant=”outline” />"}
                   
                    bgColor="#ffffff"
                    colorBtn="#3d5afe"
                    hasNoBorder={false}
                />
                <MyButton
                    text={/*#__PURE__*/"&:hover, &:focus"}
                    colorP="#828282"
                    bgColor="#eaefff"
                    colorBtn="#3d5afe"
                    hasNoBorder={false}
                />
            </div>

            {/* row3 */}
            <div className="groupbutton">
                <MyButton
                    text={/*#__PURE__*/"<Button variant=”text” />"}
                    
                    bgColor="#ffffff"
                    colorBtn="#3d5afe"
                />
                <MyButton
                    text={/*#__PURE__*/"&:hover, &:focus"}
                    colorP="#828282"
                    bgColor="#eaefff"
                    colorBtn="#3d5afe"
                />
            </div>

            {/* row4 */}
            <div className="groupbutton">
                <MyButton
                    text={/*#__PURE__*/"<Button disableShadow />"}
                    
                    bgColor="#3d5afe"
                    colorBtn="#ffffff"
                />

            </div>

            {/* row5 */}
            <div className="groupbutton">
                <MyButton
                    text={/*#__PURE__*/"<Button disabled />"}
                    contentBtn="Disabled"
                    colorP="#000000"
                    bgColor="#e0e0e0"
                    colorBtn="#9e9e9e"
                />
                <MyButton
                    text={/*#__PURE__*/"<Button variant=”text” disabled />"}
                    contentBtn="Disabled"
                    colorP="#333333"
                    bgColor="#ffffff"
                    colorBtn="#9e9e9e"
                />
            </div>

            {/* row6 */}
            <div className="groupbutton">
                <MyButton
                    text={/*#__PURE__*/"<Button startIcon=”local_grocery_store” />"}
                    colorP="#000000"
                    bgColor="#2962ff"
                    colorBtn="#ffffff"
                    widthBtn="105px"
                    hasIcon={true}
                    hasBoxShadow={true}
                    colorShadow="#0031CA33"
                />
                <MyButton
                    text={/*#__PURE__*/"<Button endIcon=”local_grocery_store” />"}
                    colorP="#000000"
                    bgColor="#2962ff"
                    colorBtn="#ffffff"
                    widthBtn="105px"
                    hasIcon={true}
                    flexDirectBtn=" row-reverse"
                    hasBoxShadow={true}
                    colorShadow="#0031CA33"
                />
            </div>

            {/* row7 */}
            <div className="groupbutton">
                <MyButton
                    text={/*#__PURE__*/"<Button size=”sm” />"}
                    colorP="#000000"
                    widthBtn="73px"
                    heightBtn="32px"

                    bgColor="#2962ff"
                    colorBtn="#ffffff"
                    hasBoxShadow={true}
                    colorShadow="#0031CA33"
                />
                <MyButton
                    text={/*#__PURE__*/"<Button size=”md” />"}
                    colorP="#000000"

                    bgColor="#2962ff"
                    colorBtn="#ffffff"
                    hasBoxShadow={true}
                    colorShadow="#0031CA33"
                />

                <MyButton
                    text={/*#__PURE__*/"<Button size=”lg” />"}

                    colorP="#000000"
                    widthBtn="93px"
                    heightBtn="42px"
                    bgColor="#2962ff"
                    colorBtn="#ffffff"
                    hasBoxShadow={true}
                    colorShadow="#0031CA33"
                />
            </div>

            {/* row8 */}
            <div className="groupbutton">
                <MyButton
                    text={/*#__PURE__*/"<Button color=”default” />"}
                    colorP="#000000"
                    bgColor="#e0e0e0"
                    colorBtn="#3f3f3f"
                    hasBoxShadow={true}
                />
                <MyButton
                    text={/*#__PURE__*/"<Button color=”primary” />"}
                    colorP="#000000"
                    bgColor="#2962ff"
                    colorBtn="#ffffff"
                    hasBoxShadow={true}
                    colorShadow="#2962FF33"
                />

                <MyButton
                    text={/*#__PURE__*/"<Button color=”secondary” />"}
                    contentBtn="Secondary"
                    widthBtn="104px"
                    colorP="#000000"
                    bgColor="#455A64"
                    colorBtn="#ffffff"
                    hasBoxShadow={true}
                    colorShadow="#455A6433"
                />

                <MyButton
                    text={/*#__PURE__*/"<Button color=”danger” />"}
                    contentBtn="Danger"
                    colorP="#000000"
                    bgColor="#D32F2F"
                    colorBtn="#ffffff"
                    hasBoxShadow={true}
                    colorShadow="#D32F2F33"
                />
            </div>

            {/* row9 */}
            <div className="groupbutton">
                <MyButton
                    text={/*#__PURE__*/"&:hover, &:focus"}
                    colorP="#828282"
                    bgColor="#aeaeae"
                    colorBtn="#3f3f3f"
                    hasBoxShadow={true}
                />
                <MyButton
                    text={null}

                    bgColor="#0039cb"
                    colorBtn="#ffffff"
                    hasBoxShadow={true}
                    colorShadow="#2962FF33"
                />

                <MyButton
                    text={null}
                    contentBtn="Secondary"
                    widthBtn="104px"
                    bgColor="#1c313a"
                    colorBtn="#ffffff"
                    hasBoxShadow={true}
                    colorShadow="#455A6433"
                />

                <MyButton
                    text={null}
                    contentBtn="Danger"
                    bgColor="#9a0007"
                    colorBtn="#ffffff"
                    hasBoxShadow={true}
                    colorShadow="#D32F2F33"
                />
            </div>

        </div>

    );
}

export default GroupButtons;