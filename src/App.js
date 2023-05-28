import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Hero, ListCard } from "./Components";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./styles/App.css"
import { banner, } from './Constant';
// import { socrates_500x450, pinker_500x450, haidt_500x450 } from './Assets';



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
        <Col><ListCard /></Col>
      </Row>
    </Container>
  );
}

export default App;

// images={ imgCard[0].icon }
// images={ imgCard[2].icon }