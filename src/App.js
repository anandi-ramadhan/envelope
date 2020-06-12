import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Envelope />
    </div>
  );
}

function Envelope() {
  return (
    <div className="envelope">
      <div className="flex-grid">
        <Sender />
        <Stamp />
      </div>
      <Receiver />
    </div>
  );
}

function Sender() {
  return (
    <div className="sender">
      <p>Mr Sender</p>
      <p>123 Fake St</p>
      <p>Jakarta, 13830</p>
    </div>
  );
}

function Stamp() {
  return (
    <div className="stamp">
      <strong>STAMP</strong>
    </div>
  );
}

function Receiver() {
  return (
    <div className="receiver">
      <p>Mr Receiver</p>
      <p>456 Fake St</p>
      <p>San Francisco, CA 94101</p>
    </div>
  );
}

export default App;
