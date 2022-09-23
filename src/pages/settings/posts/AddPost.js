import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'

// component
import FormInput from '../../../components/form/FormInput'

// hooks
import usePageTitle from '../../../hooks/usePageTitle'
import useValidation from '../../../hooks/useValidation'

// utilities
import { AddPostSchema } from '../../../utilities/Schema'

// api
import { RestService } from '../../../rest/RestService'

const AddPost = () => {

    // page title
    usePageTitle({
        title: 'Add Post'
    })

    const navigate = useNavigate()
    const { validation, apiValidation } = useValidation()

    const [post, setPost] = useState({
        user: '',
        title: '',
        body: ''
    })

    // handle change
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    // handle add post
    const handleAddPost = async (e) => {
        e.preventDefault()
        let isValid = validation(AddPostSchema, post)
        if (isValid) {
            let res = await RestService.addPost(post)
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
                            <Col lg={12}>
                                <FormInput
                                    label='User'
                                    type='text'
                                    name='user'
                                    value={post.user}
                                    showFeedback={true}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col lg={12}>
                                <FormInput
                                    label='Title'
                                    type='text'
                                    name='title'
                                    value={post.title}
                                    showFeedback={true}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col lg={12}>
                                <FormInput
                                    label='Body'
                                    type='textarea'
                                    name='body'
                                    value={post.body}
                                    showFeedback={true}
                                    onChange={handleChange}
                                    rows='7'
                                />
                            </Col>
                        </Row>
                        <Button
                            color='primary'
                            className='float-end'
                            onClick={handleAddPost}
                        >
                            Add
                        </Button>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default AddPost