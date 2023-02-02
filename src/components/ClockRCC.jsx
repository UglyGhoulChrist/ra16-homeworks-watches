import React, { Component } from "react";
import styles from "./Clock.module.css";
const moment = require("moment");

class ClockRCC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().utc(this.props.offsetMinutes).format("HH:mm:ss"),
    }; // время с учетом смещения
  }

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          time: moment().utc(this.props.offsetMinutes).format("HH:mm:ss"), // время с учетом смещения
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
        <button
          onClick={() => this.props.hadleDeleteClock(this.props.id)}
          className={styles.button}
        >
          &#10060;
        </button>
        <div className={styles.component}>React Class Component</div>
        <div className={styles.city}>{this.props.city}</div>
        <div className={styles.time}>{this.state.time}</div>
      </div>
    );
  }
}
export default ClockRCC;
