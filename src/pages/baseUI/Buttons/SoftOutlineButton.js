import React from 'react'
import { Button } from 'reactstrap'
import { BUTTON_VARIANTS } from './data'

const SoftOutlineButton = () => {
    return (
        <>
            <h4 className='header-title'>Soft Outline Buttons</h4>
            <div className='button-list'>
                {(BUTTON_VARIANTS || []).map((variant, index) => {
                    return (
                        <Button color={'soft-' + variant.color} className='rounded-pill' key={index}>
                            {variant.color.charAt(0).toUpperCase() + variant.color.slice(1)}
                        </Button>
                    )
                })}
            </div>
        </>
    )
}

export default SoftOutlineButton