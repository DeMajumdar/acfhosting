import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
const Btn = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width
}) => {
  const {
    setIsClicked,
    initialState
  } = useStateContext();
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsClicked(!initialState),
    style: {
      backgroundColor: bgColor,
      color,
      borderRadius
    },
    className: ` text-${size} p-3 w-${width} hover:drop-shadow-sm hover:bg-${bgHoverColor}`
  }, icon, " ", text);
};
export default Btn;