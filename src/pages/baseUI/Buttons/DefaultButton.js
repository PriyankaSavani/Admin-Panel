import React from 'react'
import { Button } from 'reactstrap'
import { BUTTON_VARIANTS } from './data'

const DefaultButton = () => {
    return (
        <>
            <h4 className='header-title'>Default Buttons</h4>
            <div className='button-list'>
                {(BUTTON_VARIANTS || []).map((variant, index) => {
                    return (
                        <Button color={variant.color} key={index}>
                            {variant.color.charAt(0).toUpperCase() + variant.color.slice(1)}
                        </Button>
                    )
                })}
                <Button color='light'>Light</Button>
                <Button color='link'>Link</Button>
            </div>
        </>
    )
}

export default DefaultButton