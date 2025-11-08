import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import BoardView from "./components/Board";
import { applyCSSVariables } from "./config";
import "./main.scss";
import "./styles.scss";

const App = () => {
  useEffect(() => {
    // Apply CSS variables from configuration on app start
    applyCSSVariables();
  }, []);

  return <BoardView />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
