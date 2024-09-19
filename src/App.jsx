import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import bookStore from "./redux/bookStore";
import Home from "./components/Home";
import Add from "./components/Add";
import View from "./components/View";

function App() {
  return (
    <Provider store={bookStore}>
      <Router>
        <div>
          <h1 className="text-center">Book Management System</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/view" element={<View />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
