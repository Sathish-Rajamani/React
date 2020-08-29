import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class HomePage extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row>
          <div className="mainHeader">header</div>
        </Row>
        <Row>
          <Col className="col1">side bar</Col>
          <Col className="col2">main content</Col>
        </Row>
        <Row>
          <div className="mainFooter">footer</div>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
