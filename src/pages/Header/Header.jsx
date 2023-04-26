import React, { useContext } from 'react';
import logo from "../../assets/logo.png";
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";



const Header = () => {
    
    
    return (
        <Container>
            <div className='text-center my-4'>
                <img src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <small>{moment().format('dddd, MMMM D, YYYY,')}</small>
            </div>
            <div className='d-flex my-4'>
                <Button variant="danger">Latest</Button>
                <Marquee>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
            
        </Container>
    );
};

export default Header;