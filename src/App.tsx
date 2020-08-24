import * as React from "react";
import "./styles.css";

import Card from "./Card/Card";

export default function App() {
  return (
    <div className="App">
      <Card date={new Date()} />
    </div>
  );
}
