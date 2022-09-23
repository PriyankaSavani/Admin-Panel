import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'

// hooks
import usePageTitle from '../../../hooks/usePageTitle'

// components
import InputTypes from './InputTypes'
import Checkbox from './Checkbox'
import Radiobox from './Radiobox'
import FloatingLabel from './FloatingLabel'
import InputSizes from './InputSizes'
import InputGroups from './InputGroup'

const BasicElements = () => {

    // page title
    usePageTitle({
        title: 'Basic Elements'
    })

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <CardBody className='pb-0'>
                            <InputTypes />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={6} className='mb-3'>
                    <Card className='h-100'>
                        <CardBody className='pb-0'>
                            <FloatingLabel />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={3} md={6} className='mb-3'>
                    <Card className='h-100'>
                        <CardBody className='pb-0'>
                            <Checkbox />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={3} md={6} className='mb-3'>
                    <Card className='h-100'>
                        <CardBody className='pb-0'>
                            <Radiobox />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={6} className='mb-3'>
                    <Card className='h-100'>
                        <CardBody className='pb-0'>
                            <InputSizes />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={6} className='mb-3'>
                    <Card className='h-100'>
                        <CardBody className='pb-0'>
                            <InputGroups />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default BasicElements