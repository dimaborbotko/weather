import React, { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home';
import CityItem from './CityItem/CityItem';
import Redirect from './Redirect';
import Login from "./Login";

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/weather" element={<Home />}/>
        <Route path="/city" element={<CityItem />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/redirect" element={<Redirect />}/>
      </Routes>
    </Router>
  );
}
