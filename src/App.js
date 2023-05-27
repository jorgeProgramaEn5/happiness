import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Hero, Card } from "./Components";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./styles/App.css"
import { banner, imgCard } from './Constant';
import { socrates, pinker, haidt } from './Assets';



function App() {
  return (
    <Container fluid>
      <Row>
        <Col><Navbar /></Col>
      </Row>
      <Row>
        <Col><Hero banners={ banner }/></Col>
      </Row>
      <Row>
        <Col><Card images={ socrates }/></Col>
        <Col><Card images={ pinker }/></Col>
        <Col><Card images={ haidt }/></Col>
      </Row>
    </Container>
  );
}

export default App;

// images={ imgCard[0].icon }
// images={ imgCard[2].icon }