import React, { useState, useEffect } from "react";
import styles from "./Clock.module.css";
const moment = require("moment");

function ClockRFC({ city, offsetMinutes }) {
  /**
   * @description Цифровые часы
   * @param {string} city - Название города
   * @param {number} offsetMinutes - Смещение времени для этого города относительно Гринвича в минутах
   * @return {HTMLElement} - HTML разметка цифровых часов
   */

  const [timer, setTimer] = useState(
    moment().utc(offsetMinutes).format("HH:mm:ss") // время с учетом смещения
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(moment().utc(offsetMinutes).format("HH:mm:ss")); // время с учетом смещения
    }, 1000);
    return () => clearInterval(interval);
  }, [offsetMinutes]);

  return (
    <div className={styles.clock}>
      <button className={styles.button}>&#10060;</button>
      <div className={styles.component}>React Functional Component</div>
      <div className={styles.city}>{city}</div>
      <div className={styles.time}>{timer}</div>
    </div>
  );
}
export default ClockRFC;
