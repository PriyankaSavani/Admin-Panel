import React from 'react'
import { Button } from 'reactstrap'
import { BUTTON_VARIANTS } from './data'

const SoftButton = () => {
    return (
        <>
            <h4 className='header-title'>Soft Buttons</h4>
            <div className='button-list'>
                {(BUTTON_VARIANTS || []).map((variant, index) => {
                    return (
                        <Button color={'soft-' + variant.color} key={index}>
                            {variant.color.charAt(0).toUpperCase() + variant.color.slice(1)}
                        </Button>
                    )
                })}
            </div>
        </>
    )
}

export default SoftButton