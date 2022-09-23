import classNames from 'classnames';
import React, { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { FormFeedback, FormGroup, Input, InputGroup, InputGroupText, Label } from 'reactstrap';

// password controls
const PasswordInput = ({
    type,
    name,
    value,
    placeholder,
    showFeedback,
    onChange,
    className,
    ...otherProps
}) => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <InputGroup>
                <Input
                    id={name}
                    type={showPassword ? 'text' : type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={className}
                    {...otherProps}
                />
                <InputGroupText
                    className={
                        classNames(
                            'input-group-password',
                            { 'show-password': showPassword }
                        )
                    }
                    data-password={showPassword ? 'true' : 'false'}
                >
                    {showPassword ? (
                        <span onClick={() => { setShowPassword(!showPassword) }}>
                            <BsEye />
                        </span>
                    ) : (
                        <span onClick={() => { setShowPassword(!showPassword) }}>
                            <BsEyeSlash />
                        </span>
                    )}
                </InputGroupText>
            </InputGroup>
            <FormFeedback id={`${name}Error`}></FormFeedback>
        </>
    )
}

// textual controls
const TextualInput = ({
    type,
    name,
    value,
    placeholder,
    endIcon,
    showFeedback,
    onChange,
    className,
    ...otherProps
}) => {
    return (
        <>
            {type === 'password' && endIcon ? (
                <PasswordInput
                    id={name}
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={className}
                    {...otherProps}
                />
            ) : (
                <>
                    <Input
                        id={name}
                        type={type}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        className={className}
                        {...otherProps}
                    />
                    <FormFeedback id={`${name}Error`}></FormFeedback>
                </>
            )
            }
        </>
    )
}

// checkbox and radio controls
const CheckInputs = ({
    type,
    name,
    showFeedback,
    className,
    ...otherProps
}) => {
    return (
        <>
            <Input
                id={name}
                type={type}
                name={name}
                className={className}
                {...otherProps}
            />
            <FormFeedback id={`${name}Error`}></FormFeedback>
        </>
    )
}

// select controls
const SelectInput = ({
    type,
    name,
    value,
    showFeedback,
    onChange,
    className,
    children,
    ...otherProps
}) => {
    return (
        <>
            <Input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={className}
                children={children}
                {...otherProps}
            >
            </Input>
            <FormFeedback id={`${name}Error`}></FormFeedback>
        </>
    )
}

const FormInput = ({
    label,
    type,
    name,
    value,
    placeholder,
    endIcon,
    showFeedback,
    onChange,
    className,
    containerClass,
    labelClassName,
    children,
    ...otherProps
}) => {

    const hasEndIcon = endIcon !== undefined ? endIcon : true;

    return (
        <>
            {type === 'select' ? (
                <FormGroup className={classNames(containerClass)}>
                    {label ? (
                        <Label className={labelClassName}>
                            {label}
                        </Label>
                    ) : (
                        null
                    )}
                    <SelectInput
                        id={name}
                        type={type}
                        name={name}
                        value={value}
                        showFeedback={showFeedback}
                        onChange={onChange}
                        className={className}
                        children={children}
                        {...otherProps}
                    />
                </FormGroup>
            ) : type === 'checkbox' || type === 'radio' ? (
                <FormGroup check className={classNames(containerClass)}>
                    <CheckInputs
                        type={type}
                        name={name}
                        showFeedback={showFeedback}
                        className={className}
                        {...otherProps}
                    />
                    <Label check className={labelClassName}>{label}</Label>
                </FormGroup>
            ) : (
                <FormGroup className={classNames(containerClass)}>
                    {label ? (
                        <Label className={labelClassName}>
                            {label}
                        </Label>
                    ) : (
                        null
                    )}
                    <TextualInput
                        type={type}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        endIcon={hasEndIcon}
                        showFeedback={showFeedback}
                        onChange={onChange}
                        className={className}
                        {...otherProps}
                    />
                </FormGroup >
            )
            }
        </>
    )
}

export default FormInput