import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'

// component
import FormInput from '../../../components/form/FormInput'

// hooks
import usePageTitle from '../../../hooks/usePageTitle'
import useValidation from '../../../hooks/useValidation'

// api
import { RestService } from '../../../rest/RestService'

// utilities
import { EditUserSchema } from '../../../utilities/Schema'

const EditUser = () => {

    // page title
    usePageTitle({
        title: 'Edit User'
    })

    const [userDetail, setUserDetail] = useState({
        name: '',
        email: '',
        gender: '',
        status: ''
    })

    const userID = useParams()
    const navigate = useNavigate()
    const { validation, apiValidation } = useValidation()

    useEffect(() => {
        const FetchData = async () => {
            let body = { userID }
            let res = await RestService.userDetails(body)
            if (res) {
                setUserDetail(res.data)
            }
        }
        FetchData()
    }, [userID])

    // handle change
    const handleChange = (e) => {
        setUserDetail({ ...userDetail, [e.target.name]: e.target.value })
    }

    // handle edit user
    const handleEditUser = async (e) => {
        e.preventDefault()
        let isValid = validation(EditUserSchema, userDetail)
        if (isValid) {
            let res = await RestService.updateUser(userDetail)
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
                            {/* <Col lg={6}>
                                <FormInput
                                    label='Id'
                                    type='text'
                                    name='id'
                                    value={userDetail.id}
                                    showFeedback={true}
                                    onChange={handleChange}
                                    disabled
                                />
                            </Col> */}
                            <Col lg={12}>
                                <FormInput
                                    label='Name'
                                    type='text'
                                    name='name'
                                    value={userDetail.name}
                                    showFeedback={true}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col lg={6}>
                                <FormInput
                                    label='Email ID'
                                    type='email'
                                    name='email'
                                    value={userDetail.email}
                                    showFeedback={true}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col lg={6}>
                                <FormInput
                                    label='Gender'
                                    type='select'
                                    name='gender'
                                    value={userDetail.gender}
                                    showFeedback={true}
                                    onChange={handleChange}
                                >
                                    <option>--Select Gender--</option>
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                </FormInput>
                            </Col>
                            <Col lg={12}>
                                <FormInput
                                    label='Status'
                                    type='select'
                                    name='status'
                                    value={userDetail.status}
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
                            onClick={handleEditUser}
                        >
                            Edit
                        </Button>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default EditUser