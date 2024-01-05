import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
// its rendering the content from App.jsx to the entryPoint
ReactDOM.createRoot(entryPoint).render(<App />);
