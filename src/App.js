import "./App.css";
import ClockRFC from "./components/ClockRFC";
import ClockRCC from "./components/ClockRCC";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Form />
      <div className="clocks">
        <ClockRFC />
        <ClockRCC />
      </div>
    </div>
  );
}

export default App;
