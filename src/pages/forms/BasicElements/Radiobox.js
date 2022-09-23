import classNames from 'classnames';
import React from 'react'

// component
import FormInput from '../../../components/form/FormInput'
import { INPUT_VARIANTS } from './data';

const Radiobox = () => {
    return (
        <>
            <h4 className='header-title'>Radiobox</h4>
            {(INPUT_VARIANTS || []).map((variant, index) => {
                return (
                    <FormInput
                        key={index}
                        label={variant.color.charAt(0).toUpperCase() + variant.color.slice(1)}
                        type='radio'
                        name='radio'
                        containerClass={
                            classNames(
                                'form-check-' + variant.color,
                                'mb-1'
                            )
                        }
                        defaultChecked={index === 0}
                    />
                )
            })}
            <FormInput
                label='Disabled'
                type='radio'
                name='disabled'
                containerClass='mb-1'
                disabled
                defaultChecked
            />
        </>
    )
}

export default Radiobox