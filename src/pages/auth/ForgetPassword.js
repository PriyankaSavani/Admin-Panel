import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

// component
import AuthLayout from './AuthLayout'

const BottomLink = () => {
    return (
        <Row className='mt-3'>
            <Col className='text-center'>
                <p className='text-muted'>
                    Back to
                    <Link to={'/auth/signin'} className='text-dark ms-1'>
                        <b>Sign In</b>
                    </Link>
                </p>
            </Col>
        </Row>
    );
};

const ForgetPassword = () => {

    const passwordObject = {
        newPassword: '',
        confirmPassword: ''
    }

    const [password, setPassword] = useState(passwordObject)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setPassword({ ...password, [e.target.name]: e.target.value })
    }

    const handleReset = () => {
        if (passwordObject.newPassword === passwordObject.confirmPassword) {
            localStorage.setItem('password', password.confirmPassword)
            navigate('/auth/lock-screen')
        }
    }

    return (
        <AuthLayout bottomLinks={<BottomLink />}>
            <div className='text-center mb-4'>
                <h4 className='text-uppercase mt-0 mb-3'>Reset Password</h4>
            </div>
            <Form>
                <FormGroup>
                    <Label for='newPassword'>
                        New Password
                    </Label>
                    <Input
                        id='newPassword'
                        name='newPassword'
                        placeholder='Enter Your New Password'
                        type='password'
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='confirmPassword'>
                        Confirm Password
                    </Label>
                    <Input
                        id='confirmPassword'
                        name='confirmPassword'
                        placeholder='Enter Your Confirm Password'
                        type='password'
                        onChange={handleChange}
                    />
                </FormGroup>
                <div className='mb-0 d-grid text-center'>
                    <Button color='primary' type='submit' onClick={handleReset}>
                        Reset
                    </Button>
                </div>
            </Form>
        </AuthLayout>
    )
}

export default ForgetPassword