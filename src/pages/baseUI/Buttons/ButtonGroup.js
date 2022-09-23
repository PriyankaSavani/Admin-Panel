import React from 'react'
import { BsChevronDown } from 'react-icons/bs';
import { Button, ButtonDropdown, ButtonGroup, Col, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap'

// hooks
import useToggle from '../../../hooks/useToggle';

const ButtonGroups = () => {

    const [isOpen, toggle] = useToggle();
    const [isOpen2, toggle2] = useToggle();

    return (
        <>
            <h4 className='header-title'>Button Group</h4>
            <Row>
                <Col xxl={6}>
                    <ButtonGroup className='mb-2'>
                        <Button color='secondary'>Left</Button>
                        <Button color='secondary'>Middle</Button>
                        <Button color='secondary'>Right</Button>
                    </ButtonGroup>

                    <br />

                    <ButtonGroup className='mb-2 me-1'>
                        <Button color='secondary'>1</Button>
                        <Button color='secondary'>2</Button>
                        <Button color='secondary'>3</Button>
                        <Button color='secondary'>4</Button>
                    </ButtonGroup>
                    <ButtonGroup className='mb-2 me-1'>
                        <Button color='secondary'>5</Button>
                        <Button color='secondary'>6</Button>
                        <Button color='secondary'>7</Button>
                    </ButtonGroup>
                    <ButtonGroup className='mb-2'>
                        <Button color='secondary'>8</Button>
                    </ButtonGroup>

                    <br />

                    <ButtonGroup className='mb-2'>
                        <Button color='secondary'>1</Button>
                        <Button color='secondary'>2</Button>
                        <Button color='secondary'>3</Button>
                        <ButtonDropdown isOpen={isOpen} toggle={toggle}>
                            <DropdownToggle onClick={toggle}>
                                4 <BsChevronDown className='ms-1' />
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem>Dropdown Link</DropdownItem>
                                <DropdownItem>Dropdown Link</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </ButtonGroup>
                </Col>
                <Col xxl={6}>
                    <Row>
                        <Col xl={6} lg={2} xs={4}>
                            <ButtonGroup vertical>
                                <Button color='secondary'>Top</Button>
                                <Button color='secondary'>Middle</Button>
                                <Button color='secondary'>Bottom</Button>
                            </ButtonGroup>
                        </Col>
                        <Col xl={6} lg={2} xs={4}>
                            <ButtonGroup vertical>
                                <Button color='secondary'>Button 1</Button>
                                <Button color='secondary'>Button 2</Button>
                                <ButtonDropdown isOpen={isOpen2} toggle={toggle2}>
                                    <DropdownToggle onClick={toggle2}>
                                        Button 3 <BsChevronDown className='ms-1' />
                                    </DropdownToggle>
                                    <DropdownMenu end>
                                        <DropdownItem>Dropdown Link</DropdownItem>
                                        <DropdownItem>Dropdown Link</DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </ButtonGroup >
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default ButtonGroups