import { useState } from "react";
import "./App.css";
import ClockRFC from "./components/ClockRFC";
import ClockRCC from "./components/ClockRCC";
import Form from "./components/Form";

function App() {
  const [clock, setClock] = useState({
    city: "Greenwich Mean Time",
    offsetMinutes: 0,
  });

  return (
    <div className="App">
      <Form />
      <div className="clocks">
        <ClockRFC {...clock} />
        <ClockRCC {...clock} />
      </div>
    </div>
  );
}

export default App;
