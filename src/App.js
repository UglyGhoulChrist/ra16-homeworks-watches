import { useState } from "react";
import "./App.css";
import ClockRFC from "./components/ClockRFC";
import ClockRCC from "./components/ClockRCC";
import Form from "./components/Form";

function App() {
  const [clocks, setClocks] = useState([
    {
      city: "Greenwich Mean Time",
      offsetMinutes: 0,
    },
  ]);

  const handleAddClocks = (newClock) => {
    setClocks([...clocks, newClock]);
    console.log("newClock", newClock);
  };

  return (
    <div className="App">
      <Form handleAddClocks={handleAddClocks} />
      <div className="clocks">
        {clocks.map((clock, idx) => (
          <ClockRFC key={idx} idx={idx} {...clock} />
        ))}

        {clocks.map((clock, idx) => (
          <ClockRCC key={idx} {...clock} />
        ))}
      </div>
    </div>
  );
}

export default App;
