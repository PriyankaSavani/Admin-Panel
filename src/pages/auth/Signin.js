import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';

// hooks
import useValidation from '../../hooks/useValidation';

// utilities
import { SignInSchema } from '../../utilities/Schema';

// component
import FormInput from '../../components/form/FormInput';
import AuthLayout from './AuthLayout';

const BottomLinks = () => {
    return (
        <Row className='mt-3'>
            <Col xs={12} className='text-center'>
                <p className='text-muted'>
                    Dont't have an account?
                    <Link to='#' className='text-dark ms-1'>
                        Sign Up
                    </Link>
                </p>
            </Col>
        </Row>
    )
}

const Signin = () => {
    let navigate = useNavigate()
    const [userInfo, setUserInfo] = useState({ email: '', password: '' })

    // handle change
    const handleChange = (e) => {
        e.persist()
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        resetErrors(userInfo)
        let isValid = validation(SignInSchema, userInfo)
        if (isValid) {
            localStorage.setItem('email', userInfo.email)
            localStorage.setItem('password', userInfo.password)
            localStorage.setItem('access_token', '42275a333d1012162a88b4f4096e821ca145ec93a41b573fe5b6562f48984f06')
            navigate('/dashboard')
        }
    }

    const { validation, resetErrors } = useValidation()

    useEffect(() => {
        localStorage.clear()
    }, [])

    return (
        <AuthLayout bottomLinks={<BottomLinks />}>
            <div className='text-center mb-4'>
                <h4 className='text-uppercase mt-0 mb-3'>
                    Sign In
                </h4>
            </div>
            <FormInput
                label='Email ID'
                type='email'
                name='email'
                value={userInfo.email}
                placeholder='Your Email'
                showFeedback={true}
                onChange={handleChange}
            />
            <FormInput
                label='Password'
                type='password'
                name='password'
                value={userInfo.password}
                placeholder='Your password'
                showFeedback={true}
                onChange={handleChange}
            />
            <FormInput
                label='Remember Me'
                type='checkbox'
                name='signInCheck'
                showFeedback={true}
            />
            <Button
                color='primary'
                className='w-100 mt-2'
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </AuthLayout>
    )
}

export default Signin