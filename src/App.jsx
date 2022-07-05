import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Conhecimento } from "./components/Conhecimento";
import { Projetos } from "./components/Projetos";
import {Form} from "./components/Form"
import "./App.css";
import React from "react";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="conhecimento" element={<Conhecimento />}/>
        <Route path="projetos" element={<Projetos />}/>
        <Route path="form" element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
