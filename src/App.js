import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Selector from "./Selector";

function App() {
  return (
    <div className="m-2">
      <Container fluid>
        <Selector />
      </Container>
    </div>
  );
}

export default App;
