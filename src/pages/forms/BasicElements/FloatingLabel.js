import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

const FloatingLabel = () => {
    return (
        <>
            <h4 className='header-title'>Floating Label</h4>
            <Form inline>
                <FormGroup floating>
                    <Input
                        id='floatingEmail'
                        type='email'
                        name='email'
                        placeholder='Email'
                    />
                    <Label for='floatingEmail'>
                        Email
                    </Label>
                </FormGroup>
                <FormGroup floating>
                    <Input
                        id='floatingPassword'
                        type='password'
                        name='password'
                        placeholder='Password'
                    />
                    <Label for='floatingPassword'>
                        Password
                    </Label>
                </FormGroup>
                <Button>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default FloatingLabel