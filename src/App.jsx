import React, { Component } from "react";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Navbar from "./Components/Navbar";
import MyShortlist from "./Components/My shortlist";
import ManageMyBooking from "./Components/Manage my booking";
import ListYourProperty from "./Components/List your property";

import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/myShortList" element={<MyShortlist />} />
          <Route path="/manageMyBooking" element={<ManageMyBooking />} />
          <Route path="/listYourProperty" element={<ListYourProperty />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
