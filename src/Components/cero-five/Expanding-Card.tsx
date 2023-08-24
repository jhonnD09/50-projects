import React, { useState } from "react";
import style from "../../styles/expandingCard.module.css";

export default function ExpandingCard() {
  const [openIt, setopenIt] = useState({
    one: true,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  // React.MouseEvent<HTMLButtonElement>
  const handleClick = (event: any) => {
    const id = event.target.id;
    setopenIt({
      one: id === "one",
      two: id === "two",
      three: id === "three",
      four: id === "four",
      five: id === "five",
    });
  };

  return (
    <main className={`${style.all} animate-fade-up animate-once`}>
      <div className={style.container}>
        <div
          id="one"
          className={
            openIt.one ? `${style.panel} ${style.active}` : `${style.panel}`
          }
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
          }}
          onClick={(event) => {
            handleClick(event);
          }}
        >
          <h3>Explore The World</h3>
        </div>
        <div
          id="two"
          className={
            openIt.two ? `${style.panel} ${style.active}` : `${style.panel}`
          }
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
          }}
          onClick={(event) => {
            handleClick(event);
          }}
        >
          <h3>Wild Forest</h3>
        </div>
        <div
          id="three"
          className={
            openIt.three ? `${style.panel} ${style.active}` : `${style.panel}`
          }
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')",
          }}
          onClick={(event) => {
            handleClick(event);
          }}
        >
          <h3>Sunny Beach</h3>
        </div>
        <div
          id="four"
          className={
            openIt.four ? `${style.panel} ${style.active}` : `${style.panel}`
          }
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')",
          }}
          onClick={(event) => {
            handleClick(event);
          }}
        >
          <h3>City on Winter</h3>
        </div>
        <div
          id="five"
          className={
            openIt.five ? `${style.panel} ${style.active}` : `${style.panel}`
          }
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
          }}
          onClick={(event) => {
            handleClick(event);
          }}
        >
          <h3>Mountains - Clouds</h3>
        </div>
      </div>
    </main>
  );
}
