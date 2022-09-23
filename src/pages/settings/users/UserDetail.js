import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardHeader, CardText, Col, Row } from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom';

// hooks
import usePageTitle from '../../../hooks/usePageTitle'
import useConfirmationDialog from '../../../hooks/useConfirmationDialog';
import useLoader from '../../../hooks/useLoader';

// api
import { RestService } from '../../../rest/RestService'

const UserDetail = () => {

    // page title
    usePageTitle({
        title: 'User Detail'
    })

    const { getConfirmation } = useConfirmationDialog()

    const userID = useParams()
    const navigate = useNavigate()
    const { loader } = useLoader()

    const [userDetail, setUserDetail] = useState({})

    useEffect(() => {
        const FetchData = async () => {
            loader(true)
            let body = { userID }
            let res = await RestService.userDetails(body)
            loader(false)
            if (res) {
                setUserDetail(res.data)
            }
        }
        FetchData()
    }, [loader, userID])

    // handle edit user
    const handleEditUser = () => {
        let id = userID.id
        navigate(`/settings/users/edit-user/${id}`)
    }

    // handle delete user
    const deleteConfirmationDialog = async () => {
        const confirmed = await getConfirmation({
            body: {
                hasHeader: {
                    header: 'Are you sure you want to delete?',
                    cancleButton: true
                },
                hasFooter: {
                    confirmButton: true,
                    cancleButton: true,
                    confirmButtonText: 'Yes',
                    cancleButtonText: 'No'
                }
            }
        })

        if (confirmed) {
            let id = userID.id
            let body = { id }
            let res = await RestService.deleteUser(body)
            if (res) navigate('/settings/users')
        }
    }

    return (
        <>
            <Row className='mb-3'>
                <Col>
                    <div className='float-end'>
                        <Button
                            color='danger'
                            size='sm'
                            onClick={() => deleteConfirmationDialog()}
                            className='me-1'
                        >
                            Delete
                        </Button>
                        <Button
                            color='success'
                            size='sm'
                            onClick={handleEditUser}
                        >
                            Edit
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xxl={4} xl={5} lg={6}>
                    <Card>
                        <CardBody>
                            {userID ? (
                                <>
                                    <CardHeader tag='h4' className='header-title text-center mb-3'>
                                        Personal Information
                                    </CardHeader>
                                    <CardText><b>Name :</b> {userDetail.name}</CardText>
                                    <CardText><b>Email ID :</b> {userDetail.email}</CardText>
                                    <CardText><b>Gender :</b> {userDetail.gender}</CardText>
                                    <CardText><b>Status :</b> {userDetail.status}</CardText>
                                </>
                            ) : (
                                <CardText>User Id is not found</CardText>
                            )}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default UserDetail