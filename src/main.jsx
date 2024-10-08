import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage.jsx";
import AddCardPage from "./pages/AddCardPage.jsx";

// Redux Toolkit
import { Provider } from "react-redux";
import store from "./redux/configureStore.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addcard" element={<AddCardPage />} />
        </Routes>

        <App />
      </Router>
    </Provider>
  </StrictMode>
);
