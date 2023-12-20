import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button type="primary" text="Primary" />
        <Button type="secondary" text="Secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type="error-alert" />
        <Alert type="warning-alert" />
        <Alert type="info-alert" />
        <Alert type="success-alert" />
      </div>
    </div>
  );
}

export default App;
