import React from 'react';
import LeftNav from '../shared pages/LeftNav';
import RightNav from '../shared pages/RightNav';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            {/* <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <h2>Main content.........</h2>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container> */}
            <h1>this is home</h1>
        </div>
    );
};

export default Home;