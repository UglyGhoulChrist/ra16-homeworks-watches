import React, { useState, useEffect } from "react";
import styles from "./Clock.module.css";

function ClockRFC() {
  const [timer, setTimer] = useState({ date: new Date() });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer({ date: new Date() });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.clock}>
      <button className={styles.button}>&#10060;</button>
      <div className={styles.component}>React Functional Component</div>
      <div className={styles.city}>Александров</div>
      <div className={styles.time}>{timer.date.toLocaleTimeString()}</div>
    </div>
  );
}
export default ClockRFC;
