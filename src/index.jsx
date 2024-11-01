//src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
import { Auth0ProviderWithNavigate } from './auth0-provider-with-navigate'; // Import your custom provider

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <App />
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </>
);
