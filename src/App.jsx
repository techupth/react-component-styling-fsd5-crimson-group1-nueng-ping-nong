import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <div className="App">
        <div className="button-components-section">
          <Button type="primary-button">button</Button>
          <Button type="secondary-button">button</Button>
        </div>
        <hr />
        <div className="alert-components-section">
          <Alert type="error-alert" />
          <Alert type="warning-alert" />
          <Alert type="info-alert" />
          <Alert type="success-alert" />
        </div>
      </div>
    </>
  );
}

export default App;
