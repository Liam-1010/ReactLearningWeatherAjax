import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <Weather city="Manchester" />
    </div>
  </StrictMode>
);
