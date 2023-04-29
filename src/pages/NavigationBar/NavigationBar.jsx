import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { Button, Container } from 'react-bootstrap';


const NavigationBar = () => {
    const { user, loggedOut } = useContext(AuthContext);

    return (
        <div className='my-4'>
            <Navbar bg="light" expand="lg">
                <Container fluid>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav>
                                <Link to='/'>Home</Link>
                            </Nav>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <Nav.Link href="#action2">Career</Nav.Link>

                        </Nav>
                        {
                            user &&
                            <Nav className='fs-2 me-3'>
                                <FaUserCircle></FaUserCircle>
                            </Nav>
                        }
                        {
                            user ?
                                <Button onClick={loggedOut} variant="dark">Logout</Button>
                                :
                                <Link to="/login"><Button variant="dark">Login</Button></Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;