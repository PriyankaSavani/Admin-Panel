import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'

// hooks
import usePageTitle from '../../../hooks/usePageTitle'

// component
import DefaultButton from './DefaultButton'
import RoundedButton from './RoundedButton'
import OutlineButton from './OutlineButton'
import OutlineRoundedButton from './OutlineRoundedButton'
import SoftButton from './SoftButton'
import SoftOutlineButton from './SoftOutlineButton'
import ButtonWidth from './ButtonWidth'
import ButtonSize from './ButtonSize'
import ButtonDisabled from './ButtonDisabled'
import IconButton from './IconButton'
import BlockButton from './BlockButton'
import ButtonGroups from './ButtonGroup'

const Buttons = () => {

    // page title
    usePageTitle({
        title: 'Buttons'
    })

    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <CardBody>
                            <DefaultButton />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <CardBody>
                            <RoundedButton />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card>
                        <CardBody>
                            <OutlineButton />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <CardBody>
                            <OutlineRoundedButton />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card>
                        <CardBody>
                            <SoftButton />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <CardBody>
                            <SoftOutlineButton />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4} className='mb-3'>
                    <Card className='h-100'>
                        <CardBody>
                            <ButtonWidth />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={4} className='mb-3'>
                    <Card className='h-100'>
                        <CardBody>
                            <ButtonSize />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={4} className='mb-3'>
                    <Card className='h-100'>
                        <CardBody>
                            <ButtonDisabled />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6} className='mb-3'>
                    <Card className='h-100'>
                        <CardBody>
                            <IconButton />
                            <BlockButton />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6} className='mb-3'>
                    <Card className='h-100'>
                        <CardBody>
                            <ButtonGroups />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Buttons