import React from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'

const InputSizes = () => {
    return (
        <>
            <h4 className='header-title'>Input Sizes</h4>
            <Form>
                <FormGroup>
                    <Label for='smallInput' size='sm'>
                        Small
                    </Label>
                    <Input
                        id='smallInput'
                        name='smallInput'
                        type='text'
                        bsSize='sm'
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='normalInput'>
                        Normal
                    </Label>
                    <Input
                        id='normalInput'
                        name='normalInput'
                        type='text'
                    />
                </FormGroup>
                <FormGroup className='mb-sm-0'>
                    <Label for='largeInput' size='lg'>
                        Large
                    </Label>
                    <Input
                        id='largeInput'
                        name='largeInput'
                        type='text'
                        bsSize='lg'
                    />
                </FormGroup>
            </Form>
        </>
    )
}

export default InputSizes