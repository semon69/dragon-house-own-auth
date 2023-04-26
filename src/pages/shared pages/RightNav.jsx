import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook,FaInstagram, FaTwitter } from 'react-icons/fa';
import q1 from '../../assets/qZone1.png';
import q2 from '../../assets/qZone2.png';
import q3 from '../../assets/qZone3.png';
import bg from '../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <div className='mb-5'>
                <h5>Login with</h5>
                <div>
                    <Button className='mb-2 px-5 w-100' variant="outline-primary"><FaGoogle /> <span className='px-2'> Login with Google</span></Button>
                    <br />
                    <Button className='px-5 w-100' variant="outline-secondary"><FaGithub /> <span className='px-2'> Login with Github</span></Button>
                </div>
            </div>
            <div>
                <h6 className='mb-3'>Find on us</h6>
                <div>
                    <ListGroup>
                        <ListGroup.Item className='px-4'><FaFacebook /><span className='ps-2'>Facebook</span></ListGroup.Item>
                        <ListGroup.Item className='px-4'><FaTwitter /> <span className='ps-2'>Twitter</span></ListGroup.Item>
                        <ListGroup.Item className='px-4'><FaInstagram /> <span className='ps-2'>Instagram</span></ListGroup.Item>
                        
                    </ListGroup>
                </div>
            </div>
            <div style={{background:"grey"}} className='text-center py-5 my-5'>
                <img src={q1} alt="" />
                <img src={q2} alt="" />
                <img src={q3} alt="" />
            </div>
            
            <div style={{backgroundImage:`url(${bg})`, height:'100%', padding: "70px 40px "}} className='text-white text-center'>
                <h1 className="fw-bold mb-4">Create an Amazing Newspaper</h1>
                <p className='mb-5'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button className='px-4 py-2' variant="danger">Learn More</Button>
            </div>
        </div>
    );
};

export default RightNav;