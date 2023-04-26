import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className='w-25 mx-auto'>
            <Form>
                <h2 className='fw-bold my-5 text-center'>Register Your Account</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Your Name</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter your Name" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Photo URL</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Please Provide a valid image link" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter your email address" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter Your Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept terms & conditions" />
                </Form.Group>
                <Button className='w-100 bg-dark' variant="primary" type="submit">
                    Submit
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already Have an Account?
                    <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;