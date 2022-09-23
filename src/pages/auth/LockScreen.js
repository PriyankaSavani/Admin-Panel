import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

// icons
import { AiFillLock } from 'react-icons/ai';

// component
import AuthLayout from './AuthLayout'

// images
import userImg from '../../assets/images/users/user-1.jpg';

const BottomLink = () => {
    return (
        <Row className='mt-3'>
            <Col xs={12} className='text-center'>
                <p className='text-muted'>
                    <Link to='/auth/forget-password' className='text-muted ms-1'>
                        <AiFillLock className='me-1' />
                        Forget your password?
                    </Link>
                </p>
                <p className='text-muted'>
                    Not you? return
                    <Link to={'/auth/signin'} className='text-dark ms-1'>
                        <b>Sign In</b>
                    </Link>
                </p>
            </Col>
        </Row>
    );
};

const LockScreen = () => {

    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setPassword(e.target.value)
    }

    let storePassword = localStorage.getItem('password')

    const handleSubmit = () => {
        if (password === storePassword) {
            navigate('/dashboard')
        }
    }

    return (
        <AuthLayout bottomLinks={<BottomLink />}>
            <div className='text-center mb-4'>
                <h4 className='text-uppercase mt-0 mb-4'>Welcome Back</h4>
                <img src={userImg} alt='' width='88' className='rounded-circle img-thumbnail' />
                <p className='text-muted my-4'>Enter your password to access the admin.</p>
            </div>
            <Form>
                <FormGroup>
                    <Label for='password'>
                        Password
                    </Label>
                    <Input
                        id='password'
                        name='password'
                        placeholder='Enter Your Password'
                        type='password'
                        onChange={handleChange}
                    />
                </FormGroup>
                <div className='mb-0 d-grid text-center'>
                    <Button color='primary' onClick={handleSubmit}>
                        Sign In
                    </Button>
                </div>
            </Form>
        </AuthLayout>
    )
}

export default LockScreen