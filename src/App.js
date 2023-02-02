import { useState } from "react";
import "./App.css";
import ClockRFC from "./components/ClockRFC";
import ClockRCC from "./components/ClockRCC";
import Form from "./components/Form";

function App() {
  const [clocks, setClocks] = useState([
    { id: 1, city: "Greenwich Mean Time", offsetMinutes: 0 },
  ]);

  const handleAddClock = (newClock) => {
    console.log("newClock", newClock);
    setClocks([...clocks, newClock]);
  };

  const hadleDeleteClock = (id) => {
    setClocks([...clocks.filter((clock) => clock.id !== id)]);
  };

  return (
    <div className="App">
      <h1>Цифровые часы городов в разных часовых поясах</h1>
      <h2>Часы дублируются. Функциональный компонент + классовый компонент</h2>
      <br />
      <Form handleAddClock={handleAddClock} />
      <div className="clocks">
        {clocks.map((clock) => (
          <ClockRFC
            hadleDeleteClock={hadleDeleteClock}
            key={clock.id}
            {...clock}
          />
        ))}

        {clocks.map((clock) => (
          <ClockRCC
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
