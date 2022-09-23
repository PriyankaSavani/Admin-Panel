import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'

// component
import FormInput from '../../../components/form/FormInput'

// hooks
import usePageTitle from '../../../hooks/usePageTitle'
import useValidation from '../../../hooks/useValidation'

// api
import { RestService } from '../../../rest/RestService'

// utilities
import { AddUserSchema } from '../../../utilities/Schema'

const AddUser = () => {

    // page title
    usePageTitle({
        title: 'Add User'
    })

    const navigate = useNavigate()
    const { validation, apiValidation } = useValidation()

    const [user, setUser] = useState({
        name: '',
        email: '',
        gender: '',
        status: ''
    })

    // handle change
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // handle add user
    const handleAddUser = async (e) => {
        e.preventDefault()
        let isValid = validation(AddUserSchema, user)
        if (isValid) {
            let res = await RestService.addUser(user)
            if (res.data) {
                navigate('/settings/users')
            } else {
                apiValidation(res)
            }
        }
    }

    return (
        <Row>
            <Col xl={6} lg={8}>
                <Card>
                    <CardBody>
                        <Row>
                            <Col md={12}>
                                <FormInput
                                    label='Name'
                                    type='text'
                                    name='name'
                                    value={user.name}
                                    placeholder='Your Name'
                                    showFeedback={true}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col md={6}>
                                <FormInput
                                    label='Email Id'
                                    type='email'
                                    name='email'
                                    value={user.email}
                                    placeholder='Your Email Id'
                                    showFeedback={true}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col md={6}>
                                <FormInput
                                    label='Gender'
                                    type='select'
                                    name='gender'
                                    value={user.gender}
                                    showFeedback={true}
                                    onChange={handleChange}
                                >
                                    <option>--Select Gender--</option>
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                </FormInput>
                            </Col>
                            <Col md={12}>
                                <FormInput
                                    label='Status'
                                    type='select'
                                    name='status'
                                    value={user.status}
                                    showFeedback={true}
                                    onChange={handleChange}
                                >
                                    <option>--Select Status--</option>
                                    <option value='active'>Active</option>
                                    <option value='inactive'>Inactive</option>
                                </FormInput>
                            </Col>
                        </Row>
                        <Button
                            color='primary'
                            className='float-end'
                            onClick={handleAddUser}
                        >
                            Add
                        </Button>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default AddUser