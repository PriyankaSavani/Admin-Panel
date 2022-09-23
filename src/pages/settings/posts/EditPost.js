import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'

// component
import FormInput from '../../../components/form/FormInput'

// hooks
import usePageTitle from '../../../hooks/usePageTitle'
import useValidation from '../../../hooks/useValidation'

// utilities
import { EditPostSchema } from '../../../utilities/Schema'

// api
import { RestService } from '../../../rest/RestService'

const EditPost = () => {

    // page title
    usePageTitle({
        title: 'Edit Posts'
    })

    const [postDetail, setPostDetail] = useState({
        title: '',
        body: ''
    })

    const postId = useParams()
    const navigate = useNavigate()
    const { validation, apiValidation } = useValidation()

    useEffect(() => {
        const FetchData = async () => {
            let body = { postId }
            let res = await RestService.postDetails(body)
            if (res) {
                setPostDetail(res.data)
            }
        }
        FetchData()
    }, [postId])

    // handle change
    const handleChange = (e) => {
        setPostDetail({ ...postDetail, [e.target.name]: e.target.value })
    }

    // handle edit post
    const handleEditPosts = async (e) => {
        e.preventDefault()
        let isValid = validation(EditPostSchema, postDetail)
        if (isValid) {
            let res = await RestService.updatePost(postDetail)
            if (res.data) {
                navigate('/settings/posts')
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
                                    label='ID'
                                    type='text'
                                    name='id'
                                    value={postDetail.id}
                                    showFeedback={true}
                                    disabled
                                />
                            </Col>
                            <Col lg={6}>
                                <FormInput
                                    label='User ID'
                                    type='text'
                                    name='userId'
                                    value={postDetail.user_id}
                                    showFeedback={true}
                                    disabled
                                />
                            </Col> */}
                            <Col lg={12}>
                                <FormInput
                                    label='Title'
                                    type='text'
                                    name='title'
                                    value={postDetail.title}
                                    showFeedback={true}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col lg={12}>
                                <FormInput
                                    label='Body'
                                    type='textarea'
                                    name='body'
                                    value={postDetail.body}
                                    showFeedback={true}
                                    onChange={handleChange}
                                    rows='7'
                                />
                            </Col>
                        </Row>
                        <Button
                            color='primary'
                            className='float-end'
                            onClick={handleEditPosts}
                        >
                            Edit
                        </Button>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default EditPost