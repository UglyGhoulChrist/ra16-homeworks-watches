import React, { useState } from "react";
import styles from "./Form.module.css";

function Form() {
  const [city, setCity] = useState("");
  const [timezone, setTimezone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city.trim().length > 0 && 0 <= timezone && timezone < 24) {
      console.log(city.trim(), timezone);
      setCity("");
      setTimezone("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Название
        <input
          value={city}
          type="text"
          onChange={(event) => setCity(event.target.value)}
        />
      </label>
      <label className={styles.label}>
        Временная зона
        <input
          value={timezone}
          type="number"
          onChange={(event) => setTimezone(event.target.value)}
        />
      </label>
      <button>Добавить</button>
    </form>
  );
}
export default Form;
