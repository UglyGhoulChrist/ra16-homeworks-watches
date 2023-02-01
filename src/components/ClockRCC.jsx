import React, { Component } from "react";
import styles from "./Clock.module.css";

class ClockRCC extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          date: new Date(),
        }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className={styles.clock}>
        <button className={styles.button}>&#10060;</button>
        <div className={styles.component}>React Class Component</div>
        <div className={styles.city}>Москва</div>
        <div className={styles.time}>
          {this.state.date.toLocaleTimeString()}
        </div>
      </div>
    );
  }
}
export default ClockRCC;
