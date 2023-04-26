import React from 'react';
import Header from '../pages/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/shared pages/LeftNav';
import RightNav from '../pages/shared pages/RightNav';
import NavigationBar from '../pages/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;