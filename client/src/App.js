import React from "react";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Accounts from "./components/pages/Accounts";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Nations from "./components/nations";
import Players from "./components/players";
import AddPlayers from "./components/players/actions/Add";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} exact />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nations" element={<Nations />} />
          <Route path="/players" element={<Players />} />
          <Route path="/players/add" element={<AddPlayers />} />
          <Route path="/accounts" element={<Accounts />} />

          {/* <Route path="/*" element={<Navigate to="/error" />} exact /> */}
          {/* <Route path="/login" element={<Error />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
