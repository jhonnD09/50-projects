import React from "react";
import styles from "../../styles/splitLandingPage.module.css";

function SplitLandingPage() {
  return (
    <div className=" w-full h-[100vh] flex">
      <div className={`${styles.containerPs} ${styles.left}`}>
        <h1>Playstation 5</h1>
        <button className={styles.butonPS}>Buy Now</button>
      </div>
      <div className={`${styles.containerXbox} ${styles.rigth}`}>
        <h1>XBox Series X</h1>
        <button className={styles.butonXB}>Buy Now</button>
      </div>
    </div>
  );
}

export default SplitLandingPage;
