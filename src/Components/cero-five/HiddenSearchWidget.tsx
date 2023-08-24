import React, { useState } from "react";
import Search from "../SVG/SvgComponent";
import style from "../../styles/HiddenSearchWidget.module.css";

function HiddenSearchWidget() {
  const [active, setActive] = useState<boolean>(true);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div
      className={`${style.contenedor} w-full h-[20vh] flex items-center justify-center bg-gradient-to-r from-[#7d5fff] to-[#7158e2]`}
    >
      <input
        type="text"
        className={
          active
            ? `${style.input} bg-[#fff] w-0  animate-fade-right animate-once transition-transform duration-300 ease`
            : `${style.input} bg-[#fff] w-64 h-14 flex text-start p-4  animate-fade-left animate-once transition-transform duration-300 ease`
        }
        // disabled={active === true}
        placeholder="Search..."
      />
      <button
        className={
          active
            ? `${style.btn} bg-[#fff] w-14 h-14 flex items-center justify-center transition-transform duration-300 ease`
            : `${style.btn} bg-[#fff] w-14 h-14 flex items-center justify-center transform translate-x-198`
        }
        onClick={handleActive}
      >
        <Search />
      </button>
    </div>
  );
}

export default HiddenSearchWidget;

// import React, { useState } from "react";
// import Search from "../SVG/SvgComponent";
// import style from "../../styles/HiddenSearchWidget.module.css";

// function HiddenSearchWidget() {
//   const [active, setActive] = useState<boolean>(true);

//   const handleActive = () => {
//     setActive(!active);
//   };

//   return (
//     <div className={active ? style.search : `${style.search} ${style.active}`}>
//       <div className={style.contenedor}>
//         <input
//           type="text"
//           className={style.input}
//           // disabled={active === true}
//           placeholder="Search..."
//         />
//         <button className={style.btn} onClick={handleActive}>
//           <Search />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default HiddenSearchWidget;
