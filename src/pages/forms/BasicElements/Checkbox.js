import classNames from 'classnames';
import React from 'react'

// component
import FormInput from '../../../components/form/FormInput'
import { INPUT_VARIANTS } from './data';

const Checkbox = () => {
    return (
        <>
            <h4 className='header-title'>Checkbox</h4>
            {(INPUT_VARIANTS || []).map((variant, index) => {
                return (
                    <FormInput
                        key={index}
                        label={variant.color.charAt(0).toUpperCase() + variant.color.slice(1)}
                        type='checkbox'
                        name={`checkbox${index + 1}`}
                        containerClass={
                            classNames(
                                'form-check-' + variant.color,
                                'mb-1'
                            )
                        }
                        defaultChecked={index % 2 === 0}
                    />
                )
            })}
            <FormInput
                label='Disabled'
                type='checkbox'
                name='disabled'
                containerClass='mb-1'
                disabled
                defaultChecked
            />
        </>
    )
}

export default Checkbox