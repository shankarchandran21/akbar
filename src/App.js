import "./App.css";
import { Deals, Desination, Form, Stories } from "./container";
function App() {
  return (
    <div>
      <Deals />
      <div className="bgColor">
        <Desination />
        <Stories />
      </div>
      <Form />
    </div>
  );
}

export default App;
