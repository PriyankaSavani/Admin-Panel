import React from 'react'
import { Col, Row } from 'reactstrap'

// hooks
import useRedux from '../hooks/useRedux'

const Loader = ({ className }) => {

    const { selector } = useRedux()

    const { loaderState } = selector((state) => ({
        loaderState: state.AppConfig.isLoader
    }))

    return (
        <>
            {loaderState === true &&
                <Row className={`justify-content-center ${className}`}>
                    <Col md={6}>
                        <div className='square-box-loader'>
                            <div className='square-box-loader-container'>
                                <div className='square-box-loader-corner-top'></div>
                                <div className='square-box-loader-corner-bottom'></div>
                            </div>
                            <div className='square-box-loader-square'></div>
                        </div>
                    </Col>
                </Row>
            }
        </>
    )
}

export default Loader