import React from 'react'
import { Col, FormGroup, FormText, Input, Label, Row } from 'reactstrap'

import FormInput from '../../../components/form/FormInput'

const InputTypes = () => {
    return (
        <>
            <h4 className='header-title'>Input Types</h4>
            <Row>
                <Col lg={6}>
                    <FormInput label='Text' type='text' name='text' />
                    <FormInput label='Number' type='number' name='number' placeholder='Number Placeholder' />
                    <FormInput label='Email' type='email' name='email' placeholder='Email' />
                    <FormInput label='Show/Hide Password' type='password' name='password' value='Hello@123' onChange={() => { }} />
                    <FormInput label='Placeholder' type='text' name='placeholder' placeholder='Placeholder' />
                    <FormInput label='Text Area' type='textarea' name='textarea' rows='3' />
                    <FormInput label='Read Only' type='text' name='readOnly' placeholder='Read only Value' readOnly />
                    <FormInput label='Disabled' type='text' name='disabled' placeholder='Disabled Value' disabled />
                    <FormGroup>
                        <Label for='helpingText'>Helping Text</Label>
                        <Input id='helpingText' name='helpingText' type='text' placeholder='Helping Text' />
                        <FormText>A block of help text that breaks onto a new line and may extend beyond one line.</FormText>
                    </FormGroup>
                </Col>
                <Col lg={6}>
                    <FormInput label='Select' type='select' name='select'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </FormInput>
                    <FormInput label='Multiple Select' type='select' name='select' multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </FormInput>
                    <FormInput label='Default File Input' type='file' name='file' />
                    <FormInput label='Date' type='date' name='date' />
                    <FormInput label='Month' type='month' name='month' />
                    <FormInput label='Week' type='week' name='week' />
                    <FormInput label='Time' type='time' name='time' />
                    <FormInput label='Color' type='color' name='color' value='#727cf5' onChange={() => { }} />
                    <FormGroup>
                        <Label for='range'>Range</Label>
                        <Input id='range' name='range' type='range' />
                    </FormGroup>
                </Col>
            </Row>
        </>
    )
}

export default InputTypes