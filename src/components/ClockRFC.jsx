import React, { useState, useEffect } from "react";
import styles from "./Clock.module.css";
const moment = require("moment");

function ClockRFC({ id, city, offsetMinutes, hadleDeleteClock }) {
  /**
   * @description Цифровые часы
   * @param {string} id - Идентификатор часов
   * @param {string} city - Название города
   * @param {number} offsetMinutes - Смещение времени для этого города относительно Гринвича в минутах
   * @param {function} hadleDeleteClock - Удаление часов в родительском элементе по ИД
   * @return {HTMLElement} - HTML разметка цифровых часов
   */

  // !  Где-то встречал, если начальное значение вычисляемое,
  // ! то в useState передаём вычисление как колбэк функцию, иначе будет куча лишних вычислений.

  // Высчитывает поворот стрелок
  function calcRotation() {
    const now = moment().utcOffset(offsetMinutes); // время с учетом смещения
    const rotate = {
      hour: `rotate(${
        180 + now.format("hh") * 30 + now.format("mm") * 0.5
      }deg)`,
      minute: `rotate(${180 + now.format("mm") * 6}deg)`,
      secundes: `rotate(${180 + now.format("ss") * 6}deg)`,
    };
    return rotate;
  }

  const [turnArrow, setTurnArrow] = useState(() => calcRotation());

  useEffect(() => {
    const interval = setInterval(() => {
      setTurnArrow(calcRotation);
    }, 1000);
    return () => clearInterval(interval);
  }, [offsetMinutes]);

  return (
    <div className={styles.clock}>
      <button onClick={() => hadleDeleteClock(id)} className={styles.button}>
        &#10060;
      </button>
      <div className={styles.city}>{city}</div>
      <div className={styles.case}>
        <div className={styles.twelve}>12</div>
        <div className={styles.three}>3</div>
        <div className={styles.six}>6</div>
        <div className={styles.nine}>9</div>
        <div
          className={styles.second}
          style={{
            transform: `${turnArrow.secundes} translateX(-50%)`,
          }}
        ></div>
        <div
          className={styles.minute}
          style={{
            transform: `${turnArrow.minute} translateX(-50%)`,
          }}
        ></div>
        <div
          className={styles.hour}
          style={{
            transform: `${turnArrow.hour} translateX(-50%)`,
          }}
        ></div>
        <div className={styles.center}></div>
      </div>
    </div>
  );
}
export default ClockRFC;
