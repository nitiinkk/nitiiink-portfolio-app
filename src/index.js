import React from "react";
import ReactDom from "react-dom/client";
import App from './App.js';
import './styles/index.css';


const domnNode = document.getElementById("root");
const root = ReactDom.createRoot(domnNode);
root.render(<App/>);