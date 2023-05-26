import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Hero } from "./Components";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./styles/App.css"
import { banner } from './Constant';



function App() {
  return (
    <Container fluid>
      <Row>
        <Col><Navbar /></Col>
      </Row>
      <Row>
        <Col><Hero banners={ banner }/></Col>
      </Row>
    </Container>
  );
}

export default App;