import React, { useState } from "react";
import styles from "./Form.module.css";

function Form({ handleAddClock }) {
  const [city, setCity] = useState("");
  const [timezone, setTimezone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city.trim().length > 0 && 0 <= timezone && timezone < 24) {
      handleAddClock({
        id: Math.random(),
        city: city.trim(),
        offsetMinutes: +timezone * 60,
      });
      setCity("");
      setTimezone("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Название города
        <input
          value={city}
          placeholder="Введите город"
          type="text"
          onChange={(event) => setCity(event.target.value)}
        />
      </label>
      <label className={styles.label}>
        Временная зона
        <input
          value={timezone}
          placeholder="Разница в часах"
          type="number"
          onChange={(event) => setTimezone(event.target.value)}
        />
      </label>
      <button className={styles.button}>Добавить</button>
    </form>
  );
}
export default Form;
