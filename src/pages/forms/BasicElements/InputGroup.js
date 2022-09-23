import React from 'react'
import { BsChevronDown } from 'react-icons/bs';
import { Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Input, InputGroup, InputGroupText } from 'reactstrap'

// hooks
import useToggle from '../../../hooks/useToggle';

const InputGroups = () => {

    const [isOpen, toggle] = useToggle();

    return (
        <>
            <h4 className='header-title'>Input Groups</h4>
            <Form>
                <FormGroup>
                    <InputGroup>
                        <InputGroupText>@</InputGroupText>
                        <Input placeholder='Username' />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <Input placeholder='Username' />
                        <InputGroupText>@example.com</InputGroupText>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <InputGroupText>
                            <Input addon type='checkbox' />
                        </InputGroupText>
                        <Input placeholder='Check it out' />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <Button color='primary'>Button</Button>
                        <Input />
                    </InputGroup>
                </FormGroup>
                <FormGroup className='mb-sm-0'>
                    <InputGroup>
                        <ButtonDropdown isOpen={isOpen} toggle={toggle}>
                            <DropdownToggle onClick={toggle}>
                                Button Dropdown <BsChevronDown className='ms-1' />
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>
                                    Header
                                </DropdownItem>
                                <DropdownItem disabled>
                                    Action
                                </DropdownItem>
                                <DropdownItem>
                                    Another Action
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Another Action
                                </DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                        <Input />
                    </InputGroup>
                </FormGroup>
            </Form>
        </>
    )
}

export default InputGroups