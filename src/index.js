import React from "react";
import "./index.css";
import {createRoot} from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
const root =createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <App />
  </BrowserRouter>
);



