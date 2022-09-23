import React from 'react'
import { Button } from 'reactstrap'
import { BUTTON_VARIANTS } from './data'

const RoundedButton = () => {
    return (
        <>
            <h4 className='header-title'>Rounded Buttons</h4>
            <div className='button-list'>
                {(BUTTON_VARIANTS || []).map((variant, index) => {
                    return (
                        <Button color={variant.color} className='rounded-pill' key={index}>
                            {variant.color.charAt(0).toUpperCase() + variant.color.slice(1)}
                        </Button>
                    )
                })}
                <Button color='light' className='rounded-pill'>Light</Button>
                <Button color='link' className='rounded-pill'>Link</Button>
            </div>
        </>
    )
}

export default RoundedButton