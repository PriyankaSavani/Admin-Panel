import React, { useEffect } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'

const AuthLayout = ({ bottomLinks, children }) => {

    useEffect(() => {
        if (document.body) {
            document.body.classList.add('auth-bg');
        }
        return () => {
            if (document.body) {
                document.body.classList.remove('auth-bg');
            }
        };
    }, []);

    return (
        <div className='my-5'>
            <Container>
                <Row className='justify-content-center'>
                    <Col md={8} lg={6} xl={4}>
                        <div className='text-center mb-4'>
                            <h3>Admin Panel</h3>
                        </div>
                        <Card className='p-sm-3'>
                            <CardBody>
                                {children}
                            </CardBody>
                        </Card>
                        {bottomLinks}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AuthLayout