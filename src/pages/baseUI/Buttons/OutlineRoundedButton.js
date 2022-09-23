import React from 'react'
import { Button } from 'reactstrap'
import { BUTTON_VARIANTS } from './data'

const OutlineRoundedButton = () => {
    return (
        <>
            <h4 className='header-title'>Outline Buttons</h4>
            <div className='button-list'>
                {(BUTTON_VARIANTS || []).map((variant, index) => {
                    return (
                        <Button color={variant.color} outline className='rounded-pill' key={index}>
                            {variant.color.charAt(0).toUpperCase() + variant.color.slice(1)}
                        </Button>
                    )
                })}
            </div>
        </>
    )
}

export default OutlineRoundedButton