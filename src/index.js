import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import RegisterModal from "./component/modal/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./component/modal/LoginModal";
import { BrowserRouter } from "react-router-dom";
import RantModal from "./component/modal/RantModal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />

      <RegisterModal />
      <LoginModal />
      <RantModal />

      <ToasterProvider />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
