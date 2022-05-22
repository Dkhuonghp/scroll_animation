// import React, { useContext } from "react";
// import "./Toggle.css"
// import icon1 from "../../img/crown.png"
// import icon2 from "../../img/Facebook.png"
// import { themeContext } from "../../context";

// const Toggle = () => {
//     const theme = useContext(themeContext);
//     const darkMode = theme.state.darkMode;
//     const handleClick = () => {
//       // debugger
//       theme.dispatch({ type: "toggle" });
//     };
//   return (
//     <div className="toggle" onClick={handleClick}>
//         <img src={icon1} alt="" />
//         <img src={icon2} alt="" />
//         <div
//         className="t-button"
//         style={darkMode ? { left: "2px" } : { right: "2px" }}
//         ></div>
//     </div>
//   )
// }

// export default Toggle