import React, { useState } from "react";
import Search from "../SVG/SvgComponent";
import style from "../../styles/HiddenSearchWidget.module.css";

function HiddenSearchWidget() {
  const [active, setActive] = useState<boolean>(true);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div className={active ? style.search : `${style.search} ${style.active}`}>
      <div className={style.contenedor}>
        <input
          type="text"
          className={style.input}
          // disabled={active === true}
          placeholder="Search..."
        />
        <button className={style.btn} onClick={handleActive}>
          <Search />
        </button>
      </div>
    </div>
  );
}

export default HiddenSearchWidget;
