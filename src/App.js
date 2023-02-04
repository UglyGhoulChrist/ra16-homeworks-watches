import { useState } from "react";
import "./App.css";
import ClockRFC from "./components/ClockRFC";
import Form from "./components/Form";

function App() {
  const [clocks, setClocks] = useState([
    { id: 1, city: "Greenwich Mean Time", offsetMinutes: 0 },
  ]);

  const handleAddClock = (newClock) => {
    setClocks([...clocks, newClock]);
  };

  const hadleDeleteClock = (id) => {
    setClocks([...clocks.filter((clock) => clock.id !== id)]);
  };

  return (
    <div className="App">
      <h1>Аналоговые часы в разных часовых поясах</h1>
      <Form handleAddClock={handleAddClock} />
      <div className="clocks">
        {clocks.map((clock) => (
          <ClockRFC
            hadleDeleteClock={hadleDeleteClock}
            key={clock.id}
            {...clock}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
