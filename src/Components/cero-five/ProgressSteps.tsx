import React, { useEffect, useState } from "react";
import style from "../../styles/ProgresSteps.module.css";

export default function ProgressSteps() {
  const [active, setActive] = useState({
    one: true,
    two: false,
    three: false,
    four: false,
  });

  let [contador, setContador] = useState(1);

  useEffect(() => {
    setActive({
      one: contador > 0,
      two: contador > 1,
      three: contador > 2,
      four: contador > 3,
    });
  }, [contador]);

  const handleAvtive = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.id === "next") {
      if (contador < 4) setContador(contador + 1);
    } else {
      if (contador > 1) setContador(contador - 1);
    }
  };

  const value =
    contador === 1 ? 1 : contador === 2 ? 30 : contador === 3 ? 60 : 90;

  return (
    <div
      className={`${style.container} items-center justify-center text-center animate-fade-up animate-once`}
    >
      <div className={`${style.progresscontainer} flex justify-between`}>
        <div
          className={`${style.progress}`}
          style={{ width: `${value}%` }}
        ></div>
        <div
          className={
            active.one ? `${style.circle} ${style.active}` : `${style.circle}`
          }
        >
          1
        </div>
        <div
          className={
            active.two ? `${style.circle} ${style.active}` : `${style.circle}`
          }
        >
          2
        </div>
        <div
          className={
            active.three ? `${style.circle} ${style.active}` : `${style.circle}`
          }
        >
          3
        </div>
        <div
          className={
            active.four ? `${style.circle} ${style.active}` : `${style.circle}`
          }
        >
          4
        </div>
      </div>

      <button
        id="prev"
        className={`${style.btn} bg-[#3498db] m-3 w-[90px] h-[35px] rounded-[6px] text-white`}
        onClick={(event) => handleAvtive(event)}
        disabled={contador === 1}
      >
        Prev
      </button>
      <button
        id="next"
        className={`${style.btn} bg-[#3498db] m-3 w-[90px] h-[35px] rounded-[6px] text-white`}
        onClick={(event) => handleAvtive(event)}
        disabled={contador === 4}
      >
        Next
      </button>
    </div>
  );
}
